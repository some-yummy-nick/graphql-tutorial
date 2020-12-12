тест запросов
```
query ($id: ID) {
  movie(id: $id) {
    id
    name
  }
}

query {
  movies{
    name
  }
}

```
query variables
```
{
  "id": 5fc670bf50802865f38dbdce
}
```
