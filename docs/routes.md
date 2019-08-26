# ROUTES

## Ontologies

* **PATH**: `/api/ontologies/`
* **METHOD**: GET
* **QUERY PARAMETERS**: `none`
* **RESPONSE BODY:**:
```json
{
  "ontologies": {
    "byId": {
      "molecularFunction": {
        "name": "Molecular Function"
      },
      "biologicalProcess": {
        "name": "Biological Process"
      },
      "cellularLocation": {
        "name": "Cellular Location"
      }
    },
    "allIds": ["molecularFunction", "biologicalProcess", "cellularLocation"]
```

## Go Terms

* **PATH**: `/api/go-terms/`
* **METHOD**: POST
* **REQUEST BODY**:
```json
{
  "genes": [
    "FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1"
  ],
  ontologies: [
    "molecularFunction",
    "biologicalProcess",
    "cellularLocation"
  ]
}
```
* **RESPONSE BODY:**
```json
{
  "ontologies": {
    "byId": {
      "molecularFunction": {
        "goTerms": ["GO:0004871", "GO:0003677", "GO:0008270", "GO:0005509", "GO:0008234", "GO:0019899", "GO:0004930", ...],
        "name": "Molecular Function"
      },
      "biologicalProcess": {
        "goTerms": ["GO:0007186", "GO:0006508", "GO:0038095", "GO:0045732", "GO:0050790", "GO:0016567", "GO:0035556", ...],
        "name": "Biological Process"
      },
      "cellularLocation": {
        "goTerms": ["GO:0005886", "GO:0005576", "GO:0005634", "GO:0016021", "GO:0005737", "GO:0005783", "GO:0005622", "GO:0005739", ...],
        "name": "Cellular Location"
      }
    },
    "allIds": ["molecularFunction", "biologicalProcess", "cellularLocation"]
  },
  "goTerms": {
    "byId":{
      "GO:0004871":{
        "genes":[
          "CAPN3"
        ],
        "name":"signal transducer activity"
      },
      "GO:0003677":{
        "genes":[
          "PIAS1"
        ],
        "name":"DNA binding"
      },
      "GO:0008270":{
        "genes":[
          "PIAS1",
          "PTPN1"
        ],
        "name":"zinc ion binding"
      },
      ...
    },
    "allIds":[
      "GO:0004871",
      "GO:0003677",
      "GO:0008270",
      ...
    ]
  }
}
```