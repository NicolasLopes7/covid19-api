# *COVID-19* BRAZILIAN API BY STATE

## Endpoints
---
##### This API has only 3 endpoints, but they are very useful, enjoy! : )
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
    ...{},
```
---
###### GET /allStatesData
```json
{
  "ConfirmedCasesBrazil": 2940714,
  "ConfirmedDeathsBrazil": 198872,
  "dataStates": [
    {
      "state": "AC",
      "data": [
        {
          "confirmed": 1740,
          "deaths": 55,
          "death_rate": 0.0316,
          "date": "2020-05-14"
        },
        {
          "confirmed": 1694,
          "deaths": 52,
          "death_rate": 0.0307,
          "date": "2020-05-13"
        },
        ...{}],
      "state": "AL",
      "data": [
        {
          "confirmed": 2972,
          "deaths": 177,
          "death_rate": 0.0596,
          "date": "2020-05-14"
        },
        {
          "confirmed": 2761,
          "deaths": 164,
          "death_rate": 0.0594,
          "date": "2020-05-13"
        },
      ...{}],
```
---
###### GET /:state
The "state" parameter tells the API what the state is for the return. Ex .: RN, PB, SP ...

example: /RN
```json

  "ConfirmedCasesByState": 2536,
  "ConfirmedDeathsByState": 117,
  "dataByCity": [
    {
      "city": "Natal",
      "confirmed": 1083,
      "deaths": 33,
      "death_rate": 0.0305,
      "confirmed_per_100k_inhabitants": 122.49441
    },
    {
      "city": "Mossoró",
      "confirmed": 456,
      "deaths": 23,
      "death_rate": 0.0504,
      "confirmed_per_100k_inhabitants": 153.34019
    },
    {
      "city": "Canguaretama",
      "confirmed": 37,
      "deaths": 7,
      "death_rate": 0.1892,
      "confirmed_per_100k_inhabitants": 107.94725
    },
    ...{}]
```
