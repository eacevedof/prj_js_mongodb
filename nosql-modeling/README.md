
# [VIDEO: Modeling Data for NoSQL Document Databases](https://www.youtube.com/watch?v=-o_VGpJP-Q0)
## [Author: TechEd North America](https://www.youtube.com/channel/UC-B8GuZPEnvFGiSKpjIVKKg/videos)

# indice
1. [Modeling Challenges](https://youtu.be/-o_VGpJP-Q0?t=43)
2. [Document modeling](https://youtu.be/-o_VGpJP-Q0?t=69)
3. [Modeling Challenge - embed or reference](https://youtu.be/-o_VGpJP-Q0?t=262)
4. [To embed](https://youtu.be/-o_VGpJP-Q0?t=340)
5. [Embed - Single piece](https://youtu.be/-o_VGpJP-Q0?t=365)
6. [Embed - Dependencies](https://youtu.be/-o_VGpJP-Q0?t=454)
7. [Embed - 1:1 Relationship](https://youtu.be/-o_VGpJP-Q0?t=496)
8. [Embed - Similar volatility](https://youtu.be/-o_VGpJP-Q0?t=527)
9. [Embed - Bounded (1:few)](https://youtu.be/-o_VGpJP-Q0?t=565)
10. [Related data - Referencing](https://youtu.be/-o_VGpJP-Q0?t=650)
11. [Related - one-to-many relationships (unbounded)](https://youtu.be/-o_VGpJP-Q0?t=671)
12. [Related - many-to-many relationships](https://youtu.be/-o_VGpJP-Q0?t=728)
13. [Related - data changes with differing volatility](https://youtu.be/-o_VGpJP-Q0?t=832)
14. [Related - referenced entity is a key entity used by many others](https://youtu.be/-o_VGpJP-Q0?t=896)
15. [Combining embed + reference](https://youtu.be/-o_VGpJP-Q0?t=985)
16. [Normalization vs denormalization](https://youtu.be/-o_VGpJP-Q0?t=1143)
17. [Homogeneous vs Heterogeneous data](https://youtu.be/-o_VGpJP-Q0?t=1327)
18. [Use case: Hierarchies](https://youtu.be/-o_VGpJP-Q0?t=1475)
19. [Use case: Keyword](https://youtu.be/-o_VGpJP-Q0?t=1586)
20. [Use case: Telemetry](https://youtu.be/-o_VGpJP-Q0?t=1676)

# notas

## [Modeling Challenges](https://youtu.be/-o_VGpJP-Q0?t=55)
- Related data
- Normalization vs denormalization
- Homogeneous vs heterogeneous data

## [Document modeling](https://youtu.be/-o_VGpJP-Q0?t=69)
- Tanto en bd sql como nosql el modelado es importante, si bien no existe un esquema en el uso
estricto de la palabra lo hay.
- Se puede entender [sql vs nosql](https://youtu.be/-o_VGpJP-Q0?t=193) como la siguiente metafora. Un coche con todas sus piezas separadas (sql), las nosql entienden el coche como una pieza encapsulada
- Modeling data, the relational way [Esquema E/R](https://youtu.be/-o_VGpJP-Q0?t=226)
- Modeling data, the document way [Documento JSON](https://youtu.be/-o_VGpJP-Q0?t=246)

## [To embed or to reference, that is the question](https://youtu.be/-o_VGpJP-Q0?t=275)
```json
//[Imagen](https://youtu.be/-o_VGpJP-Q0?t=314)
//EMBED
{
    "sessionId": "session1",
    "sessionName": "Document modeling",
    "speakers": [
        {   "id":1, "name": "Ryan",
            "thumbnailUrl": "...",
            "shortProfile": "..."
        },
        {   "id":2, "name": "David",
            "thumbnailUrl": "...",
            "shortProfile": "..."
        }        
    ]
}

//REFERENCE
{
    "sessionId": "session1",
    "sessionName": "Document modeling",
    "speakers": [{"id":1},{"id":2}]
},
{
    "id": "1","name": "Ryan",
    "thumbnailUrl": "...",
    "shortProfile": "..."
},
{   "id":2, "name": "David",
    "thumbnailUrl": "...",
    "shortProfile": "..."
}   
```
- A veces embebemos a veces se desacopla por referencia, como se llega a esta [conclusión?](https://youtu.be/-o_VGpJP-Q0?t=332)

## [To embed](https://youtu.be/-o_VGpJP-Q0?t=340)

#### [Aspectos que nos indican que los datos deben estar embebidos:](https://youtu.be/-o_VGpJP-Q0?t=340)
1. Datos de entidades que se necesitan en un conjunto, como una sola pieza ([p.e. Un libro](https://youtu.be/-o_VGpJP-Q0?t=365))
- Si suponemos que entramos en una libreria y los libros estan separados en sus componentes, en una estanteria
tenemos los titulos, en otra las tapas, en otra los indices, en otra los capítulos.
- Lo lógico es que tenga la pieza completa, el libro con todas sus partes unidas, luego así deberia estar modelado en [JSON](https://youtu.be/-o_VGpJP-Q0?t=427)

```javascript
//Ejemplo de cuando las cosas deben permanecer acopladas como una sola pieza
{
    "id":"book1",
    "covers":[
        {"type":"front", "artworkUrl": "http://..."},
        {"type":"back", "artworkUrl": "http://..."}
    ],
    "chapters": [
        {"id":1, "synopsis": "", "pages":24, "words".1456},
        {"id":2, "synopsis": "", "pages":18, "words".960},
    ]
}
```

2. Otro indicio que debemos tomar en cuenta para el embebido son las [dependencias](https://youtu.be/-o_VGpJP-Q0?t=454)
- El ejemplo del pedido y sus lineas. Mejor dicho las [lineas](https://youtu.be/-o_VGpJP-Q0?t=464) que dependen del pedido (cabecera)

```javascript
//Ejemplo pedido: https://youtu.be/-o_VGpJP-Q0?t=480
{
    "id": "order1",
    "customer": "customer1",
    "orderDate:" "2014-09-15T23:14:25.7251173z",
    "lines": [
        {"product":"monitor","price": 200.00, "qty": 50},
        {"product":"keyboard","price": 23.67, "qty": 4},
        {"product":"CPU","price": 87.89, "qty": 1},
    ]
}
```

3. [Relacion 1:1](https://youtu.be/-o_VGpJP-Q0?t=504) Ejemplo de una persona y su perfil.
La persona tiene unos datos maestros pero al mismo tiempo hay datos que se pueden agrupar como un subdocumento
llamado 'profile'

```javascript
{
    "id": "person1",
    "username": "jsmith",
    "profile": {
        "name": "John Smith",
        "joinDate": "2016-03-01"
    }
}
```

4. [Similar volatility](https://youtu.be/-o_VGpJP-Q0?t=527) La volatilidad habla de la poca frecuencia de cambio que pueda tener un dato de una entidad. En este [ejemplo](https://youtu.be/-o_VGpJP-Q0?t=560), el email, los ids de redes sociales.

```javascript
//Ejemplo email y redes sociales: https://youtu.be/-o_VGpJP-Q0?t=560
{
    "id": "person1",
    "name": "John Smith",
    "email": "jsmith@contoso.com",
    "socialIds": [
        {"twitchat": "jsmith"},
        {"instabook": "jsmith"}
    ]
}

```

5. [Bounded (1:few)](https://youtu.be/-o_VGpJP-Q0?t=565) Conjunto de valores o sub-documentos que estan relaciones 1:n. Ejemplo los tags de una tarea.

```javascript
{
    "id": "task1",
    "dueBy": "2016-03-30",
    "desc": "deliver an awesome presentation @ //build!",
    "tags" [{"tag": "talk"},{"tag": "build"}]
}
```

```sql
-- https://youtu.be/-o_VGpJP-Q0?t=620
SELECT VALUE tasks.description
FROM tasks
JOIN tags IN tasks.tags
WHERE tags.tag = "build"
ORDER BY tasks.dueBy
```

```javascript
// https://youtu.be/-o_VGpJP-Q0?t=620
[
    "Pick up badge",
    "deliver an awesome presentation @ //build!",
    "Party!"
]
```

- Los datos embebidos suelen presentar mejor rendimiento de [lectura](https://youtu.be/-o_VGpJP-Q0?t=636)
puesto que solo tienes que hacer una llamada para traerte todos los datos embebidos.

## [Related data - Referencing](https://youtu.be/-o_VGpJP-Q0?t=650)

- A veces nos dedicamos a embeber todo y en ocasiones modelar con referencia es mejor

#### [Aspectos que nos indican que los datos deben estar relacionados:](https://youtu.be/-o_VGpJP-Q0?t=671)

1. [Related - one-to-many relationships (unbounded)](https://youtu.be/-o_VGpJP-Q0?t=671) En los casos que un atributo que tenga relacion `1:n`, Post y comentarios por ejemplo, es decir de ilimitados comentarios entonces 
lo mejor es tener una entidad (documento) comentarios por separado. 
Si no se hace esto el documento crecera de tamaño tanto que cada vez sera mas lento el acceso a la información

```javascript
//Ejemplo charla y comentarios
//https://youtu.be/-o_VGpJP-Q0?t=683
{
    "id": "t1",
    "description": "Modeling document databases",
    "tags": ["build","talk"],
    "comments": [
        {"id": "c1", "comment": "Cool talk!"},
        {"id": "c2", "comment": "Watching again"},
        {"id": "c3", "comment": "Mind. Blown."},
        ...
        {"id": "c99999","comment": "Still going..."}
    ]
}
```
##### Quedaría así:
```javascript
//https://youtu.be/-o_VGpJP-Q0?t=714
{
    "id": "s1",
    "description": "Modeling document databases",
    "tags": ["build","talk"]
}

{"id": "c1", "sessionId": "s1", "comment": "Cool talk!"},
{"id": "c2", "sessionId": "s1", "comment": "Watching again"},
{"id": "c3", "sessionId": "s1", "comment": "Mind. Blown."},
...
{"id": "c99999", "sessionId": "s1", "comment": "Still going..."}
```
2. [Related - many-to-many relationships](https://youtu.be/-o_VGpJP-Q0?t=728) 
Ejemplo de ponentes y sus temas. Un ponente puede estar en varias charlas y una charla incluye a varios 
ponentes. En este caso no hay una forma [estricta](https://youtu.be/-o_VGpJP-Q0?t=785) de como debes modelar la relación n:m. Se podria entender como los ponentes participan en las charlas o las charlas tienen ponentes.
```javascript
//https://youtu.be/-o_VGpJP-Q0?t=748
//Esta es la forma típica de como se haría en el modelo tradicional de E/R con n:m
//ponentes
{
    "id": "s1",
    "name": "Ryan"
}
{
    "id": "s2",
    "name": "David"
}
//ponentes:charlas
//los dos ponentes estan en la misma charla
{
    "speakerId": "s1",
    "sessionId": "t1"
}

{
    "speakerId": "s2",
    "sessionId": "t1"
}

//Las charlas que se presentan
{
    "id": "t1",
    "description": "Modeling data"
}
{
    "id": "t2",
    "description": "Fun with data"
}
```
- Como seria el modelado en documentos
```javascript
//https://youtu.be/-o_VGpJP-Q0?t=771
//ponentes con sus charlas
{
    "id": "s1",
    "name": "Ryan",
    "sessions":[
        {"id": "t1"},{"id": "t2"}
    ]
}
{
    "id": "s2",
    "name": "David",
    "sessions":[
        {"id": "t1"}
    ]
}

//charlas y sus participantes
{
    "id": "t1",
    "name": "Modeling document databases",
    "speakers": [
        {"id":"s1"},{"id":"s2"}
    ]
}
{
    "id": "t2",
    "name": "Fun with data",
    "speakers": [
        {"id":"s1"}
    ]
}
```
```sql
-- https://youtu.be/-o_VGpJP-Q0?t=806
-- buscando a los ponentes que tengan un id
SELECT s.speakerId, s.speakerName, s.sessions
FROM speaker s
JOIN sessions IN s.sessions
WHERE session.sessionId = "session1"
AND s.type="speaker"

SELECT s.speakerId, s.speakerName, s.sessions
FROM speaker s
JOIN sessions IN s.sessions
WHERE session.sessionId = "speaker2"
AND s.type="session"
```

```javascript
//Resultado de la primera, se busca los ponentes 
//de una determinada charla
[
    {
        "speakerId": "speaker1",
        ...
        "sessions":[
            {
                "sessionId":"session1"
            },
            {
                "sessionId":"session2"
            },
        ]
    },
    {
        "speakerId": "speaker2",
        ...
        "sessions":[
            {
                "sessionId":"session1"
            }
        ]
    }    
]
```
3. [Related - data changes with differing volatility](https://youtu.be/-o_VGpJP-Q0?t=832) 
Por ejemplo la charla y sus stadisticas de likes. En este caso es mas eficiente pedir el documento
con las estadisticas y actualizarlo

```javascript
//https://youtu.be/-o_VGpJP-Q0?t=857
{
    "id": "t1",
    "description": "Modeling document databases",
    "tags": ["build","talk"],
    "speakers": ["ryan","david"],
    "likes": 250,
    "hearts": 500
}

//como debería quedar
{
    "id": "t1",
    "description": "Modeling document databases",
    "tags": ["build","talk"],
    "speakers": ["ryan","david"],
}

{"id": "stats1", "sessionId": "t1", "likes":25,"hearts":500}
```
4. [Related - referenced entity is a key entity used by many others](https://youtu.be/-o_VGpJP-Q0?t=896)
El ejemplo, una conferencia con varias salas y estas salas cuentan con un equipo de grabación.
Si se va moviendo el equipo entre estas habria que estar actualizando cada documento `charla` por tener
embebida la sala.

```javascript
//https://youtu.be/-o_VGpJP-Q0?t=934
{
    "id": "t1",
    "description": "Modeling document databases",
    "room": {"id": "201", "cap":200,"recording": true}
}

//quedaría así:
{
    "id": "t1",
    "description": "Modeling document databases"
    "roomId": "r201"
}
{
    {"id": "r201", "cap":200, "recording": true}
}
```
- Por lo general la referencia provee un mejor rendimiento cuando se trata de escritura
- La [lectura](https://youtu.be/-o_VGpJP-Q0?t=951) necesitara de mas llamadas al servidor

## [Combining embed + reference](https://youtu.be/-o_VGpJP-Q0?t=985)

- El ejemplo de un producto de una tienda virtual. La volatilidad nuevamente. 
En el mismo documento de productos se crean otros diferenciados por tipos para
pedir por separado estos pequeños fragmentos que tienen mayor volatilidad

```javascript
//https://youtu.be/-o_VGpJP-Q0?t=1067
{
    "id": "product1",
    "type": "product",
    "name": "Microsoft Band 2- Medium",
    "price": "174.99",
    "summary": "Continuos heart rate monitor tracks heart rate...",
    "images": [{"image1": "http://..."},{"image2": "http://..."}],
    "reviewSummary": {
        "averageStars": 4,
        "reviewCount": 313
    }
}
```
```sql
-- https://youtu.be/-o_VGpJP-Q0?t=1115
-- get product information
SELECT p.productShortname, p.reviewSummary, p.images,
p.fullProductDetailId
FROM Product p
WHERE p.id = "product1"

-- https://youtu.be/-o_VGpJP-Q0?t=1119
-- get product summary
SELECT p.star5,p.star4,p.star3,p.star2,p.star1
FROM Products p
WHERE p.type= "ratingSummary"
AND p.productId = "product1"

-- https://youtu.be/-o_VGpJP-Q0?t=1132
-- get review
SELECT p.reviewr, p.title, p.snippet, p.rating, p.fullreviewlink
FROM Products p
WHERE p.type="toReviewSummary"
AND p.productId = "product1"
```

## [Normalization vs denormalization](https://youtu.be/-o_VGpJP-Q0?t=1143)
- En este ejemplo (normalizado) si se diera el caso que tuviera que cargar las constantemente
con esa frecuencia tendria que cargar los datos del ponente necesitando una consulta extra,
se podría [modificar](https://youtu.be/-o_VGpJP-Q0?t=1208) un poco la estructura de modo que se redunde 
los datos minimos necesarios.

- La normalizacion lleva implicita un ahorro de espacio, [antes eso era importante](https://youtu.be/-o_VGpJP-Q0?t=1292), hoy en día no tanto ya que los costos son menores.

- La desnormalización ofrece mejor rendimiento en lectura pero a su vez requiere que en las actualizaciones se tenga que recorrer multiples clases/objetos para su modificación.

```javascript
//Ejemplo tipico de una estructura normalizada
//https://youtu.be/-o_VGpJP-Q0?t=1175
{
    "sessionId": "session1",
    "sessionName": "Document modeling",
    "speakers": [
        {"speakerId":1},{"speakerId":2}
    ]
},
{
    "id": "speaker1",
    "fullname": "Ryan CrawCour",
    "shortname": "Ryan",
    "profile": "Ryan is a PM in the DocumentDB team",
    "images": [{"thumbnail": "http://..."},{"profile": "http://..."}]
}

//Modificacion con desnormalizacion. Redundando
//https://youtu.be/-o_VGpJP-Q0?t=1208
{
    "sessionId": "session1",
    "sessionName": "Document modeling",
    "speakers": [
        {"speakerId":1,"shortname": "Ryan", "thumbnail":"..","shortprofile":"Ryan is DocumentDB..."},{"speakerId":2,"shortname": "David", "thumbnail":"..","shortprofile":"David is an architect..."},
    ]
},
```
## [Homogeneous vs Heterogeneous data](https://youtu.be/-o_VGpJP-Q0?t=1327)

- En un mundo de relaciones deberiamos de crear una tabla para: [`ponente`, `charla`, `sala`] (https://youtu.be/-o_VGpJP-Q0?t=1335) En el modelado nosql les llamariamos colecciones, hasta aqui 
no hay problema. 
Sin embargo, puede existir un impacot de estas sobre: [`facturas`, `transacciones`, `consultas`](https://youtu.be/-o_VGpJP-Q0?t=1352)  
- En el ejemplo se sugiere usar la misma colección diferenciando los documentos por el atributo 
[`type`](https://youtu.be/-o_VGpJP-Q0?t=1392) 

```javascript
//Homogeneous vs Heterogeneous data
//https://youtu.be/-o_VGpJP-Q0?t=1384
{
    "type": "speaker",
    "speakerid": "speaker1",
    "speakername": "Ryan Crawcour",
    "sessions": [
        {"sessionId": "session1", "desc": "#DEV301 - Document Modeling"},
        {"sessionId": "session2", "desc": "#DEV203 - fun with data"}
    ]
},
{
    "type": "session",
    "sessionid": "session1",
    "code": "DEV301",
    "name": "Document modeling",
    "speakers": [
        {"speakerid": "speaker1", "shortname": "Ryan"}
    ]
}
// SQL QUERY : https://youtu.be/-o_VGpJP-Q0?t=1415 select por type
// https://youtu.be/-o_VGpJP-Q0?t=1455
// En una consulta se puede extraer 3 tipos distintos de datos
// si huberan estado en colecciones distintas se tendria que haber hecho 3 consultas por separado
```

## [Use case: Hierarchies](https://youtu.be/-o_VGpJP-Q0?t=1475) 
[Imagen con la jerarquia de manager y subordinados](https://youtu.be/-o_VGpJP-Q0?t=1495)

```javascript
//https://youtu.be/-o_VGpJP-Q0?t=1505
{
    {"name": "Jill"},
    {"name": "Ben","manager":"Jill"},
    {"name": "Susan","manager":"Jill"},
    {"name": "Andrew","manager":"Ben"},
    {"name": "Sven","manager":"Susan"},
    {"name": "Thomas","manager":"Sven"}
}

//
//https://youtu.be/-o_VGpJP-Q0?t=1547
{
    {"name": "Jill", "directs":["Ben","Susan"]},
    {"name": "Ben", "directs":["Andrew"]},
    {"name": "Susan", "directs":["Sven"]},
    {"name": "Andrew"},
    {"name": "Sven","directs":["Thomas"]},
    {"name": "Thomas"}
}
```

```sql
-- query: https://youtu.be/-o_VGpJP-Q0?t=1558
-- con esta peculiaridad se puede usar el metodo ARRAY_CONTAINS
SELECT VALUE org.name 
FROM org
WHERE ARRAY_CONTAINS(org.directs, "Ben")
```

## [Use case: Keyword](https://youtu.be/-o_VGpJP-Q0?t=1586) 

- Busquedas por keywords `CONTAINS(LOWER(c.title), "design")` es como un `LIKE`, de rendimiento costoso
- Se agrega una atributo keywords al documento de modo que no se tenga que buscar por todo el texto largo
sino por las palabras clave que estan dentro de un array
- Para definir las keywords se usa [RegEx](https://youtu.be/-o_VGpJP-Q0?t=1643) para transformar todo el texto a lowercase, se quitan las puntuaciones
se eliminan palabras como "a", "el/la", "de", etc.
- Se combinan las keywords para formar frases claves 

```javascript
{
    "id": "CDC101",
    "title": "Fundamentas of database design",
    "credits": 10
}

//https://youtu.be/-o_VGpJP-Q0?t=1641
{
    "id": "CDC101",
    "title": "Fundamentas of database design",
    "keywords" ["databse","design","database design"]
    "credits": 10
}
```

```sql
-- query: https://youtu.be/-o_VGpJP-Q0?t=1614
SELECT c.id, c.title
FROM c
WHERE CONTAINS(LOWER(c.title), "design")
-- time: 7.25 (micro s)

-- con keywords
-- query: https://youtu.be/-o_VGpJP-Q0?t=1645
SELECT c.id, c.title
FROM c
WHERE ARRAY_CONTAINS(c.keywords,"design")
-- time: 3.12 (micro s)

```
