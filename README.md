# [Este repo: prj_js_mongodb](https://github.com/eacevedof/prj_js_mongodb)
FAZT - MongoDB, Curso Practico Rápido, Desde Cero Para Iniciantes 
[repo original](https://github.com/FaztWeb/mongodb-course/blob/master/first-db.js)

1 - Descargar mongo de: 
[mongodb-win32-x86_64-2008plus-ssl-3.6.0-signed.msi](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.6.0-signed.msi/download)

# indice
1. [ventana de comandos,shell mongo](https://youtu.be/Apbk83XL8L8?t=596)
2. [creando la bd misclientes](https://youtu.be/Apbk83XL8L8?t=771)
3. [creando un usuario db.createUser()](https://youtu.be/Apbk83XL8L8?t=800)

# comandos consola
```
+-----------------+--------------------------------------------------------------------+
|     comando     |                               acción                               |
+-----------------+--------------------------------------------------------------------+
| mongod          | inicia el servidor de mongodb, deja el servicio corriendo          |
| mongo           | para ejecutar comandos de mongo, habilita el shell propio de mongo |
| show dbs        | muestra las bases de datos, (como show databases en mysql)         |
| db              | indica la base de datos a la que se ha conectado                   |
| use <nombrebd>  | cambia la conexión actual a la bd <nombrebd>                       |
| db.createUser() | crea un usuario, muestra Successfully added user:<el json>         |
+-----------------+--------------------------------------------------------------------+
```

# notas
Al instalar mongo en windows no acaba, la barra de progreso se queda en la "u" de minutes

Al ejecutar el comando `mongod` (arrancar el servicio) no se levantaba pq no encontraba la ruta c:\data\db

Tampoco me ha instalado las variables de entorno, la he añadido a mano en c:\<rutamongodb>\bin

Creé la ruta y entonces se quedó a la escucha por el puerto: 27017

Al conectarse a mongo por defecto se conecta a una base por defecto

Al crear una bd `misclientes`, por ejemplo, con >use misclientes. Mongo no crea directamente la bd hasta que se inserte al menos un registro (documento)

# errores
Al arrancar `mongod`: 
```
Failed to initialize Performance Counters for FTDC: WindowsPdhError: PdhExpandCounterPathW failed with 'El objeto especificado no se encontró en el equipo.' for counter '\Memory\Available
Bytes'
```
Al lanzar el shell con `mongo`: 
```
Error loading history file: FileOpenFailed: Unable to fopen() file C:\Users\<miusuario>/.dbshell: El sistema no puede encontrar el archivo especificado.
```