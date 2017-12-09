
# [VIDEO: Modeling Data for NoSQL Document Databases](https://www.youtube.com/watch?v=-o_VGpJP-Q0)
## [Author: TechEd North America](https://www.youtube.com/channel/UC-B8GuZPEnvFGiSKpjIVKKg/videos)

# indice
1. [Modeling Challenges](https://youtu.be/-o_VGpJP-Q0?t=43)
2. [Document modeling](https://youtu.be/-o_VGpJP-Q0?t=69)
3. [Modeling Challenge - embed or reference](https://youtu.be/-o_VGpJP-Q0?t=262)
4. []()
5. []()
6. []()
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
```javascript
//[Imagen](https://youtu.be/-o_VGpJP-Q0)
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


```javascript
```


```javascript
```


```javascript
```


```javascript
```


```javascript
```

