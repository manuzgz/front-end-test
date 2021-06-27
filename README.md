# Front End Test

## Instalación

1) Ejecutar "npm install" en la carpeta descargada
2) Ejecutar "npm start" para ver el proyecto en modo desarrollo

## Scripts adicionales

* "npm build" compila la aplicación para producción
* "npm test" lanza los test
* "npm lint" ejecuta el linter

## Funcionalidades

Se han conseguido casi todas las funcionalidades descritas en el documento de requisitos. Excepciones:

* Cuando solo existe una opción de color o almacenamiento, esta opción no queda seleccionada por defecto.
* Sería necesario implementar tests y configurar el linter.

Aunque no era un requisito, se ha añadido un resumen de los items en el carrito, que se activa y desactiva al hacer click en el icono del carrito.

Los datos recibidos de la API se almacenan en el local storage del navegador del cliente durante una hora, para evitar nuevas llamadas a dicha API.

Los items en el carrito, tienen persistencia en memoria, siempre que no se recargue la página. Esto se ha implementado haciendo uso de los Hooks _useReducer_ y _useContext_.

## Despliegue

Para desplegarla en Firebase deberemos ejecutar los siguientes comandos:
* npm install -g firebase-tools
* firebase login
* firebase init
* npm run build
* firebase deploy

* Podemos ver la aplicación en ejecución en [Firebase](https://front-end-test-98779.web.app/home)

---

[Manuel Bailera Serrano](https://github.com/manuzgz)

