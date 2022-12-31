
# Variables in Postman.
Variables is a name location used to store data.

#### Why we need variables in postman.

```
https://localhost:3000/api/1
```

{{baseURL}} 
```
https://localhost:3000
```

This same url use in all defferent request in
- getRequest
- postRequest
- putRequest
- deleteRequest

so pass same think all there we store at globel level and use then and if andy change then we have only one pass to change then we have only one pass to change data in all request.

#### Need
- To avoid deuplication.
- To avoid readness.
- To avoid rework.


### Variables we can create in multiple level or scope like.
- Globel variable
- Collection variable
- Enviroment variable
- Local variable
- Data variable

*_Based on Scope we divide into five levels_*

