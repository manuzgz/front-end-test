import {useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import SearchBar from "./components/Layout/SearchBar";
import ProductsList from "./components/Products/ProductsList";
import ProductDetails from "./components/Products/ProductDetails";

function App() {

  const appLocalStorage = window.localStorage;
  const productsInCache = appLocalStorage.products ? JSON.parse(appLocalStorage.products) : [];

  const [products, setProducts] = useState(productsInCache);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filtered, setFilterState] = useState(false);

  useEffect(() => {
    setFilterState(false)
  }, []);

  useEffect(() => {
    function fetchProductsHandler() {
        setFilterState(false);
        fetch("https://front-test-api.herokuapp.com/api/product")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setProducts(data);
          let expirationTime = Date.now() + 1000 * 60 * 60; // 1 h
          appLocalStorage.setItem('expirationTime', expirationTime);
          appLocalStorage.setItem('products', JSON.stringify(data));
        });
    };

    if(!appLocalStorage.products) {
      fetchProductsHandler();
    }
  }, [appLocalStorage]);

  useEffect(() => { 
    if(appLocalStorage.expirationTime && appLocalStorage.expirationTime < Date.now()) {
      appLocalStorage.clear();
    }
  }, [appLocalStorage]);

  const onInputChangeHandler = (e) => {
    let currentList = products;
    let newList = [];
    
    if (e.target.value !== "") {
      currentList = products;
      setFilterState(true);
      newList = currentList.filter((item) => {
        const lowerCase = (item.brand + " " + item.model).toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lowerCase.includes(filter);
      });
    } else {
      newList = products;
      setFilterState(false);
    }
    setFilteredProducts(newList);
  };

  const onResetFilterHandler = () => {
    setFilterState(false);
  };
 

  return (
    <Router>
      <Header></Header>
      <main>    
        <Route exact path="/details/:productId">
            <ProductDetails></ProductDetails>
        </Route>
        <Route path="/home">
          <SearchBar onChange={onInputChangeHandler} />
          <ProductsList products={ filtered ? filteredProducts : products} onResetFilterHandler={onResetFilterHandler} />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/details">
          <Redirect to="/home" />
        </Route>
      </main>
      </Router>
  );
}

export default App;
