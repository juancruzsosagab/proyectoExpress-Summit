# Proyecto Express Summit 🚀🚀


## Descripción
Este proyecto consiste en dos páginas. Una es una vista para loguearse y la otra es la vista de "éxito". Para poder loguearse, primero se debe crear un usuario vía API (proyecto express), y luego con las credenciales ingresar. Si uno intenta loguearse con un usuario incorrecto o con un password incorrecto, se reflejará en la respuesta del request el status correspondiente, junto con el error renderizado en la vista de login.


## Starting

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

```
git clone https://github.com/juancruzsosagab/proyectoExpress-Summit
```

## Instalación 🔧

```
Instalar Mongo (http://www.mongodb.org/downloads)
```

En el directorio del proyecto, run:

### `npm install express`

AND

### `npm install`

```
Crea una base de datos que se llame `usersSummit` o modifica el nombre en el archivo .env del directorio
```

## Construido con 🛠️

_Herramientas utilizadas_

* [Express](https://expressjs.com/) - Framework utilizado
* [Cors](https://www.npmjs.com/package/cors) - Habilitar cors para request
* [Jsonwebtoken](https://www.npmjs.com/package/express-jwt) - Generar token
* [Mongoose](https://mongoosejs.com/docs/) - ODM utilizado para interactuar con la base
* [Nodemon](https://www.npmjs.com/package/nodemon) - Mantener el proyecto en ejecución ante cambios
* [Dotenv](https://www.npmjs.com/package/dotenv) - Para encriptar el password pero no lo utilicé


## Available Scripts

En el terminal, run:

### `mongod`

Luego conectar a través MongoDBCompass

En el directorio del proyecto, run:

### `nodemon npm start`

Sigue la siguiente documentación con sus ejemplos para consumir los servicios de la api [DOCUMENTACIÓN API](https://documenter.getpostman.com/view/12727307/UVkjwy4u) 


## Autor ✒️

* **Juan Cruz Sosa Gabrielli** - *Desarrollo* - [JuanCruz](https://github.com/juancruzsosagab)