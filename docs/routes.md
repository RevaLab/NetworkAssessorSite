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
  "ontologies": [
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
        "goTerms": ["GO:0004871", "GO:0003677", "GO:0008270", "GO:0005509", "GO:0008234", "GO:0019899", "GO:0004930"],
        "name": "Molecular Function"
      },
      "biologicalProcess": {
        "goTerms": [
          "GO:0007186",
          "GO:0006508",
          "GO:0038095",
          ...
        ],
        "name": "Biological Process"
      },
      "cellularLocation": {
        "goTerms": [
          "GO:0005886",
          "GO:0005576",
          "GO:0005634"
          ...
        ],
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

## Pathways

* **PATH**: `/api/pathways`
* **METHOD**: GET
* **QUERY PARAMETERS**: `none`
* **RESPONSE BODY**:
```json
{
 "pathwayDatabases": {
    "byId": {
      1: {
        "name": "KEGG",
      },
      2: {
        "name": "My Cancer Genome",
      },
      3: {
        "name": "Reactome",
      }
    },
    allIds: [2, 1, 3]
  },
  "ppiDatabases": {
    "byId": {
      1: {
        "name": "STRING",
      },
      2: {
        "name": "BioGrid",
      },
    },
    allIds: [1, 2]
  }
}
```

* **PATH**: `/api/ppi-edges-lengths`
* **METHOD**: POST
* **REQUEST BODY**: `none`
```json
{
  "pathwayDatabase": 1,
  "ppiDatabase": 2,
  "genes": [
    "FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1", "BADGENE"
  ]
}
```
* **RESPONSE BODY**:
```json
{
  "query": {
    "validGenes": [
      "FLT3",
      "SMO",
      "GLA",
      "SGCB",
      "OAT",
      "CAPN3",
      "ASS1",
      "AGXT",
      "AKT1",
      "PTPN1",
      "PIAS1",
      "CDKN1B",
      "THEM4",
      "CCNE1",
      "MAP2K4",
      "ATG7",
      "ATG12",
      "BAD",
      "BCL2L1"
    ],
    "invalidGenes": [
      "BADGENE"
    ]
  },
  "ppiDatabases": {
    "byId": {
      "2": {
        "name": "BioGrid",
        "edgesLengthsByPathwayId": {
          "547": 3,
          "838": 4,
          "1097": 6,
          "1210": 2,
          "1911": 0,
          "2725": 17
          ...
        }
      }
    }
  },
  "pathwayDatabases": {
    "byId": {
      "1": {
        "name": "KEGG",
      }
    }
  }
};
```