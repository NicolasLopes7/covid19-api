# *COVID-19* BRAZILIAN API BY STATE

## Endpoints
---
##### This API have many endpoints, but [very util, above you can see this:
###### GET /lastStatesData
```json

  "ConfirmedCasesBrazil": 217042,
  "ConfirmedDeathsBrazil": 14844,
  "states": [
    {
      "state": "AC",
      "data": {
        "confirmed": 1785,
        "deaths": 57,
        "death_rate": 0.0319,
        "date": "2020-05-15"
      }
    },
    {
      "state": "AL",
      "data": {
        "confirmed": 3212,
        "deaths": 187,
        "death_rate": 0.0582,
        "date": "2020-05-15"
      }
    },
    {...},
```
---
###### GET /allStatesData
```json

```
---
GET /:state
