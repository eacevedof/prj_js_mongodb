
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
15. []()
16. []()
17. []()
18. []()

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
El ejemplo, una conferencia con varias salas y estas salas constan con un equipo de grabacion.
Si se va moviendo el equipo entre estas habria que estar actualizando cada documento `charla` por tener
embebida la sala.

```javascript
//https://youtu.be/-o_VGpJP-Q0?t=934
{
    "id": "t1",
    "description": "Modeling document databases",
    "room": {"id": "201", "cap":200,"recording": true}
}

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