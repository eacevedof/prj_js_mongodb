
# [VIDEO: Modeling Data for NoSQL Document Databases](https://www.youtube.com/watch?v=-o_VGpJP-Q0)
## [Author: TechEd North America](https://www.youtube.com/channel/UC-B8GuZPEnvFGiSKpjIVKKg/videos)

# indice
1. [Modeling Challenges](https://youtu.be/-o_VGpJP-Q0?t=43)
2. [Document modeling](https://youtu.be/-o_VGpJP-Q0?t=69)
3. [Modeling Challenge - embed or reference](https://youtu.be/-o_VGpJP-Q0?t=262)
4. [To embed](https://youtu.be/-o_VGpJP-Q0?t=340)
5. [Embed - Single piece](https://youtu.be/-o_VGpJP-Q0?t=365)
6. [Embed - Dependencies](https://youtu.be/-o_VGpJP-Q0?t=454)
7. []()
8. []()
9. []()
10. []()
11. []()
12. []()
13. []()
14. []()
15. []()

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

###### [Aspectos que nos indican que los datos deben estar embebidos](https://youtu.be/-o_VGpJP-Q0?t=340)
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


```javascript
```


```javascript
```


```javascript
```

