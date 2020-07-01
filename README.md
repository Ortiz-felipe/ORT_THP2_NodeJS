# ORT_THP2_NodeJS
## Trabajo Practico Final de la materia Taller de Herramientas de la Programacion 2

## Integrantes
- Nancy Molina
- Ioel Chetjas
- Rodrigo Barreda
- Felipe Ortiz

Para correr en local, hay que crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```sh
DB_NAME=# Nombre de la base de datos
DB_USER=# Usuario de la base de datos
DB_PASSWORD=# Password de la base de datos
DB_HOST=# Host de la base de datos (ej, localhost)
DB_DIALECT=# mysql o mssql
DB_LOGGING=# true o false
SENDGRID_API_KEY=# API key de Sendgrid
MAIL_SENDER=# Dirección de email remitente de los mails
```

### Generar documentación 

Para generar la documentación ejecutar el siguiente comando:

```sh
npm run generate-doc
```
Después ejecutar `npm start` acceder a http://localhost:3000/doc/
