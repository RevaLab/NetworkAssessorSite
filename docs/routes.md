# ROUTES

## Ontologies

* **PATH**: `/api/ontologies/`
* **METHOD**: POST

* **REQUEST BODY**:
```json
{
  "genes": [
    "FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1"
  ]
}
```
* **RESPONSE BODY:**
```json
{
  "ontologies": {
    "byId": {
      "molecularFunction": {
        "goTerms": ["GO:0004871", "GO:0003677", "GO:0008270", "GO:0005509", "GO:0008234", "GO:0019899", "GO:0004930", "GO:0003723", "GO:0031625", "GO:0005524", "GO:0004714", "GO:0004674", "GO:0004672", "GO:0005515", "GO:0046982", "GO:0008483", "GO:0016787", "GO:0003714", "GO:0042803", "GO:0004839", "GO:0042802", "GO:0045296", "GO:0008289", "GO:0008134", "GO:0019901", "GO:0051434", "GO:0004725", "GO:0005102", "GO:0008307", "GO:0016301", "GO:0008233", "GO:0005543", "GO:0019904", "GO:0032947", "GO:0017147", "GO:0004198", "GO:0004860", "GO:0019789", "GO:0047617", "GO:0005547", "GO:0043325", "GO:0046875", "GO:0019903", "GO:0003713", "GO:0030170", "GO:0003824", "GO:0004712", "GO:0042813", "GO:0016290", "GO:0044877", "GO:0008144", "GO:0030971", "GO:0031402", "GO:0004713", "GO:0043621", "GO:0005158", "GO:0008656", "GO:0005021", "GO:0071889", "GO:0030332", "GO:0031432", "GO:0050681", "GO:0005113", "GO:0016538", "GO:0004693", "GO:0061665", "GO:0016597", "GO:0019776", "GO:0004861", "GO:0019778", "GO:0019779", "GO:0030235", "GO:0004055", "GO:0015643", "GO:0004587", "GO:0004896", "GO:0016936", "GO:0004557", "GO:0052692", "GO:0005072", "GO:0055103", "GO:0004760", "GO:0008453", "GO:0008545"],
        "name": "Molecular Function"
      },
      "biologicalProcess": {
        "goTerms": ["GO:0007186", "GO:0006508", "GO:0038095", "GO:0045732", "GO:0050790", "GO:0016567", "GO:0035556", "GO:0006412", "GO:0007169", "GO:0018108", "GO:0006954", "GO:0071346", "GO:0071356", "GO:0006468", "GO:0032147", "GO:0008284", "GO:0043066", "GO:0045892", "GO:0010951", "GO:0006351", "GO:0071230", "GO:0007165", "GO:0060079", "GO:0023014", "GO:0006470", "GO:0009966", "GO:0007224", "GO:0015031", "GO:0000122", "GO:0001890", "GO:0006977", "GO:0008283", "GO:0045944", "GO:0006974", "GO:0006687", "GO:0006897", "GO:0010507", "GO:0030154", "GO:0008285", "GO:0045893", "GO:0045444", "GO:0000045", "GO:0001934", "GO:0010508", "GO:0033138", "GO:0050821", "GO:0071222", "GO:0075044", "GO:0010628", "GO:0042475", "GO:0006979", "GO:0007283", "GO:0043065", "GO:0051301", "GO:0040018", "GO:0045600", "GO:0072657", "GO:0035335", "GO:0030030", "GO:0016310", "GO:0045214", "GO:0032094", "GO:0016055", "GO:0007096", "GO:0071850", "GO:0016236", "GO:0038061", "GO:0043488", "GO:2000036", "GO:0006914", "GO:0000422", "GO:0006995", "GO:0006270", "GO:0033234", "GO:0006915", "GO:0006501", "GO:0008584", "GO:0007346", "GO:0007050", "GO:0009267", "GO:0035264", "GO:0007605", "GO:0007601", "GO:0045859", "GO:0007517", "GO:0001666", "GO:0035726", "GO:0006469", "GO:0019221", "GO:0034641", "GO:0021987", "GO:0006417", "GO:0001701", "GO:0016925", "GO:0071456", "GO:0042307", "GO:0007219", "GO:0007129", "GO:0001947", "GO:0045907", "GO:0044804", "GO:0043312", "GO:0042593", "GO:0045725", "GO:0071260", "GO:0071277", "GO:0097193", "GO:0010243", "GO:0034614", "GO:0008286", "GO:0000723", "GO:0048741", "GO:0006464", "GO:0030100", "GO:0051607", "GO:0030334", "GO:0018105", "GO:0042127", "GO:0042981", "GO:0001836", "GO:0030183", "GO:0035567", "GO:0043524", "GO:0060070", "GO:0006637", "GO:0061025", "GO:0014068", "GO:0071345", "GO:0097192", "GO:2001240", "GO:0006813", "GO:0001938", "GO:0010629", "GO:0051092", "GO:0090200", "GO:0007249", "GO:0031663", "GO:0045429", "GO:0051770", "GO:0070373", "GO:0030308", "GO:0006919", "GO:0008625", "GO:0043154", "GO:0097191", "GO:1902042", "GO:0032024", "GO:0007623", "GO:0009611", "GO:0030168", "GO:0045736", "GO:0045786", "GO:0046329", "GO:0001541", "GO:1901796", "GO:1900118", "GO:0045742", "GO:0061024", "GO:0051726", "GO:0051881", "GO:0007584", "GO:0042493", "GO:0000082", "GO:0000060", "GO:0014065", "GO:0031069", "GO:0016242", "GO:0050999", "GO:0065003", "GO:0071320", "GO:0032869", "GO:0046777", "GO:0070584", "GO:0097194", "GO:2001244", "GO:0007173", "GO:0051091", "GO:0061113", "GO:0045471", "GO:0042542", "GO:0003323", "GO:0021510", "GO:0030097", "GO:0030857", "GO:0048839", "GO:0070986", "GO:0030307", "GO:0043280", "GO:2001243", "GO:0031295", "GO:0043552", "GO:0001649", "GO:0060413", "GO:0060716", "GO:0043491", "GO:0032270", "GO:0032355", "GO:0031999", "GO:0032570", "GO:0030521", "GO:0007259", "GO:0046627", "GO:0031397", "GO:0035774", "GO:0042531", "GO:0060334", "GO:0034097", "GO:0051402", "GO:0036498", "GO:0051281", "GO:0032091", "GO:0032436", "GO:0034504", "GO:1903827", "GO:0061098", "GO:0051592", "GO:0032148", "GO:0035924", "GO:0051451", "GO:0007568", "GO:0007254", "GO:0007257", "GO:0009408", "GO:0035897", "GO:0045930", "GO:0051898", "GO:0046326", "GO:0046686", "GO:0051000", "GO:0001822", "GO:0018107", "GO:0045787", "GO:0008542", "GO:0030163", "GO:0031532", "GO:0043406", "GO:0014850", "GO:0033574", "GO:0033673", "GO:0046716", "GO:0071549", "GO:0010043", "GO:0000083", "GO:0060644", "GO:0007093", "GO:0045880", "GO:0009968", "GO:0043434", "GO:0045740", "GO:0048661", "GO:0021794", "GO:0030948", "GO:0032465", "GO:0008637", "GO:0005978", "GO:0006631", "GO:0043200", "GO:0051146", "GO:0071276", "GO:0007281", "GO:0009749", "GO:0031100", "GO:1990090", "GO:0006953", "GO:0001570", "GO:0071407", "GO:1901216", "GO:0001755", "GO:0051591", "GO:1903078", "GO:0072709", "GO:0045862", "GO:0008630", "GO:1900740", "GO:0043410", "GO:0006006", "GO:0065004", "GO:0002053", "GO:0040007", "GO:0071364", "GO:0031659", "GO:0050679", "GO:0001889", "GO:0043122", "GO:0043536", "GO:0009311", "GO:0009952", "GO:0010942", "GO:0071377", "GO:0071380", "GO:0031018", "GO:0043276", "GO:0097202", "GO:0010975", "GO:0001708", "GO:0030968", "GO:1901215", "GO:1902176", "GO:0071499", "GO:0001844", "GO:0043525", "GO:0060139", "GO:0060154", "GO:0071385", "GO:1903896", "GO:0043407", "GO:1902230", "GO:1903898", "GO:0060539", "GO:0051271", "GO:0090201", "GO:0008643", "GO:0010765", "GO:1902236", "GO:0014718", "GO:0043392", "GO:0071480", "GO:0031401", "GO:0038084", "GO:0046889", "GO:0000079", "GO:0045737", "GO:0090190", "GO:0030239", "GO:0045661", "GO:0060397", "GO:0006007", "GO:0033133", "GO:0097084", "GO:0048102", "GO:0051384", "GO:0010918", "GO:0046034", "GO:0048853", "GO:0071901", "GO:0031641", "GO:2000672", "GO:0006497", "GO:0021953", "GO:0048009", "GO:0006987", "GO:0007494", "GO:0071397", "GO:0001893", "GO:0045579", "GO:0010763", "GO:0031098", "GO:0033235", "GO:0051152", "GO:0009566", "GO:0046622", "GO:0048873", "GO:0097028", "GO:0000052", "GO:0061049", "GO:2000010", "GO:0008652", "GO:0034214", "GO:1900182", "GO:0035655", "GO:0034727", "GO:0039521", "GO:0044805", "GO:0071315", "GO:0071455", "GO:0090298", "GO:1902617", "GO:1903204", "GO:0060416", "GO:0005979", "GO:0006809", "GO:0072001", "GO:0061053", "GO:0032287", "GO:0000050", "GO:0046651", "GO:0006531", "GO:0046487", "GO:0035791", "GO:0048143", "GO:0070141", "GO:0045861", "GO:0000053", "GO:0006526", "GO:0010046", "GO:0071242", "GO:0071400", "GO:0071418", "GO:1903038", "GO:1903077", "GO:0071316", "GO:0060338", "GO:0034393", "GO:0006924", "GO:0045582", "GO:0097011", "GO:0042326", "GO:0045918", "GO:0016139", "GO:0034405", "GO:0055129", "GO:2001015", "GO:0046902", "GO:0071312", "GO:0097284", "GO:0045019", "GO:0046477", "GO:0046479", "GO:0051001", "GO:0031116", "GO:0097264", "GO:0051186", "GO:0010748", "GO:0021696", "GO:0021938", "GO:0048747", "GO:0002052", "GO:0002318", "GO:0071236", "GO:0030212", "GO:0021904", "GO:0060684", "GO:0071285", "GO:0010907", "GO:0033157", "GO:1902202", "GO:1990418", "GO:0044342", "GO:1990264", "GO:2000646", "GO:0072655", "GO:0072656", "GO:0042866", "GO:0061061", "GO:0070315", "GO:0071472", "GO:0009436", "GO:0019265", "GO:0019448", "GO:0042853", "GO:0046724", "GO:0021542", "GO:0032079", "GO:0031929", "GO:0045792", "GO:0060709", "GO:0100002", "GO:1903721", "GO:0055013", "GO:0034201", "GO:0001776", "GO:0002328", "GO:0060770", "GO:1904030", "GO:1902746", "GO:2000078", "GO:0046931", "GO:0046031", "GO:0019050", "GO:0046898", "GO:0071839", "GO:0003140", "GO:0007228", "GO:1902108", "GO:0071247", "GO:0071396", "GO:1902220", "GO:0007371", "GO:0021910", "GO:0051799", "GO:0060248", "GO:0072285", "GO:2000826"],
        "name": "Biological Process"
      },
      "cellularLocation": {
        "goTerms": ["GO:0005886", "GO:0005576", "GO:0005634", "GO:0016021", "GO:0005737", "GO:0005783", "GO:0005622", "GO:0005739", "GO:0005829", "GO:0005813", "GO:0043231", "GO:0005654", "GO:0005887", "GO:0005794", "GO:0030054", "GO:0005764", "GO:0005929", "GO:0036064", "GO:0097542", "GO:0005769", "GO:0015630", "GO:0030424", "GO:0043204", "GO:0070062", "GO:0030670", "GO:0005856", "GO:0042383", "GO:0005759", "GO:0030018", "GO:0005768", "GO:0005930", "GO:0032587", "GO:0005777", "GO:0032991", "GO:0005911", "GO:0005819", "GO:0031965", "GO:0005776", "GO:0060170", "GO:0000407", "GO:0005782", "GO:0005743", "GO:0016607", "GO:0005741", "GO:0005758", "GO:0005901", "GO:0030315", "GO:0034774", "GO:0005788", "GO:0098794", "GO:0031982", "GO:0016605", "GO:0030666", "GO:0030672", "GO:0043202", "GO:0035578", "GO:0043209", "GO:0097443", "GO:0097136", "GO:0016010", "GO:0016012", "GO:0030016", "GO:0032839", "GO:0034045", "GO:0034274", "GO:0070852", "GO:0098554", "GO:0097134", "GO:0031464"],
        "name": "Cellular Location"
      }
    },
    "allIds": ["molecularFunction", "biologicalProcess", "cellularLocation"]
  }
}
```

## Go Terms

* **PATH**: `/api/go-terms`
* **METHOD**: POST

* **REQUEST BODY**:
```json
{
  "genes": [
    "FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1"
  ]
}
```
* **RESPONSE BODY:**
```json
{
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
      "GO:0005509":{
        "genes":[
          "CAPN3"
        ],
        "name":"calcium ion binding"
      },
      "GO:0008234":{
        "genes":[
          "CAPN3"
        ],
        "name":"cysteine-type peptidase activity"
      },
      "GO:0019899":{
        "genes":[
          "PIAS1",
          "PTPN1",
          "AKT1"
        ],
        "name":"enzyme binding"
      },
      "GO:0004930":{
        "genes":[
          "SMO"
        ],
        "name":"G-protein coupled receptor activity"
      },
      "GO:0003723":{
        "genes":[
          "ASS1",
          "PTPN1"
        ],
        "name":"RNA binding"
      },
      "GO:0031625":{
        "genes":[
          "PIAS1"
        ],
        "name":"ubiquitin protein ligase binding"
      },
      "GO:0005524":{
        "genes":[
          "ASS1",
          "FLT3",
          "MAP2K4",
          "AKT1"
        ],
        "name":"ATP binding"
      },
      "GO:0004714":{
        "genes":[
          "FLT3"
        ],
        "name":"transmembrane receptor protein tyrosine kinase activity"
      },
      "GO:0004674":{
        "genes":[
          "MAP2K4",
          "AKT1"
        ],
        "name":"protein serine/threonine kinase activity"
      },
      "GO:0004672":{
        "genes":[
          "MAP2K4",
          "AKT1"
        ],
        "name":"protein kinase activity"
      },
      "GO:0005515":{
        "genes":[
          "MAP2K4",
          "AKT1",
          "ASS1",
          "PTPN1",
          "GLA",
          "CCNE1",
          "PIAS1",
          "FLT3",
          "SMO",
          "CAPN3",
          "CDKN1B",
          "ATG12",
          "AGXT",
          "THEM4",
          "BCL2L1",
          "ATG7",
          "BAD"
        ],
        "name":"protein binding"
      },
      "GO:0046982":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"protein heterodimerization activity"
      },
      "GO:0008483":{
        "genes":[
          "AGXT"
        ],
        "name":"transaminase activity"
      },
      "GO:0016787":{
        "genes":[
          "GLA"
        ],
        "name":"hydrolase activity"
      },
      "GO:0003714":{
        "genes":[
          "PIAS1"
        ],
        "name":"transcription corepressor activity"
      },
      "GO:0042803":{
        "genes":[
          "AKT1",
          "GLA",
          "FLT3",
          "AGXT",
          "BCL2L1",
          "ATG7"
        ],
        "name":"protein homodimerization activity"
      },
      "GO:0004839":{
        "genes":[
          "ATG7"
        ],
        "name":"ubiquitin activating enzyme activity"
      },
      "GO:0042802":{
        "genes":[
          "AKT1",
          "ASS1",
          "OAT",
          "AGXT",
          "BCL2L1"
        ],
        "name":"identical protein binding"
      },
      "GO:0045296":{
        "genes":[
          "PTPN1"
        ],
        "name":"cadherin binding"
      },
      "GO:0008289":{
        "genes":[
          "BAD"
        ],
        "name":"lipid binding"
      },
      "GO:0008134":{
        "genes":[
          "ATG7"
        ],
        "name":"transcription factor binding"
      },
      "GO:0019901":{
        "genes":[
          "AKT1",
          "PTPN1",
          "CCNE1",
          "CDKN1B",
          "BCL2L1",
          "BAD"
        ],
        "name":"protein kinase binding"
      },
      "GO:0051434":{
        "genes":[
          "BCL2L1"
        ],
        "name":"BH3 domain binding"
      },
      "GO:0004725":{
        "genes":[
          "PTPN1"
        ],
        "name":"protein tyrosine phosphatase activity"
      },
      "GO:0005102":{
        "genes":[
          "GLA",
          "AGXT"
        ],
        "name":"receptor binding"
      },
      "GO:0008307":{
        "genes":[
          "CAPN3"
        ],
        "name":"structural constituent of muscle"
      },
      "GO:0016301":{
        "genes":[
          "AKT1",
          "CCNE1"
        ],
        "name":"kinase activity"
      },
      "GO:0008233":{
        "genes":[
          "CAPN3"
        ],
        "name":"peptidase activity"
      },
      "GO:0005543":{
        "genes":[
          "BAD"
        ],
        "name":"phospholipid binding"
      },
      "GO:0019904":{
        "genes":[
          "PIAS1"
        ],
        "name":"protein domain specific binding"
      },
      "GO:0032947":{
        "genes":[
          "CAPN3"
        ],
        "name":"protein complex scaffold"
      },
      "GO:0017147":{
        "genes":[
          "SMO"
        ],
        "name":"Wnt-protein binding"
      },
      "GO:0004198":{
        "genes":[
          "CAPN3"
        ],
        "name":"calcium-dependent cysteine-type endopeptidase activity"
      },
      "GO:0004860":{
        "genes":[
          "CDKN1B"
        ],
        "name":"protein kinase inhibitor activity"
      },
      "GO:0019789":{
        "genes":[
          "PIAS1"
        ],
        "name":"SUMO transferase activity"
      },
      "GO:0047617":{
        "genes":[
          "THEM4"
        ],
        "name":"acyl-CoA hydrolase activity"
      },
      "GO:0005547":{
        "genes":[
          "AKT1"
        ],
        "name":"\"phosphatidylinositol-3"
      },
      "GO:0043325":{
        "genes":[
          "AKT1"
        ],
        "name":"\"phosphatidylinositol-3"
      },
      "GO:0046875":{
        "genes":[
          "PTPN1"
        ],
        "name":"ephrin receptor binding"
      },
      "GO:0019903":{
        "genes":[
          "CDKN1B",
          "BAD"
        ],
        "name":"protein phosphatase binding"
      },
      "GO:0003713":{
        "genes":[
          "PIAS1",
          "CCNE1"
        ],
        "name":"transcription coactivator activity"
      },
      "GO:0030170":{
        "genes":[
          "OAT",
          "AGXT"
        ],
        "name":"pyridoxal phosphate binding"
      },
      "GO:0003824":{
        "genes":[
          "CAPN3",
          "GLA"
        ],
        "name":"catalytic activity"
      },
      "GO:0004712":{
        "genes":[
          "AKT1"
        ],
        "name":"protein serine/threonine/tyrosine kinase activity"
      },
      "GO:0042813":{
        "genes":[
          "SMO"
        ],
        "name":"Wnt-activated receptor activity"
      },
      "GO:0016290":{
        "genes":[
          "THEM4"
        ],
        "name":"palmitoyl-CoA hydrolase activity"
      },
      "GO:0044877":{
        "genes":[
          "FLT3",
          "CDKN1B"
        ],
        "name":"macromolecular complex binding"
      },
      "GO:0008144":{
        "genes":[
          "SMO"
        ],
        "name":"drug binding"
      },
      "GO:0030971":{
        "genes":[
          "PTPN1"
        ],
        "name":"receptor tyrosine kinase binding"
      },
      "GO:0031402":{
        "genes":[
          "CAPN3"
        ],
        "name":"sodium ion binding"
      },
      "GO:0004713":{
        "genes":[
          "MAP2K4"
        ],
        "name":"protein tyrosine kinase activity"
      },
      "GO:0043621":{
        "genes":[
          "FLT3",
          "AGXT"
        ],
        "name":"protein self-association"
      },
      "GO:0005158":{
        "genes":[
          "PTPN1"
        ],
        "name":"insulin receptor binding"
      },
      "GO:0008656":{
        "genes":[
          "BAD"
        ],
        "name":"cysteine-type endopeptidase activator activity involved in apoptotic process"
      },
      "GO:0005021":{
        "genes":[
          "FLT3"
        ],
        "name":"vascular endothelial growth factor-activated receptor activity"
      },
      "GO:0071889":{
        "genes":[
          "AKT1",
          "BAD"
        ],
        "name":"14-3-3 protein binding"
      },
      "GO:0030332":{
        "genes":[
          "CDKN1B"
        ],
        "name":"cyclin binding"
      },
      "GO:0031432":{
        "genes":[
          "CAPN3"
        ],
        "name":"titin binding"
      },
      "GO:0050681":{
        "genes":[
          "PIAS1",
          "CCNE1"
        ],
        "name":"androgen receptor binding"
      },
      "GO:0005113":{
        "genes":[
          "SMO"
        ],
        "name":"patched binding"
      },
      "GO:0016538":{
        "genes":[
          "CCNE1"
        ],
        "name":"cyclin-dependent protein serine/threonine kinase regulator activity"
      },
      "GO:0004693":{
        "genes":[
          "CDKN1B"
        ],
        "name":"cyclin-dependent protein serine/threonine kinase activity"
      },
      "GO:0061665":{
        "genes":[
          "PIAS1"
        ],
        "name":"SUMO ligase activity"
      },
      "GO:0016597":{
        "genes":[
          "ASS1",
          "AGXT"
        ],
        "name":"amino acid binding"
      },
      "GO:0019776":{
        "genes":[
          "ATG12"
        ],
        "name":"Atg8 ligase activity"
      },
      "GO:0004861":{
        "genes":[
          "CDKN1B"
        ],
        "name":"cyclin-dependent protein serine/threonine kinase inhibitor activity"
      },
      "GO:0019778":{
        "genes":[
          "ATG7"
        ],
        "name":"Atg12 activating enzyme activity"
      },
      "GO:0019779":{
        "genes":[
          "ATG7"
        ],
        "name":"Atg8 activating enzyme activity"
      },
      "GO:0030235":{
        "genes":[
          "AKT1"
        ],
        "name":"nitric-oxide synthase regulator activity"
      },
      "GO:0004055":{
        "genes":[
          "ASS1"
        ],
        "name":"argininosuccinate synthase activity"
      },
      "GO:0015643":{
        "genes":[
          "ASS1"
        ],
        "name":"toxic substance binding"
      },
      "GO:0004587":{
        "genes":[
          "OAT"
        ],
        "name":"ornithine-oxo-acid transaminase activity"
      },
      "GO:0004896":{
        "genes":[
          "FLT3"
        ],
        "name":"cytokine receptor activity"
      },
      "GO:0016936":{
        "genes":[
          "GLA"
        ],
        "name":"galactoside binding"
      },
      "GO:0004557":{
        "genes":[
          "GLA"
        ],
        "name":"alpha-galactosidase activity"
      },
      "GO:0052692":{
        "genes":[
          "GLA"
        ],
        "name":"raffinose alpha-galactosidase activity"
      },
      "GO:0005072":{
        "genes":[
          "CDKN1B"
        ],
        "name":"\"transforming growth factor beta receptor"
      },
      "GO:0055103":{
        "genes":[
          "CAPN3"
        ],
        "name":"ligase regulator activity"
      },
      "GO:0004760":{
        "genes":[
          "AGXT"
        ],
        "name":"serine-pyruvate transaminase activity"
      },
      "GO:0008453":{
        "genes":[
          "AGXT"
        ],
        "name":"alanine-glyoxylate transaminase activity"
      },
      "GO:0008545":{
        "genes":[
          "MAP2K4"
        ],
        "name":"JUN kinase kinase activity"
      },
      "GO:0007186":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"G-protein coupled receptor signaling pathway"
      },
      "GO:0006508":{
        "genes":[
          "CAPN3"
        ],
        "name":"proteolysis"
      },
      "GO:0038095":{
        "genes":[
          "MAP2K4"
        ],
        "name":"Fc-epsilon receptor signaling pathway"
      },
      "GO:0045732":{
        "genes":[
          "CDKN1B",
          "ATG7"
        ],
        "name":"positive regulation of protein catabolic process"
      },
      "GO:0050790":{
        "genes":[
          "CAPN3"
        ],
        "name":"regulation of catalytic activity"
      },
      "GO:0016567":{
        "genes":[
          "AKT1",
          "ATG7"
        ],
        "name":"protein ubiquitination"
      },
      "GO:0035556":{
        "genes":[
          "AKT1"
        ],
        "name":"intracellular signal transduction"
      },
      "GO:0006412":{
        "genes":[
          "AKT1"
        ],
        "name":"translation"
      },
      "GO:0007169":{
        "genes":[
          "FLT3"
        ],
        "name":"transmembrane receptor protein tyrosine kinase signaling pathway"
      },
      "GO:0018108":{
        "genes":[
          "FLT3",
          "MAP2K4"
        ],
        "name":"peptidyl-tyrosine phosphorylation"
      },
      "GO:0006954":{
        "genes":[
          "AKT1"
        ],
        "name":"inflammatory response"
      },
      "GO:0071346":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to interferon-gamma"
      },
      "GO:0071356":{
        "genes":[
          "ASS1",
          "AKT1"
        ],
        "name":"cellular response to tumor necrosis factor"
      },
      "GO:0006468":{
        "genes":[
          "AKT1",
          "CCNE1"
        ],
        "name":"protein phosphorylation"
      },
      "GO:0032147":{
        "genes":[
          "MAP2K4"
        ],
        "name":"activation of protein kinase activity"
      },
      "GO:0008284":{
        "genes":[
          "FLT3",
          "CDKN1B",
          "AKT1",
          "BCL2L1"
        ],
        "name":"positive regulation of cell proliferation"
      },
      "GO:0043066":{
        "genes":[
          "AKT1",
          "PIAS1",
          "SMO",
          "CAPN3",
          "CDKN1B",
          "BCL2L1"
        ],
        "name":"negative regulation of apoptotic process"
      },
      "GO:0045892":{
        "genes":[
          "CAPN3",
          "CDKN1B"
        ],
        "name":"\"negative regulation of transcription"
      },
      "GO:0010951":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of endopeptidase activity"
      },
      "GO:0006351":{
        "genes":[
          "PIAS1"
        ],
        "name":"\"transcription"
      },
      "GO:0071230":{
        "genes":[
          "ASS1",
          "BCL2L1"
        ],
        "name":"cellular response to amino acid stimulus"
      },
      "GO:0007165":{
        "genes":[
          "CAPN3",
          "MAP2K4",
          "AKT1"
        ],
        "name":"signal transduction"
      },
      "GO:0060079":{
        "genes":[
          "AKT1"
        ],
        "name":"excitatory postsynaptic potential"
      },
      "GO:0023014":{
        "genes":[
          "MAP2K4"
        ],
        "name":"signal transduction by protein phosphorylation"
      },
      "GO:0006470":{
        "genes":[
          "PTPN1"
        ],
        "name":"protein dephosphorylation"
      },
      "GO:0009966":{
        "genes":[
          "PTPN1"
        ],
        "name":"regulation of signal transduction"
      },
      "GO:0007224":{
        "genes":[
          "SMO"
        ],
        "name":"smoothened signaling pathway"
      },
      "GO:0015031":{
        "genes":[
          "ATG7"
        ],
        "name":"protein transport"
      },
      "GO:0000122":{
        "genes":[
          "PIAS1",
          "SMO",
          "CCNE1"
        ],
        "name":"negative regulation of transcription from RNA polymerase II promoter"
      },
      "GO:0001890":{
        "genes":[
          "CDKN1B"
        ],
        "name":"placenta development"
      },
      "GO:0006977":{
        "genes":[
          "CDKN1B"
        ],
        "name":"\"DNA damage response"
      },
      "GO:0008283":{
        "genes":[
          "AKT1",
          "BCL2L1"
        ],
        "name":"cell proliferation"
      },
      "GO:0045944":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"positive regulation of transcription from RNA polymerase II promoter"
      },
      "GO:0006974":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to DNA damage stimulus"
      },
      "GO:0006687":{
        "genes":[
          "GLA"
        ],
        "name":"glycosphingolipid metabolic process"
      },
      "GO:0006897":{
        "genes":[
          "BCL2L1"
        ],
        "name":"endocytosis"
      },
      "GO:0010507":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of autophagy"
      },
      "GO:0030154":{
        "genes":[
          "AKT1"
        ],
        "name":"cell differentiation"
      },
      "GO:0008285":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of cell proliferation"
      },
      "GO:0045893":{
        "genes":[
          "PIAS1",
          "CAPN3",
          "AKT1",
          "CCNE1"
        ],
        "name":"\"positive regulation of transcription"
      },
      "GO:0045444":{
        "genes":[
          "PIAS1"
        ],
        "name":"fat cell differentiation"
      },
      "GO:0000045":{
        "genes":[
          "ATG12",
          "ATG7"
        ],
        "name":"autophagosome assembly"
      },
      "GO:0001934":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of protein phosphorylation"
      },
      "GO:0010508":{
        "genes":[
          "ATG7",
          "BAD"
        ],
        "name":"positive regulation of autophagy"
      },
      "GO:0033138":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of peptidyl-serine phosphorylation"
      },
      "GO:0050821":{
        "genes":[
          "SMO"
        ],
        "name":"protein stabilization"
      },
      "GO:0071222":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to lipopolysaccharide"
      },
      "GO:0075044":{
        "genes":[
          "ATG7"
        ],
        "name":"autophagy of host cells involved in interaction with symbiont"
      },
      "GO:0010628":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"positive regulation of gene expression"
      },
      "GO:0042475":{
        "genes":[
          "SMO"
        ],
        "name":"odontogenesis of dentin-containing tooth"
      },
      "GO:0006979":{
        "genes":[
          "AKT1"
        ],
        "name":"response to oxidative stress"
      },
      "GO:0007283":{
        "genes":[
          "PIAS1",
          "BCL2L1",
          "BAD"
        ],
        "name":"spermatogenesis"
      },
      "GO:0043065":{
        "genes":[
          "AKT1",
          "ATG7",
          "BAD"
        ],
        "name":"positive regulation of apoptotic process"
      },
      "GO:0051301":{
        "genes":[
          "CCNE1"
        ],
        "name":"cell division"
      },
      "GO:0040018":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of multicellular organism growth"
      },
      "GO:0045600":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of fat cell differentiation"
      },
      "GO:0072657":{
        "genes":[
          "CAPN3"
        ],
        "name":"protein localization to membrane"
      },
      "GO:0035335":{
        "genes":[
          "PTPN1"
        ],
        "name":"peptidyl-tyrosine dephosphorylation"
      },
      "GO:0030030":{
        "genes":[
          "AKT1"
        ],
        "name":"cell projection organization"
      },
      "GO:0016310":{
        "genes":[
          "AKT1"
        ],
        "name":"phosphorylation"
      },
      "GO:0045214":{
        "genes":[
          "CAPN3"
        ],
        "name":"sarcomere organization"
      },
      "GO:0032094":{
        "genes":[
          "AKT1"
        ],
        "name":"response to food"
      },
      "GO:0016055":{
        "genes":[
          "CCNE1"
        ],
        "name":"Wnt signaling pathway"
      },
      "GO:0007096":{
        "genes":[
          "CDKN1B"
        ],
        "name":"regulation of exit from mitosis"
      },
      "GO:0071850":{
        "genes":[
          "CDKN1B"
        ],
        "name":"mitotic cell cycle arrest"
      },
      "GO:0016236":{
        "genes":[
          "ATG12",
          "ATG7"
        ],
        "name":"macroautophagy"
      },
      "GO:0038061":{
        "genes":[
          "AKT1"
        ],
        "name":"NIK/NF-kappaB signaling"
      },
      "GO:0043488":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of mRNA stability"
      },
      "GO:2000036":{
        "genes":[
          "SMO"
        ],
        "name":"regulation of stem cell maintenance"
      },
      "GO:0006914":{
        "genes":[
          "ATG7"
        ],
        "name":"autophagy"
      },
      "GO:0000422":{
        "genes":[
          "ATG12",
          "ATG7"
        ],
        "name":"mitophagy"
      },
      "GO:0006995":{
        "genes":[
          "ATG7"
        ],
        "name":"cellular response to nitrogen starvation"
      },
      "GO:0006270":{
        "genes":[
          "CCNE1"
        ],
        "name":"DNA replication initiation"
      },
      "GO:0033234":{
        "genes":[
          "CAPN3"
        ],
        "name":"negative regulation of protein sumoylation"
      },
      "GO:0006915":{
        "genes":[
          "CAPN3",
          "MAP2K4",
          "BAD"
        ],
        "name":"apoptotic process"
      },
      "GO:0006501":{
        "genes":[
          "ATG12",
          "ATG7"
        ],
        "name":"C-terminal protein lipidation"
      },
      "GO:0008584":{
        "genes":[
          "BCL2L1"
        ],
        "name":"male gonad development"
      },
      "GO:0007346":{
        "genes":[
          "MAP2K4"
        ],
        "name":"regulation of mitotic cell cycle"
      },
      "GO:0007050":{
        "genes":[
          "CDKN1B"
        ],
        "name":"cell cycle arrest"
      },
      "GO:0009267":{
        "genes":[
          "ATG7"
        ],
        "name":"cellular response to starvation"
      },
      "GO:0035264":{
        "genes":[
          "SMO"
        ],
        "name":"multicellular organism growth"
      },
      "GO:0007605":{
        "genes":[
          "CDKN1B"
        ],
        "name":"sensory perception of sound"
      },
      "GO:0007601":{
        "genes":[
          "OAT"
        ],
        "name":"visual perception"
      },
      "GO:0045859":{
        "genes":[
          "CCNE1"
        ],
        "name":"regulation of protein kinase activity"
      },
      "GO:0007517":{
        "genes":[
          "CAPN3",
          "SGCB"
        ],
        "name":"muscle organ development"
      },
      "GO:0001666":{
        "genes":[
          "CDKN1B"
        ],
        "name":"response to hypoxia"
      },
      "GO:0035726":{
        "genes":[
          "FLT3"
        ],
        "name":"common myeloid progenitor cell proliferation"
      },
      "GO:0006469":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of protein kinase activity"
      },
      "GO:0019221":{
        "genes":[
          "FLT3",
          "AKT1",
          "BAD",
          "BCL2L1"
        ],
        "name":"cytokine-mediated signaling pathway"
      },
      "GO:0034641":{
        "genes":[
          "AGXT"
        ],
        "name":"cellular nitrogen compound metabolic process"
      },
      "GO:0021987":{
        "genes":[
          "SMO",
          "BAD"
        ],
        "name":"cerebral cortex development"
      },
      "GO:0006417":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of translation"
      },
      "GO:0001701":{
        "genes":[
          "SMO",
          "BCL2L1"
        ],
        "name":"in utero embryonic development"
      },
      "GO:0016925":{
        "genes":[
          "PIAS1"
        ],
        "name":"protein sumoylation"
      },
      "GO:0071456":{
        "genes":[
          "AKT1",
          "BAD"
        ],
        "name":"cellular response to hypoxia"
      },
      "GO:0042307":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of protein import into nucleus"
      },
      "GO:0007219":{
        "genes":[
          "CDKN1B",
          "AGXT"
        ],
        "name":"Notch signaling pathway"
      },
      "GO:0007129":{
        "genes":[
          "CCNE1"
        ],
        "name":"synapsis"
      },
      "GO:0001947":{
        "genes":[
          "SMO"
        ],
        "name":"heart looping"
      },
      "GO:0045907":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of vasoconstriction"
      },
      "GO:0044804":{
        "genes":[
          "ATG12"
        ],
        "name":"nucleophagy"
      },
      "GO:0043312":{
        "genes":[
          "GLA",
          "ATG7"
        ],
        "name":"neutrophil degranulation"
      },
      "GO:0042593":{
        "genes":[
          "AKT1",
          "BAD"
        ],
        "name":"glucose homeostasis"
      },
      "GO:0045725":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of glycogen biosynthetic process"
      },
      "GO:0071260":{
        "genes":[
          "MAP2K4",
          "AKT1",
          "BAD"
        ],
        "name":"cellular response to mechanical stimulus"
      },
      "GO:0071277":{
        "genes":[
          "CAPN3"
        ],
        "name":"cellular response to calcium ion"
      },
      "GO:0097193":{
        "genes":[
          "BAD"
        ],
        "name":"intrinsic apoptotic signaling pathway"
      },
      "GO:0010243":{
        "genes":[
          "FLT3"
        ],
        "name":"response to organonitrogen compound"
      },
      "GO:0034614":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to reactive oxygen species"
      },
      "GO:0008286":{
        "genes":[
          "PTPN1",
          "AKT1"
        ],
        "name":"insulin receptor signaling pathway"
      },
      "GO:0000723":{
        "genes":[
          "CCNE1"
        ],
        "name":"telomere maintenance"
      },
      "GO:0048741":{
        "genes":[
          "SMO"
        ],
        "name":"skeletal muscle fiber development"
      },
      "GO:0006464":{
        "genes":[
          "AKT1",
          "ATG7"
        ],
        "name":"cellular protein modification process"
      },
      "GO:0030100":{
        "genes":[
          "PTPN1"
        ],
        "name":"regulation of endocytosis"
      },
      "GO:0051607":{
        "genes":[
          "ATG7"
        ],
        "name":"defense response to virus"
      },
      "GO:0030334":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of cell migration"
      },
      "GO:0018105":{
        "genes":[
          "AKT1"
        ],
        "name":"peptidyl-serine phosphorylation"
      },
      "GO:0042127":{
        "genes":[
          "PIAS1"
        ],
        "name":"regulation of cell proliferation"
      },
      "GO:0042981":{
        "genes":[
          "FLT3",
          "MAP2K4",
          "AKT1"
        ],
        "name":"regulation of apoptotic process"
      },
      "GO:0001836":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"release of cytochrome c from mitochondria"
      },
      "GO:0030183":{
        "genes":[
          "FLT3"
        ],
        "name":"B cell differentiation"
      },
      "GO:0035567":{
        "genes":[
          "SMO"
        ],
        "name":"non-canonical Wnt signaling pathway"
      },
      "GO:0043524":{
        "genes":[
          "BCL2L1"
        ],
        "name":"negative regulation of neuron apoptotic process"
      },
      "GO:0060070":{
        "genes":[
          "SMO"
        ],
        "name":"canonical Wnt signaling pathway"
      },
      "GO:0006637":{
        "genes":[
          "THEM4"
        ],
        "name":"acyl-CoA metabolic process"
      },
      "GO:0061025":{
        "genes":[
          "ATG7"
        ],
        "name":"membrane fusion"
      },
      "GO:0014068":{
        "genes":[
          "FLT3"
        ],
        "name":"positive regulation of phosphatidylinositol 3-kinase signaling"
      },
      "GO:0071345":{
        "genes":[
          "FLT3"
        ],
        "name":"cellular response to cytokine stimulus"
      },
      "GO:0097192":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"extrinsic apoptotic signaling pathway in absence of ligand"
      },
      "GO:2001240":{
        "genes":[
          "AKT1",
          "BCL2L1"
        ],
        "name":"negative regulation of extrinsic apoptotic signaling pathway in absence of ligand"
      },
      "GO:0006813":{
        "genes":[
          "CDKN1B"
        ],
        "name":"potassium ion transport"
      },
      "GO:0001938":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of endothelial cell proliferation"
      },
      "GO:0010629":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"negative regulation of gene expression"
      },
      "GO:0051092":{
        "genes":[
          "CAPN3"
        ],
        "name":"positive regulation of NF-kappaB transcription factor activity"
      },
      "GO:0090200":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of release of cytochrome c from mitochondria"
      },
      "GO:0007249":{
        "genes":[
          "AKT1"
        ],
        "name":"I-kappaB kinase/NF-kappaB signaling"
      },
      "GO:0031663":{
        "genes":[
          "AKT1"
        ],
        "name":"lipopolysaccharide-mediated signaling pathway"
      },
      "GO:0045429":{
        "genes":[
          "ASS1",
          "AKT1"
        ],
        "name":"positive regulation of nitric oxide biosynthetic process"
      },
      "GO:0051770":{
        "genes":[
          "MAP2K4"
        ],
        "name":"positive regulation of nitric-oxide synthase biosynthetic process"
      },
      "GO:0070373":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of ERK1 and ERK2 cascade"
      },
      "GO:0030308":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of cell growth"
      },
      "GO:0006919":{
        "genes":[
          "BAD"
        ],
        "name":"activation of cysteine-type endopeptidase activity involved in apoptotic process"
      },
      "GO:0008625":{
        "genes":[
          "BAD"
        ],
        "name":"extrinsic apoptotic signaling pathway via death domain receptors"
      },
      "GO:0043154":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of cysteine-type endopeptidase activity involved in apoptotic process"
      },
      "GO:0097191":{
        "genes":[
          "BAD"
        ],
        "name":"extrinsic apoptotic signaling pathway"
      },
      "GO:1902042":{
        "genes":[
          "BCL2L1"
        ],
        "name":"negative regulation of extrinsic apoptotic signaling pathway via death domain receptors"
      },
      "GO:0032024":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of insulin secretion"
      },
      "GO:0007623":{
        "genes":[
          "ASS1"
        ],
        "name":"circadian rhythm"
      },
      "GO:0009611":{
        "genes":[
          "MAP2K4"
        ],
        "name":"response to wounding"
      },
      "GO:0030168":{
        "genes":[
          "AKT1"
        ],
        "name":"platelet activation"
      },
      "GO:0045736":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of cyclin-dependent protein serine/threonine kinase activity"
      },
      "GO:0045786":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of cell cycle"
      },
      "GO:0046329":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of JNK cascade"
      },
      "GO:0001541":{
        "genes":[
          "BCL2L1"
        ],
        "name":"ovarian follicle development"
      },
      "GO:1901796":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of signal transduction by p53 class mediator"
      },
      "GO:1900118":{
        "genes":[
          "BCL2L1"
        ],
        "name":"negative regulation of execution phase of apoptosis"
      },
      "GO:0045742":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of epidermal growth factor receptor signaling pathway"
      },
      "GO:0061024":{
        "genes":[
          "SGCB"
        ],
        "name":"membrane organization"
      },
      "GO:0051726":{
        "genes":[
          "CCNE1"
        ],
        "name":"regulation of cell cycle"
      },
      "GO:0051881":{
        "genes":[
          "BCL2L1"
        ],
        "name":"regulation of mitochondrial membrane potential"
      },
      "GO:0007584":{
        "genes":[
          "ASS1"
        ],
        "name":"response to nutrient"
      },
      "GO:0042493":{
        "genes":[
          "CDKN1B"
        ],
        "name":"response to drug"
      },
      "GO:0000082":{
        "genes":[
          "PIAS1",
          "CDKN1B",
          "CCNE1"
        ],
        "name":"G1/S transition of mitotic cell cycle"
      },
      "GO:0000060":{
        "genes":[
          "AKT1"
        ],
        "name":"\"protein import into nucleus"
      },
      "GO:0014065":{
        "genes":[
          "AKT1"
        ],
        "name":"phosphatidylinositol 3-kinase signaling"
      },
      "GO:0031069":{
        "genes":[
          "SMO"
        ],
        "name":"hair follicle morphogenesis"
      },
      "GO:0016242":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of macroautophagy"
      },
      "GO:0050999":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of nitric-oxide synthase activity"
      },
      "GO:0065003":{
        "genes":[
          "CAPN3"
        ],
        "name":"macromolecular complex assembly"
      },
      "GO:0071320":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to cAMP"
      },
      "GO:0032869":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to insulin stimulus"
      },
      "GO:0046777":{
        "genes":[
          "FLT3",
          "AKT1"
        ],
        "name":"protein autophosphorylation"
      },
      "GO:0070584":{
        "genes":[
          "BCL2L1"
        ],
        "name":"mitochondrion morphogenesis"
      },
      "GO:0097194":{
        "genes":[
          "AKT1"
        ],
        "name":"execution phase of apoptosis"
      },
      "GO:2001244":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"positive regulation of intrinsic apoptotic signaling pathway"
      },
      "GO:0007173":{
        "genes":[
          "AKT1"
        ],
        "name":"epidermal growth factor receptor signaling pathway"
      },
      "GO:0051091":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of sequence-specific DNA binding transcription factor activity"
      },
      "GO:0061113":{
        "genes":[
          "SMO"
        ],
        "name":"pancreas morphogenesis"
      },
      "GO:0045471":{
        "genes":[
          "BAD"
        ],
        "name":"response to ethanol"
      },
      "GO:0042542":{
        "genes":[
          "BAD"
        ],
        "name":"response to hydrogen peroxide"
      },
      "GO:0003323":{
        "genes":[
          "SMO"
        ],
        "name":"type B pancreatic cell development"
      },
      "GO:0021510":{
        "genes":[
          "AKT1"
        ],
        "name":"spinal cord development"
      },
      "GO:0030097":{
        "genes":[
          "FLT3"
        ],
        "name":"hemopoiesis"
      },
      "GO:0030857":{
        "genes":[
          "SMO"
        ],
        "name":"negative regulation of epithelial cell differentiation"
      },
      "GO:0048839":{
        "genes":[
          "CDKN1B"
        ],
        "name":"inner ear development"
      },
      "GO:0070986":{
        "genes":[
          "SMO"
        ],
        "name":"left/right axis specification"
      },
      "GO:0030307":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of cell growth"
      },
      "GO:0043280":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of cysteine-type endopeptidase activity involved in apoptotic process"
      },
      "GO:2001243":{
        "genes":[
          "BCL2L1"
        ],
        "name":"negative regulation of intrinsic apoptotic signaling pathway"
      },
      "GO:0031295":{
        "genes":[
          "AKT1"
        ],
        "name":"T cell costimulation"
      },
      "GO:0043552":{
        "genes":[
          "FLT3"
        ],
        "name":"positive regulation of phosphatidylinositol 3-kinase activity"
      },
      "GO:0001649":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"osteoblast differentiation"
      },
      "GO:0060413":{
        "genes":[
          "SMO"
        ],
        "name":"atrial septum morphogenesis"
      },
      "GO:0060716":{
        "genes":[
          "AKT1"
        ],
        "name":"labyrinthine layer blood vessel development"
      },
      "GO:0043491":{
        "genes":[
          "CDKN1B",
          "AKT1",
          "THEM4"
        ],
        "name":"protein kinase B signaling"
      },
      "GO:0032270":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of cellular protein metabolic process"
      },
      "GO:0032355":{
        "genes":[
          "ASS1",
          "CDKN1B",
          "BAD"
        ],
        "name":"response to estradiol"
      },
      "GO:0031999":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of fatty acid beta-oxidation"
      },
      "GO:0032570":{
        "genes":[
          "BAD"
        ],
        "name":"response to progesterone"
      },
      "GO:0030521":{
        "genes":[
          "PIAS1",
          "CCNE1"
        ],
        "name":"androgen receptor signaling pathway"
      },
      "GO:0007259":{
        "genes":[
          "PIAS1"
        ],
        "name":"JAK-STAT cascade"
      },
      "GO:0046627":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of insulin receptor signaling pathway"
      },
      "GO:0031397":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of protein ubiquitination"
      },
      "GO:0035774":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of insulin secretion involved in cellular response to glucose stimulus"
      },
      "GO:0042531":{
        "genes":[
          "FLT3"
        ],
        "name":"positive regulation of tyrosine phosphorylation of STAT protein"
      },
      "GO:0060334":{
        "genes":[
          "PIAS1"
        ],
        "name":"regulation of interferon-gamma-mediated signaling pathway"
      },
      "GO:0034097":{
        "genes":[
          "BCL2L1"
        ],
        "name":"response to cytokine"
      },
      "GO:0051402":{
        "genes":[
          "BCL2L1"
        ],
        "name":"neuron apoptotic process"
      },
      "GO:0036498":{
        "genes":[
          "PTPN1"
        ],
        "name":"IRE1-mediated unfolded protein response"
      },
      "GO:0051281":{
        "genes":[
          "CAPN3"
        ],
        "name":"positive regulation of release of sequestered calcium ion into cytosol"
      },
      "GO:0032091":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of protein binding"
      },
      "GO:0032436":{
        "genes":[
          "PIAS1",
          "AKT1"
        ],
        "name":"positive regulation of proteasomal ubiquitin-dependent protein catabolic process"
      },
      "GO:0034504":{
        "genes":[
          "SMO"
        ],
        "name":"protein localization to nucleus"
      },
      "GO:1903827":{
        "genes":[
          "CCNE1"
        ],
        "name":"regulation of cellular protein localization"
      },
      "GO:0061098":{
        "genes":[
          "PTPN1"
        ],
        "name":"positive regulation of protein tyrosine kinase activity"
      },
      "GO:0051592":{
        "genes":[
          "CAPN3",
          "BAD"
        ],
        "name":"response to calcium ion"
      },
      "GO:0032148":{
        "genes":[
          "AKT1"
        ],
        "name":"activation of protein kinase B activity"
      },
      "GO:0035924":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to vascular endothelial growth factor stimulus"
      },
      "GO:0051451":{
        "genes":[
          "SMO"
        ],
        "name":"myoblast migration"
      },
      "GO:0007568":{
        "genes":[
          "ASS1",
          "AKT1",
          "ATG7"
        ],
        "name":"aging"
      },
      "GO:0007254":{
        "genes":[
          "MAP2K4"
        ],
        "name":"JNK cascade"
      },
      "GO:0007257":{
        "genes":[
          "MAP2K4",
          "PTPN1"
        ],
        "name":"activation of JUN kinase activity"
      },
      "GO:0009408":{
        "genes":[
          "AKT1"
        ],
        "name":"response to heat"
      },
      "GO:0035897":{
        "genes":[
          "MAP2K4"
        ],
        "name":"proteolysis in other organism"
      },
      "GO:0045930":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of mitotic cell cycle"
      },
      "GO:0051898":{
        "genes":[
          "THEM4",
          "AKT1"
        ],
        "name":"negative regulation of protein kinase B signaling"
      },
      "GO:0046326":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of glucose import"
      },
      "GO:0046686":{
        "genes":[
          "CDKN1B"
        ],
        "name":"response to cadmium ion"
      },
      "GO:0051000":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of nitric-oxide synthase activity"
      },
      "GO:0001822":{
        "genes":[
          "ASS1"
        ],
        "name":"kidney development"
      },
      "GO:0018107":{
        "genes":[
          "AKT1"
        ],
        "name":"peptidyl-threonine phosphorylation"
      },
      "GO:0045787":{
        "genes":[
          "CDKN1B"
        ],
        "name":"positive regulation of cell cycle"
      },
      "GO:0008542":{
        "genes":[
          "PIAS1"
        ],
        "name":"visual learning"
      },
      "GO:0030163":{
        "genes":[
          "AKT1"
        ],
        "name":"protein catabolic process"
      },
      "GO:0031532":{
        "genes":[
          "PTPN1"
        ],
        "name":"actin cytoskeleton reorganization"
      },
      "GO:0043406":{
        "genes":[
          "FLT3"
        ],
        "name":"positive regulation of MAP kinase activity"
      },
      "GO:0014850":{
        "genes":[
          "CAPN3"
        ],
        "name":"response to muscle activity"
      },
      "GO:0033574":{
        "genes":[
          "BAD"
        ],
        "name":"response to testosterone"
      },
      "GO:0033673":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of kinase activity"
      },
      "GO:0046716":{
        "genes":[
          "CAPN3"
        ],
        "name":"muscle cell cellular homeostasis"
      },
      "GO:0071549":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to dexamethasone stimulus"
      },
      "GO:0010043":{
        "genes":[
          "ASS1"
        ],
        "name":"response to zinc ion"
      },
      "GO:0000083":{
        "genes":[
          "CCNE1"
        ],
        "name":"regulation of transcription involved in G1/S transition of mitotic cell cycle"
      },
      "GO:0060644":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"mammary gland epithelial cell differentiation"
      },
      "GO:0007093":{
        "genes":[
          "BCL2L1"
        ],
        "name":"mitotic cell cycle checkpoint"
      },
      "GO:0045880":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of smoothened signaling pathway"
      },
      "GO:0009968":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of signal transduction"
      },
      "GO:0043434":{
        "genes":[
          "CDKN1B"
        ],
        "name":"response to peptide hormone"
      },
      "GO:0045740":{
        "genes":[
          "MAP2K4"
        ],
        "name":"positive regulation of DNA replication"
      },
      "GO:0048661":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of smooth muscle cell proliferation"
      },
      "GO:0021794":{
        "genes":[
          "SMO"
        ],
        "name":"thalamus development"
      },
      "GO:0030948":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of vascular endothelial growth factor receptor signaling pathway"
      },
      "GO:0032465":{
        "genes":[
          "BCL2L1"
        ],
        "name":"regulation of cytokinesis"
      },
      "GO:0008637":{
        "genes":[
          "AKT1",
          "BCL2L1"
        ],
        "name":"apoptotic mitochondrial changes"
      },
      "GO:0005978":{
        "genes":[
          "AKT1"
        ],
        "name":"glycogen biosynthetic process"
      },
      "GO:0006631":{
        "genes":[
          "THEM4"
        ],
        "name":"fatty acid metabolic process"
      },
      "GO:0043200":{
        "genes":[
          "CDKN1B",
          "BAD"
        ],
        "name":"response to amino acid"
      },
      "GO:0051146":{
        "genes":[
          "AKT1"
        ],
        "name":"striated muscle cell differentiation"
      },
      "GO:0071276":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to cadmium ion"
      },
      "GO:0007281":{
        "genes":[
          "AKT1",
          "BCL2L1"
        ],
        "name":"germ cell development"
      },
      "GO:0009749":{
        "genes":[
          "CDKN1B",
          "ATG7",
          "BAD"
        ],
        "name":"response to glucose"
      },
      "GO:0031100":{
        "genes":[
          "FLT3"
        ],
        "name":"organ regeneration"
      },
      "GO:1990090":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to nerve growth factor stimulus"
      },
      "GO:0006953":{
        "genes":[
          "ASS1"
        ],
        "name":"acute-phase response"
      },
      "GO:0001570":{
        "genes":[
          "SMO"
        ],
        "name":"vasculogenesis"
      },
      "GO:0071407":{
        "genes":[
          "CDKN1B",
          "AKT1"
        ],
        "name":"cellular response to organic cyclic compound"
      },
      "GO:1901216":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of neuron death"
      },
      "GO:0001755":{
        "genes":[
          "SMO"
        ],
        "name":"neural crest cell migration"
      },
      "GO:0051591":{
        "genes":[
          "AGXT"
        ],
        "name":"response to cAMP"
      },
      "GO:1903078":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of protein localization to plasma membrane"
      },
      "GO:0072709":{
        "genes":[
          "MAP2K4"
        ],
        "name":"cellular response to sorbitol"
      },
      "GO:0045862":{
        "genes":[
          "CAPN3",
          "BAD"
        ],
        "name":"positive regulation of proteolysis"
      },
      "GO:0008630":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"intrinsic apoptotic signaling pathway in response to DNA damage"
      },
      "GO:1900740":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of protein insertion into mitochondrial membrane involved in apoptotic signaling pathway"
      },
      "GO:0043410":{
        "genes":[
          "FLT3"
        ],
        "name":"positive regulation of MAPK cascade"
      },
      "GO:0006006":{
        "genes":[
          "AKT1"
        ],
        "name":"glucose metabolic process"
      },
      "GO:0065004":{
        "genes":[
          "PIAS1"
        ],
        "name":"protein-DNA complex assembly"
      },
      "GO:0002053":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of mesenchymal cell proliferation"
      },
      "GO:0040007":{
        "genes":[
          "BCL2L1"
        ],
        "name":"growth"
      },
      "GO:0071364":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to epidermal growth factor stimulus"
      },
      "GO:0031659":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of cyclin-dependent protein serine/threonine kinase activity involved in G1/S transition of mitotic cell cycle"
      },
      "GO:0050679":{
        "genes":[
          "SMO",
          "BAD"
        ],
        "name":"positive regulation of epithelial cell proliferation"
      },
      "GO:0001889":{
        "genes":[
          "ASS1"
        ],
        "name":"liver development"
      },
      "GO:0043122":{
        "genes":[
          "CAPN3"
        ],
        "name":"regulation of I-kappaB kinase/NF-kappaB signaling"
      },
      "GO:0043536":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of blood vessel endothelial cell migration"
      },
      "GO:0009311":{
        "genes":[
          "GLA"
        ],
        "name":"oligosaccharide metabolic process"
      },
      "GO:0009952":{
        "genes":[
          "SMO"
        ],
        "name":"anterior/posterior pattern specification"
      },
      "GO:0010942":{
        "genes":[
          "CDKN1B"
        ],
        "name":"positive regulation of cell death"
      },
      "GO:0071377":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to glucagon stimulus"
      },
      "GO:0071380":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to prostaglandin E stimulus"
      },
      "GO:0031018":{
        "genes":[
          "AKT1"
        ],
        "name":"endocrine pancreas development"
      },
      "GO:0043276":{
        "genes":[
          "AKT1"
        ],
        "name":"anoikis"
      },
      "GO:0097202":{
        "genes":[
          "BAD"
        ],
        "name":"activation of cysteine-type endopeptidase activity"
      },
      "GO:0010975":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of neuron projection development"
      },
      "GO:0001708":{
        "genes":[
          "SMO"
        ],
        "name":"cell fate specification"
      },
      "GO:0030968":{
        "genes":[
          "PTPN1"
        ],
        "name":"endoplasmic reticulum unfolded protein response"
      },
      "GO:1901215":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of neuron death"
      },
      "GO:1902176":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of oxidative stress-induced intrinsic apoptotic signaling pathway"
      },
      "GO:0071499":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to laminar fluid shear stress"
      },
      "GO:0001844":{
        "genes":[
          "BAD"
        ],
        "name":"protein insertion into mitochondrial membrane involved in apoptotic signaling pathway"
      },
      "GO:0043525":{
        "genes":[
          "MAP2K4"
        ],
        "name":"positive regulation of neuron apoptotic process"
      },
      "GO:0060139":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of apoptotic process by virus"
      },
      "GO:0060154":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"cellular process regulating host cell cycle in response to virus"
      },
      "GO:0071385":{
        "genes":[
          "FLT3"
        ],
        "name":"cellular response to glucocorticoid stimulus"
      },
      "GO:1903896":{
        "genes":[
          "PTPN1"
        ],
        "name":"positive regulation of IRE1-mediated unfolded protein response"
      },
      "GO:0043407":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of MAP kinase activity"
      },
      "GO:1902230":{
        "genes":[
          "BCL2L1"
        ],
        "name":"negative regulation of intrinsic apoptotic signaling pathway in response to DNA damage"
      },
      "GO:1903898":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of PERK-mediated unfolded protein response"
      },
      "GO:0060539":{
        "genes":[
          "ASS1"
        ],
        "name":"diaphragm development"
      },
      "GO:0051271":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of cellular component movement"
      },
      "GO:0090201":{
        "genes":[
          "AKT1",
          "BCL2L1"
        ],
        "name":"negative regulation of release of cytochrome c from mitochondria"
      },
      "GO:0008643":{
        "genes":[
          "AKT1"
        ],
        "name":"carbohydrate transport"
      },
      "GO:0010765":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of sodium ion transport"
      },
      "GO:1902236":{
        "genes":[
          "PTPN1"
        ],
        "name":"negative regulation of endoplasmic reticulum stress-induced intrinsic apoptotic signaling pathway"
      },
      "GO:0014718":{
        "genes":[
          "CAPN3"
        ],
        "name":"positive regulation of satellite cell activation involved in skeletal muscle regeneration"
      },
      "GO:0043392":{
        "genes":[
          "SMO"
        ],
        "name":"negative regulation of DNA binding"
      },
      "GO:0071480":{
        "genes":[
          "BCL2L1"
        ],
        "name":"cellular response to gamma radiation"
      },
      "GO:0031401":{
        "genes":[
          "ATG7"
        ],
        "name":"positive regulation of protein modification process"
      },
      "GO:0038084":{
        "genes":[
          "FLT3"
        ],
        "name":"vascular endothelial growth factor signaling pathway"
      },
      "GO:0046889":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of lipid biosynthetic process"
      },
      "GO:0000079":{
        "genes":[
          "CDKN1B"
        ],
        "name":"regulation of cyclin-dependent protein serine/threonine kinase activity"
      },
      "GO:0045737":{
        "genes":[
          "CDKN1B"
        ],
        "name":"positive regulation of cyclin-dependent protein serine/threonine kinase activity"
      },
      "GO:0090190":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of branching involved in ureteric bud morphogenesis"
      },
      "GO:0030239":{
        "genes":[
          "CAPN3"
        ],
        "name":"myofibril assembly"
      },
      "GO:0045661":{
        "genes":[
          "CAPN3"
        ],
        "name":"regulation of myoblast differentiation"
      },
      "GO:0060397":{
        "genes":[
          "PTPN1"
        ],
        "name":"JAK-STAT cascade involved in growth hormone signaling pathway"
      },
      "GO:0006007":{
        "genes":[
          "BAD"
        ],
        "name":"glucose catabolic process"
      },
      "GO:0033133":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of glucokinase activity"
      },
      "GO:0097084":{
        "genes":[
          "SGCB"
        ],
        "name":"vascular smooth muscle cell development"
      },
      "GO:0048102":{
        "genes":[
          "CDKN1B"
        ],
        "name":"autophagic cell death"
      },
      "GO:0051384":{
        "genes":[
          "BAD",
          "AGXT"
        ],
        "name":"response to glucocorticoid"
      },
      "GO:0010918":{
        "genes":[
          "AKT1",
          "BAD"
        ],
        "name":"positive regulation of mitochondrial membrane potential"
      },
      "GO:0046034":{
        "genes":[
          "BAD"
        ],
        "name":"ATP metabolic process"
      },
      "GO:0048853":{
        "genes":[
          "SMO"
        ],
        "name":"forebrain morphogenesis"
      },
      "GO:0071901":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of protein serine/threonine kinase activity"
      },
      "GO:0031641":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of myelination"
      },
      "GO:2000672":{
        "genes":[
          "MAP2K4"
        ],
        "name":"negative regulation of motor neuron apoptotic process"
      },
      "GO:0006497":{
        "genes":[
          "ATG7"
        ],
        "name":"protein lipidation"
      },
      "GO:0021953":{
        "genes":[
          "SMO"
        ],
        "name":"central nervous system neuron differentiation"
      },
      "GO:0048009":{
        "genes":[
          "AKT1"
        ],
        "name":"insulin-like growth factor receptor signaling pathway"
      },
      "GO:0006987":{
        "genes":[
          "PTPN1"
        ],
        "name":"activation of signaling protein activity involved in unfolded protein response"
      },
      "GO:0007494":{
        "genes":[
          "SMO",
          "ASS1"
        ],
        "name":"midgut development"
      },
      "GO:0071397":{
        "genes":[
          "SMO"
        ],
        "name":"cellular response to cholesterol"
      },
      "GO:0001893":{
        "genes":[
          "AKT1"
        ],
        "name":"maternal placenta development"
      },
      "GO:0045579":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of B cell differentiation"
      },
      "GO:0010763":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of fibroblast migration"
      },
      "GO:0031098":{
        "genes":[
          "MAP2K4"
        ],
        "name":"stress-activated protein kinase signaling cascade"
      },
      "GO:0033235":{
        "genes":[
          "PIAS1"
        ],
        "name":"positive regulation of protein sumoylation"
      },
      "GO:0051152":{
        "genes":[
          "PIAS1"
        ],
        "name":"positive regulation of smooth muscle cell differentiation"
      },
      "GO:0009566":{
        "genes":[
          "BCL2L1"
        ],
        "name":"fertilization"
      },
      "GO:0046622":{
        "genes":[
          "SMO",
          "AKT1"
        ],
        "name":"positive regulation of organ growth"
      },
      "GO:0048873":{
        "genes":[
          "SMO"
        ],
        "name":"homeostasis of number of cells within a tissue"
      },
      "GO:0097028":{
        "genes":[
          "FLT3"
        ],
        "name":"dendritic cell differentiation"
      },
      "GO:0000052":{
        "genes":[
          "ASS1"
        ],
        "name":"citrulline metabolic process"
      },
      "GO:0061049":{
        "genes":[
          "MAP2K4"
        ],
        "name":"cell growth involved in cardiac muscle cell development"
      },
      "GO:2000010":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of protein localization to cell surface"
      },
      "GO:0008652":{
        "genes":[
          "OAT"
        ],
        "name":"cellular amino acid biosynthetic process"
      },
      "GO:0034214":{
        "genes":[
          "OAT"
        ],
        "name":"protein hexamerization"
      },
      "GO:1900182":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of protein localization to nucleus"
      },
      "GO:0035655":{
        "genes":[
          "AKT1"
        ],
        "name":"interleukin-18-mediated signaling pathway"
      },
      "GO:0034727":{
        "genes":[
          "ATG7"
        ],
        "name":"piecemeal microautophagy of nucleus"
      },
      "GO:0039521":{
        "genes":[
          "ATG7"
        ],
        "name":"suppression by virus of host autophagy"
      },
      "GO:0044805":{
        "genes":[
          "ATG7"
        ],
        "name":"late nucleophagy"
      },
      "GO:0071315":{
        "genes":[
          "ATG7"
        ],
        "name":"cellular response to morphine"
      },
      "GO:0071455":{
        "genes":[
          "ATG7"
        ],
        "name":"cellular response to hyperoxia"
      },
      "GO:0090298":{
        "genes":[
          "ATG7"
        ],
        "name":"negative regulation of mitochondrial DNA replication"
      },
      "GO:1902617":{
        "genes":[
          "ATG7"
        ],
        "name":"response to fluoride"
      },
      "GO:1903204":{
        "genes":[
          "ATG7"
        ],
        "name":"negative regulation of oxidative stress-induced neuron death"
      },
      "GO:0060416":{
        "genes":[
          "ASS1",
          "AKT1"
        ],
        "name":"response to growth hormone"
      },
      "GO:0005979":{
        "genes":[
          "AKT1"
        ],
        "name":"regulation of glycogen biosynthetic process"
      },
      "GO:0006809":{
        "genes":[
          "AKT1"
        ],
        "name":"nitric oxide biosynthetic process"
      },
      "GO:0072001":{
        "genes":[
          "SMO"
        ],
        "name":"renal system development"
      },
      "GO:0061053":{
        "genes":[
          "SMO"
        ],
        "name":"somite development"
      },
      "GO:0032287":{
        "genes":[
          "AKT1"
        ],
        "name":"peripheral nervous system myelin maintenance"
      },
      "GO:0000050":{
        "genes":[
          "ASS1"
        ],
        "name":"urea cycle"
      },
      "GO:0046651":{
        "genes":[
          "FLT3"
        ],
        "name":"lymphocyte proliferation"
      },
      "GO:0006531":{
        "genes":[
          "ASS1"
        ],
        "name":"aspartate metabolic process"
      },
      "GO:0046487":{
        "genes":[
          "AGXT"
        ],
        "name":"glyoxylate metabolic process"
      },
      "GO:0035791":{
        "genes":[
          "PTPN1"
        ],
        "name":"platelet-derived growth factor receptor-beta signaling pathway"
      },
      "GO:0048143":{
        "genes":[
          "SMO"
        ],
        "name":"astrocyte activation"
      },
      "GO:0070141":{
        "genes":[
          "AKT1"
        ],
        "name":"response to UV-A"
      },
      "GO:0045861":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of proteolysis"
      },
      "GO:0000053":{
        "genes":[
          "ASS1"
        ],
        "name":"argininosuccinate metabolic process"
      },
      "GO:0006526":{
        "genes":[
          "ASS1"
        ],
        "name":"arginine biosynthetic process"
      },
      "GO:0010046":{
        "genes":[
          "ASS1"
        ],
        "name":"response to mycotoxin"
      },
      "GO:0071242":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to ammonium ion"
      },
      "GO:0071400":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to oleic acid"
      },
      "GO:0071418":{
        "genes":[
          "ASS1"
        ],
        "name":"cellular response to amine stimulus"
      },
      "GO:1903038":{
        "genes":[
          "ASS1"
        ],
        "name":"negative regulation of leukocyte cell-cell adhesion"
      },
      "GO:1903077":{
        "genes":[
          "BCL2L1"
        ],
        "name":"negative regulation of protein localization to plasma membrane"
      },
      "GO:0071316":{
        "genes":[
          "BAD"
        ],
        "name":"cellular response to nicotine"
      },
      "GO:0060338":{
        "genes":[
          "PTPN1"
        ],
        "name":"regulation of type I interferon-mediated signaling pathway"
      },
      "GO:0034393":{
        "genes":[
          "MAP2K4"
        ],
        "name":"positive regulation of smooth muscle cell apoptotic process"
      },
      "GO:0006924":{
        "genes":[
          "AKT1"
        ],
        "name":"activation-induced cell death of T cells"
      },
      "GO:0045582":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of T cell differentiation"
      },
      "GO:0097011":{
        "genes":[
          "AKT1"
        ],
        "name":"cellular response to granulocyte macrophage colony-stimulating factor stimulus"
      },
      "GO:0042326":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of phosphorylation"
      },
      "GO:0045918":{
        "genes":[
          "BAD"
        ],
        "name":"negative regulation of cytolysis"
      },
      "GO:0016139":{
        "genes":[
          "GLA"
        ],
        "name":"glycoside catabolic process"
      },
      "GO:0034405":{
        "genes":[
          "AKT1"
        ],
        "name":"response to fluid shear stress"
      },
      "GO:0055129":{
        "genes":[
          "OAT"
        ],
        "name":"L-proline biosynthetic process"
      },
      "GO:2001015":{
        "genes":[
          "CAPN3"
        ],
        "name":"negative regulation of skeletal muscle cell differentiation"
      },
      "GO:0046902":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"regulation of mitochondrial membrane permeability"
      },
      "GO:0071312":{
        "genes":[
          "BCL2L1"
        ],
        "name":"cellular response to alkaloid"
      },
      "GO:0097284":{
        "genes":[
          "BCL2L1"
        ],
        "name":"hepatocyte apoptotic process"
      },
      "GO:0045019":{
        "genes":[
          "GLA"
        ],
        "name":"negative regulation of nitric oxide biosynthetic process"
      },
      "GO:0046477":{
        "genes":[
          "GLA"
        ],
        "name":"glycosylceramide catabolic process"
      },
      "GO:0046479":{
        "genes":[
          "GLA"
        ],
        "name":"glycosphingolipid catabolic process"
      },
      "GO:0051001":{
        "genes":[
          "GLA"
        ],
        "name":"negative regulation of nitric-oxide synthase activity"
      },
      "GO:0031116":{
        "genes":[
          "CDKN1B"
        ],
        "name":"positive regulation of microtubule polymerization"
      },
      "GO:0097264":{
        "genes":[
          "CAPN3"
        ],
        "name":"self proteolysis"
      },
      "GO:0051186":{
        "genes":[
          "AKT1"
        ],
        "name":"cofactor metabolic process"
      },
      "GO:0010748":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of plasma membrane long-chain fatty acid transport"
      },
      "GO:0021696":{
        "genes":[
          "SMO"
        ],
        "name":"cerebellar cortex morphogenesis"
      },
      "GO:0021938":{
        "genes":[
          "SMO"
        ],
        "name":"smoothened signaling pathway involved in regulation of cerebellar granule cell precursor cell proliferation"
      },
      "GO:0048747":{
        "genes":[
          "SGCB"
        ],
        "name":"muscle fiber development"
      },
      "GO:0002052":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of neuroblast proliferation"
      },
      "GO:0002318":{
        "genes":[
          "FLT3"
        ],
        "name":"myeloid progenitor cell differentiation"
      },
      "GO:0071236":{
        "genes":[
          "CDKN1B"
        ],
        "name":"cellular response to antibiotic"
      },
      "GO:0030212":{
        "genes":[
          "AKT1"
        ],
        "name":"hyaluronan metabolic process"
      },
      "GO:0021904":{
        "genes":[
          "SMO"
        ],
        "name":"dorsal/ventral neural tube patterning"
      },
      "GO:0060684":{
        "genes":[
          "SMO"
        ],
        "name":"epithelial-mesenchymal cell signaling"
      },
      "GO:0071285":{
        "genes":[
          "CDKN1B"
        ],
        "name":"cellular response to lithium ion"
      },
      "GO:0010907":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of glucose metabolic process"
      },
      "GO:0033157":{
        "genes":[
          "PTPN1"
        ],
        "name":"regulation of intracellular protein transport"
      },
      "GO:1902202":{
        "genes":[
          "PTPN1"
        ],
        "name":"regulation of hepatocyte growth factor receptor signaling pathway"
      },
      "GO:1990418":{
        "genes":[
          "AKT1"
        ],
        "name":"response to insulin-like growth factor stimulus"
      },
      "GO:0044342":{
        "genes":[
          "BAD"
        ],
        "name":"type B pancreatic cell proliferation"
      },
      "GO:1990264":{
        "genes":[
          "PTPN1"
        ],
        "name":"peptidyl-tyrosine dephosphorylation involved in inactivation of protein kinase activity"
      },
      "GO:2000646":{
        "genes":[
          "PTPN1"
        ],
        "name":"positive regulation of receptor catabolic process"
      },
      "GO:0072655":{
        "genes":[
          "AKT1"
        ],
        "name":"establishment of protein localization to mitochondrion"
      },
      "GO:0072656":{
        "genes":[
          "AKT1"
        ],
        "name":"maintenance of protein location in mitochondrion"
      },
      "GO:0042866":{
        "genes":[
          "AGXT"
        ],
        "name":"pyruvate biosynthetic process"
      },
      "GO:0061061":{
        "genes":[
          "CAPN3"
        ],
        "name":"muscle structure development"
      },
      "GO:0070315":{
        "genes":[
          "CAPN3"
        ],
        "name":"G1 to G0 transition involved in cell differentiation"
      },
      "GO:0071472":{
        "genes":[
          "CAPN3"
        ],
        "name":"cellular response to salt stress"
      },
      "GO:0009436":{
        "genes":[
          "AGXT"
        ],
        "name":"glyoxylate catabolic process"
      },
      "GO:0019265":{
        "genes":[
          "AGXT"
        ],
        "name":"\"glycine biosynthetic process"
      },
      "GO:0019448":{
        "genes":[
          "AGXT"
        ],
        "name":"L-cysteine catabolic process"
      },
      "GO:0042853":{
        "genes":[
          "AGXT"
        ],
        "name":"L-alanine catabolic process"
      },
      "GO:0046724":{
        "genes":[
          "AGXT"
        ],
        "name":"oxalic acid secretion"
      },
      "GO:0021542":{
        "genes":[
          "SMO"
        ],
        "name":"dentate gyrus development"
      },
      "GO:0032079":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of endodeoxyribonuclease activity"
      },
      "GO:0031929":{
        "genes":[
          "AKT1"
        ],
        "name":"TOR signaling"
      },
      "GO:0045792":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of cell size"
      },
      "GO:0060709":{
        "genes":[
          "AKT1"
        ],
        "name":"glycogen cell differentiation involved in embryonic placenta development"
      },
      "GO:0100002":{
        "genes":[
          "AKT1"
        ],
        "name":"negative regulation of protein kinase activity by protein phosphorylation"
      },
      "GO:1903721":{
        "genes":[
          "AKT1"
        ],
        "name":"positive regulation of I-kappaB phosphorylation"
      },
      "GO:0055013":{
        "genes":[
          "SGCB"
        ],
        "name":"cardiac muscle cell development"
      },
      "GO:0034201":{
        "genes":[
          "BAD"
        ],
        "name":"response to oleic acid"
      },
      "GO:0001776":{
        "genes":[
          "FLT3"
        ],
        "name":"leukocyte homeostasis"
      },
      "GO:0002328":{
        "genes":[
          "FLT3"
        ],
        "name":"pro-B cell differentiation"
      },
      "GO:0060770":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of epithelial cell proliferation involved in prostate gland development"
      },
      "GO:1904030":{
        "genes":[
          "CDKN1B"
        ],
        "name":"negative regulation of cyclin-dependent protein kinase activity"
      },
      "GO:1902746":{
        "genes":[
          "CDKN1B"
        ],
        "name":"regulation of lens fiber cell differentiation"
      },
      "GO:2000078":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of type B pancreatic cell development"
      },
      "GO:0046931":{
        "genes":[
          "BAD"
        ],
        "name":"pore complex assembly"
      },
      "GO:0046031":{
        "genes":[
          "BAD"
        ],
        "name":"ADP metabolic process"
      },
      "GO:0019050":{
        "genes":[
          "BCL2L1",
          "BAD"
        ],
        "name":"suppression by virus of host apoptotic process"
      },
      "GO:0046898":{
        "genes":[
          "BCL2L1"
        ],
        "name":"response to cycloheximide"
      },
      "GO:0071839":{
        "genes":[
          "BCL2L1"
        ],
        "name":"apoptotic process in bone marrow"
      },
      "GO:0003140":{
        "genes":[
          "SMO"
        ],
        "name":"determination of left/right asymmetry in lateral mesoderm"
      },
      "GO:0007228":{
        "genes":[
          "SMO"
        ],
        "name":"positive regulation of hh target transcription factor activity"
      },
      "GO:1902108":{
        "genes":[
          "THEM4"
        ],
        "name":"regulation of mitochondrial membrane permeability involved in apoptotic process"
      },
      "GO:0071247":{
        "genes":[
          "BAD"
        ],
        "name":"cellular response to chromate"
      },
      "GO:0071396":{
        "genes":[
          "BAD"
        ],
        "name":"cellular response to lipid"
      },
      "GO:1902220":{
        "genes":[
          "BAD"
        ],
        "name":"positive regulation of intrinsic apoptotic signaling pathway in response to osmotic stress"
      },
      "GO:0007371":{
        "genes":[
          "SMO"
        ],
        "name":"ventral midline determination"
      },
      "GO:0021910":{
        "genes":[
          "SMO"
        ],
        "name":"smoothened signaling pathway involved in ventral spinal cord patterning"
      },
      "GO:0051799":{
        "genes":[
          "SMO"
        ],
        "name":"negative regulation of hair follicle development"
      },
      "GO:0060248":{
        "genes":[
          "SMO"
        ],
        "name":"detection of cell density by contact stimulus involved in contact inhibition"
      },
      "GO:0072285":{
        "genes":[
          "SMO"
        ],
        "name":"mesenchymal to epithelial transition involved in metanephric renal vesicle formation"
      },
      "GO:2000826":{
        "genes":[
          "SMO"
        ],
        "name":"regulation of heart morphogenesis"
      },
      "GO:0005886":{
        "genes":[
          "AKT1",
          "PTPN1",
          "SMO",
          "FLT3",
          "CAPN3",
          "THEM4"
        ],
        "name":"plasma membrane"
      },
      "GO:0005576":{
        "genes":[
          "GLA",
          "ATG7"
        ],
        "name":"extracellular region"
      },
      "GO:0005634":{
        "genes":[
          "MAP2K4",
          "AKT1",
          "ASS1",
          "CCNE1",
          "PIAS1",
          "FLT3",
          "CAPN3",
          "CDKN1B"
        ],
        "name":"nucleus"
      },
      "GO:0016021":{
        "genes":[
          "SMO",
          "BCL2L1"
        ],
        "name":"integral component of membrane"
      },
      "GO:0005737":{
        "genes":[
          "MAP2K4",
          "AKT1",
          "ASS1",
          "GLA",
          "SGCB",
          "CAPN3",
          "CDKN1B",
          "BCL2L1",
          "ATG7"
        ],
        "name":"cytoplasm"
      },
      "GO:0005783":{
        "genes":[
          "FLT3",
          "ASS1",
          "PTPN1",
          "BCL2L1"
        ],
        "name":"endoplasmic reticulum"
      },
      "GO:0005622":{
        "genes":[
          "CAPN3"
        ],
        "name":"intracellular"
      },
      "GO:0005739":{
        "genes":[
          "AKT1",
          "OAT",
          "THEM4",
          "BCL2L1",
          "BAD"
        ],
        "name":"mitochondrion"
      },
      "GO:0005829":{
        "genes":[
          "MAP2K4",
          "AKT1",
          "ASS1",
          "PTPN1",
          "CCNE1",
          "FLT3",
          "CAPN3",
          "CDKN1B",
          "ATG12",
          "THEM4",
          "BCL2L1",
          "ATG7",
          "BAD"
        ],
        "name":"cytosol"
      },
      "GO:0005813":{
        "genes":[
          "BCL2L1"
        ],
        "name":"centrosome"
      },
      "GO:0043231":{
        "genes":[
          "SMO",
          "CDKN1B",
          "AGXT"
        ],
        "name":"intracellular membrane-bounded organelle"
      },
      "GO:0005654":{
        "genes":[
          "AKT1",
          "CCNE1",
          "PIAS1",
          "CDKN1B",
          "OAT"
        ],
        "name":"nucleoplasm"
      },
      "GO:0005887":{
        "genes":[
          "FLT3",
          "SGCB"
        ],
        "name":"integral component of plasma membrane"
      },
      "GO:0005794":{
        "genes":[
          "SMO",
          "GLA"
        ],
        "name":"Golgi apparatus"
      },
      "GO:0030054":{
        "genes":[
          "BCL2L1"
        ],
        "name":"cell junction"
      },
      "GO:0005764":{
        "genes":[
          "ASS1",
          "GLA"
        ],
        "name":"lysosome"
      },
      "GO:0005929":{
        "genes":[
          "SMO"
        ],
        "name":"cilium"
      },
      "GO:0036064":{
        "genes":[
          "AKT1"
        ],
        "name":"ciliary basal body"
      },
      "GO:0097542":{
        "genes":[
          "SMO"
        ],
        "name":"ciliary tip"
      },
      "GO:0005769":{
        "genes":[
          "PTPN1"
        ],
        "name":"early endosome"
      },
      "GO:0015630":{
        "genes":[
          "AKT1"
        ],
        "name":"microtubule cytoskeleton"
      },
      "GO:0030424":{
        "genes":[
          "MAP2K4",
          "ATG7"
        ],
        "name":"axon"
      },
      "GO:0043204":{
        "genes":[
          "ASS1",
          "MAP2K4"
        ],
        "name":"perikaryon"
      },
      "GO:0070062":{
        "genes":[
          "SMO",
          "ASS1",
          "GLA"
        ],
        "name":"extracellular exosome"
      },
      "GO:0030670":{
        "genes":[
          "ATG12"
        ],
        "name":"phagocytic vesicle membrane"
      },
      "GO:0005856":{
        "genes":[
          "SGCB"
        ],
        "name":"cytoskeleton"
      },
      "GO:0042383":{
        "genes":[
          "SGCB"
        ],
        "name":"sarcolemma"
      },
      "GO:0005759":{
        "genes":[
          "BCL2L1",
          "THEM4",
          "OAT",
          "AGXT"
        ],
        "name":"mitochondrial matrix"
      },
      "GO:0030018":{
        "genes":[
          "CAPN3"
        ],
        "name":"Z disc"
      },
      "GO:0005768":{
        "genes":[
          "CDKN1B"
        ],
        "name":"endosome"
      },
      "GO:0005930":{
        "genes":[
          "ATG7"
        ],
        "name":"axoneme"
      },
      "GO:0032587":{
        "genes":[
          "THEM4"
        ],
        "name":"ruffle membrane"
      },
      "GO:0005777":{
        "genes":[
          "AGXT"
        ],
        "name":"peroxisome"
      },
      "GO:0032991":{
        "genes":[
          "FLT3",
          "CAPN3",
          "AKT1"
        ],
        "name":"macromolecular complex"
      },
      "GO:0005911":{
        "genes":[
          "AKT1"
        ],
        "name":"cell-cell junction"
      },
      "GO:0005819":{
        "genes":[
          "AKT1"
        ],
        "name":"spindle"
      },
      "GO:0031965":{
        "genes":[
          "BCL2L1"
        ],
        "name":"nuclear membrane"
      },
      "GO:0005776":{
        "genes":[
          "ATG12"
        ],
        "name":"autophagosome"
      },
      "GO:0060170":{
        "genes":[
          "SMO"
        ],
        "name":"ciliary membrane"
      },
      "GO:0000407":{
        "genes":[
          "ATG7"
        ],
        "name":"pre-autophagosomal structure"
      },
      "GO:0005782":{
        "genes":[
          "AGXT"
        ],
        "name":"peroxisomal matrix"
      },
      "GO:0005743":{
        "genes":[
          "THEM4",
          "BCL2L1"
        ],
        "name":"mitochondrial inner membrane"
      },
      "GO:0016607":{
        "genes":[
          "PIAS1"
        ],
        "name":"nuclear speck"
      },
      "GO:0005741":{
        "genes":[
          "ASS1",
          "BCL2L1",
          "BAD"
        ],
        "name":"mitochondrial outer membrane"
      },
      "GO:0005758":{
        "genes":[
          "THEM4"
        ],
        "name":"mitochondrial intermembrane space"
      },
      "GO:0005901":{
        "genes":[
          "SMO"
        ],
        "name":"caveola"
      },
      "GO:0030315":{
        "genes":[
          "CAPN3"
        ],
        "name":"T-tubule"
      },
      "GO:0034774":{
        "genes":[
          "ATG7"
        ],
        "name":"secretory granule lumen"
      },
      "GO:0005788":{
        "genes":[
          "FLT3"
        ],
        "name":"endoplasmic reticulum lumen"
      },
      "GO:0098794":{
        "genes":[
          "AKT1"
        ],
        "name":"postsynapse"
      },
      "GO:0031982":{
        "genes":[
          "AKT1"
        ],
        "name":"vesicle"
      },
      "GO:0016605":{
        "genes":[
          "PIAS1"
        ],
        "name":"PML body"
      },
      "GO:0030666":{
        "genes":[
          "SMO"
        ],
        "name":"endocytic vesicle membrane"
      },
      "GO:0030672":{
        "genes":[
          "BCL2L1"
        ],
        "name":"synaptic vesicle membrane"
      },
      "GO:0043202":{
        "genes":[
          "GLA"
        ],
        "name":"lysosomal lumen"
      },
      "GO:0035578":{
        "genes":[
          "GLA"
        ],
        "name":"azurophil granule lumen"
      },
      "GO:0043209":{
        "genes":[
          "ASS1"
        ],
        "name":"myelin sheath"
      },
      "GO:0097443":{
        "genes":[
          "PTPN1"
        ],
        "name":"sorting endosome"
      },
      "GO:0097136":{
        "genes":[
          "BCL2L1"
        ],
        "name":"Bcl-2 family protein complex"
      },
      "GO:0016010":{
        "genes":[
          "SGCB"
        ],
        "name":"dystrophin-associated glycoprotein complex"
      },
      "GO:0016012":{
        "genes":[
          "SGCB"
        ],
        "name":"sarcoglycan complex"
      },
      "GO:0030016":{
        "genes":[
          "CAPN3"
        ],
        "name":"myofibril"
      },
      "GO:0032839":{
        "genes":[
          "MAP2K4"
        ],
        "name":"dendrite cytoplasm"
      },
      "GO:0034045":{
        "genes":[
          "ATG12"
        ],
        "name":"pre-autophagosomal structure membrane"
      },
      "GO:0034274":{
        "genes":[
          "ATG12"
        ],
        "name":"Atg12-Atg5-Atg16 complex"
      },
      "GO:0070852":{
        "genes":[
          "ASS1"
        ],
        "name":"cell body fiber"
      },
      "GO:0098554":{
        "genes":[
          "PTPN1"
        ],
        "name":"cytoplasmic side of endoplasmic reticulum membrane"
      },
      "GO:0097134":{
        "genes":[
          "CCNE1"
        ],
        "name":"cyclin E1-CDK2 complex"
      },
      "GO:0031464":{
        "genes":[
          "CDKN1B"
        ],
        "name":"Cul4A-RING E3 ubiquitin ligase complex"
      }
    },
    "allIds":[
      "GO:0004871",
      "GO:0003677",
      "GO:0008270",
      "GO:0005509",
      "GO:0008234",
      "GO:0019899",
      "GO:0004930",
      "GO:0003723",
      "GO:0031625",
      "GO:0005524",
      "GO:0004714",
      "GO:0004674",
      "GO:0004672",
      "GO:0005515",
      "GO:0046982",
      "GO:0008483",
      "GO:0016787",
      "GO:0003714",
      "GO:0042803",
      "GO:0004839",
      "GO:0042802",
      "GO:0045296",
      "GO:0008289",
      "GO:0008134",
      "GO:0019901",
      "GO:0051434",
      "GO:0004725",
      "GO:0005102",
      "GO:0008307",
      "GO:0016301",
      "GO:0008233",
      "GO:0005543",
      "GO:0019904",
      "GO:0032947",
      "GO:0017147",
      "GO:0004198",
      "GO:0004860",
      "GO:0019789",
      "GO:0047617",
      "GO:0005547",
      "GO:0043325",
      "GO:0046875",
      "GO:0019903",
      "GO:0003713",
      "GO:0030170",
      "GO:0003824",
      "GO:0004712",
      "GO:0042813",
      "GO:0016290",
      "GO:0044877",
      "GO:0008144",
      "GO:0030971",
      "GO:0031402",
      "GO:0004713",
      "GO:0043621",
      "GO:0005158",
      "GO:0008656",
      "GO:0005021",
      "GO:0071889",
      "GO:0030332",
      "GO:0031432",
      "GO:0050681",
      "GO:0005113",
      "GO:0016538",
      "GO:0004693",
      "GO:0061665",
      "GO:0016597",
      "GO:0019776",
      "GO:0004861",
      "GO:0019778",
      "GO:0019779",
      "GO:0030235",
      "GO:0004055",
      "GO:0015643",
      "GO:0004587",
      "GO:0004896",
      "GO:0016936",
      "GO:0004557",
      "GO:0052692",
      "GO:0005072",
      "GO:0055103",
      "GO:0004760",
      "GO:0008453",
      "GO:0008545",
      "GO:0007186",
      "GO:0006508",
      "GO:0038095",
      "GO:0045732",
      "GO:0050790",
      "GO:0016567",
      "GO:0035556",
      "GO:0006412",
      "GO:0007169",
      "GO:0018108",
      "GO:0006954",
      "GO:0071346",
      "GO:0071356",
      "GO:0006468",
      "GO:0032147",
      "GO:0008284",
      "GO:0043066",
      "GO:0045892",
      "GO:0010951",
      "GO:0006351",
      "GO:0071230",
      "GO:0007165",
      "GO:0060079",
      "GO:0023014",
      "GO:0006470",
      "GO:0009966",
      "GO:0007224",
      "GO:0015031",
      "GO:0000122",
      "GO:0001890",
      "GO:0006977",
      "GO:0008283",
      "GO:0045944",
      "GO:0006974",
      "GO:0006687",
      "GO:0006897",
      "GO:0010507",
      "GO:0030154",
      "GO:0008285",
      "GO:0045893",
      "GO:0045444",
      "GO:0000045",
      "GO:0001934",
      "GO:0010508",
      "GO:0033138",
      "GO:0050821",
      "GO:0071222",
      "GO:0075044",
      "GO:0010628",
      "GO:0042475",
      "GO:0006979",
      "GO:0007283",
      "GO:0043065",
      "GO:0051301",
      "GO:0040018",
      "GO:0045600",
      "GO:0072657",
      "GO:0035335",
      "GO:0030030",
      "GO:0016310",
      "GO:0045214",
      "GO:0032094",
      "GO:0016055",
      "GO:0007096",
      "GO:0071850",
      "GO:0016236",
      "GO:0038061",
      "GO:0043488",
      "GO:2000036",
      "GO:0006914",
      "GO:0000422",
      "GO:0006995",
      "GO:0006270",
      "GO:0033234",
      "GO:0006915",
      "GO:0006501",
      "GO:0008584",
      "GO:0007346",
      "GO:0007050",
      "GO:0009267",
      "GO:0035264",
      "GO:0007605",
      "GO:0007601",
      "GO:0045859",
      "GO:0007517",
      "GO:0001666",
      "GO:0035726",
      "GO:0006469",
      "GO:0019221",
      "GO:0034641",
      "GO:0021987",
      "GO:0006417",
      "GO:0001701",
      "GO:0016925",
      "GO:0071456",
      "GO:0042307",
      "GO:0007219",
      "GO:0007129",
      "GO:0001947",
      "GO:0045907",
      "GO:0044804",
      "GO:0043312",
      "GO:0042593",
      "GO:0045725",
      "GO:0071260",
      "GO:0071277",
      "GO:0097193",
      "GO:0010243",
      "GO:0034614",
      "GO:0008286",
      "GO:0000723",
      "GO:0048741",
      "GO:0006464",
      "GO:0030100",
      "GO:0051607",
      "GO:0030334",
      "GO:0018105",
      "GO:0042127",
      "GO:0042981",
      "GO:0001836",
      "GO:0030183",
      "GO:0035567",
      "GO:0043524",
      "GO:0060070",
      "GO:0006637",
      "GO:0061025",
      "GO:0014068",
      "GO:0071345",
      "GO:0097192",
      "GO:2001240",
      "GO:0006813",
      "GO:0001938",
      "GO:0010629",
      "GO:0051092",
      "GO:0090200",
      "GO:0007249",
      "GO:0031663",
      "GO:0045429",
      "GO:0051770",
      "GO:0070373",
      "GO:0030308",
      "GO:0006919",
      "GO:0008625",
      "GO:0043154",
      "GO:0097191",
      "GO:1902042",
      "GO:0032024",
      "GO:0007623",
      "GO:0009611",
      "GO:0030168",
      "GO:0045736",
      "GO:0045786",
      "GO:0046329",
      "GO:0001541",
      "GO:1901796",
      "GO:1900118",
      "GO:0045742",
      "GO:0061024",
      "GO:0051726",
      "GO:0051881",
      "GO:0007584",
      "GO:0042493",
      "GO:0000082",
      "GO:0000060",
      "GO:0014065",
      "GO:0031069",
      "GO:0016242",
      "GO:0050999",
      "GO:0065003",
      "GO:0071320",
      "GO:0032869",
      "GO:0046777",
      "GO:0070584",
      "GO:0097194",
      "GO:2001244",
      "GO:0007173",
      "GO:0051091",
      "GO:0061113",
      "GO:0045471",
      "GO:0042542",
      "GO:0003323",
      "GO:0021510",
      "GO:0030097",
      "GO:0030857",
      "GO:0048839",
      "GO:0070986",
      "GO:0030307",
      "GO:0043280",
      "GO:2001243",
      "GO:0031295",
      "GO:0043552",
      "GO:0001649",
      "GO:0060413",
      "GO:0060716",
      "GO:0043491",
      "GO:0032270",
      "GO:0032355",
      "GO:0031999",
      "GO:0032570",
      "GO:0030521",
      "GO:0007259",
      "GO:0046627",
      "GO:0031397",
      "GO:0035774",
      "GO:0042531",
      "GO:0060334",
      "GO:0034097",
      "GO:0051402",
      "GO:0036498",
      "GO:0051281",
      "GO:0032091",
      "GO:0032436",
      "GO:0034504",
      "GO:1903827",
      "GO:0061098",
      "GO:0051592",
      "GO:0032148",
      "GO:0035924",
      "GO:0051451",
      "GO:0007568",
      "GO:0007254",
      "GO:0007257",
      "GO:0009408",
      "GO:0035897",
      "GO:0045930",
      "GO:0051898",
      "GO:0046326",
      "GO:0046686",
      "GO:0051000",
      "GO:0001822",
      "GO:0018107",
      "GO:0045787",
      "GO:0008542",
      "GO:0030163",
      "GO:0031532",
      "GO:0043406",
      "GO:0014850",
      "GO:0033574",
      "GO:0033673",
      "GO:0046716",
      "GO:0071549",
      "GO:0010043",
      "GO:0000083",
      "GO:0060644",
      "GO:0007093",
      "GO:0045880",
      "GO:0009968",
      "GO:0043434",
      "GO:0045740",
      "GO:0048661",
      "GO:0021794",
      "GO:0030948",
      "GO:0032465",
      "GO:0008637",
      "GO:0005978",
      "GO:0006631",
      "GO:0043200",
      "GO:0051146",
      "GO:0071276",
      "GO:0007281",
      "GO:0009749",
      "GO:0031100",
      "GO:1990090",
      "GO:0006953",
      "GO:0001570",
      "GO:0071407",
      "GO:1901216",
      "GO:0001755",
      "GO:0051591",
      "GO:1903078",
      "GO:0072709",
      "GO:0045862",
      "GO:0008630",
      "GO:1900740",
      "GO:0043410",
      "GO:0006006",
      "GO:0065004",
      "GO:0002053",
      "GO:0040007",
      "GO:0071364",
      "GO:0031659",
      "GO:0050679",
      "GO:0001889",
      "GO:0043122",
      "GO:0043536",
      "GO:0009311",
      "GO:0009952",
      "GO:0010942",
      "GO:0071377",
      "GO:0071380",
      "GO:0031018",
      "GO:0043276",
      "GO:0097202",
      "GO:0010975",
      "GO:0001708",
      "GO:0030968",
      "GO:1901215",
      "GO:1902176",
      "GO:0071499",
      "GO:0001844",
      "GO:0043525",
      "GO:0060139",
      "GO:0060154",
      "GO:0071385",
      "GO:1903896",
      "GO:0043407",
      "GO:1902230",
      "GO:1903898",
      "GO:0060539",
      "GO:0051271",
      "GO:0090201",
      "GO:0008643",
      "GO:0010765",
      "GO:1902236",
      "GO:0014718",
      "GO:0043392",
      "GO:0071480",
      "GO:0031401",
      "GO:0038084",
      "GO:0046889",
      "GO:0000079",
      "GO:0045737",
      "GO:0090190",
      "GO:0030239",
      "GO:0045661",
      "GO:0060397",
      "GO:0006007",
      "GO:0033133",
      "GO:0097084",
      "GO:0048102",
      "GO:0051384",
      "GO:0010918",
      "GO:0046034",
      "GO:0048853",
      "GO:0071901",
      "GO:0031641",
      "GO:2000672",
      "GO:0006497",
      "GO:0021953",
      "GO:0048009",
      "GO:0006987",
      "GO:0007494",
      "GO:0071397",
      "GO:0001893",
      "GO:0045579",
      "GO:0010763",
      "GO:0031098",
      "GO:0033235",
      "GO:0051152",
      "GO:0009566",
      "GO:0046622",
      "GO:0048873",
      "GO:0097028",
      "GO:0000052",
      "GO:0061049",
      "GO:2000010",
      "GO:0008652",
      "GO:0034214",
      "GO:1900182",
      "GO:0035655",
      "GO:0034727",
      "GO:0039521",
      "GO:0044805",
      "GO:0071315",
      "GO:0071455",
      "GO:0090298",
      "GO:1902617",
      "GO:1903204",
      "GO:0060416",
      "GO:0005979",
      "GO:0006809",
      "GO:0072001",
      "GO:0061053",
      "GO:0032287",
      "GO:0000050",
      "GO:0046651",
      "GO:0006531",
      "GO:0046487",
      "GO:0035791",
      "GO:0048143",
      "GO:0070141",
      "GO:0045861",
      "GO:0000053",
      "GO:0006526",
      "GO:0010046",
      "GO:0071242",
      "GO:0071400",
      "GO:0071418",
      "GO:1903038",
      "GO:1903077",
      "GO:0071316",
      "GO:0060338",
      "GO:0034393",
      "GO:0006924",
      "GO:0045582",
      "GO:0097011",
      "GO:0042326",
      "GO:0045918",
      "GO:0016139",
      "GO:0034405",
      "GO:0055129",
      "GO:2001015",
      "GO:0046902",
      "GO:0071312",
      "GO:0097284",
      "GO:0045019",
      "GO:0046477",
      "GO:0046479",
      "GO:0051001",
      "GO:0031116",
      "GO:0097264",
      "GO:0051186",
      "GO:0010748",
      "GO:0021696",
      "GO:0021938",
      "GO:0048747",
      "GO:0002052",
      "GO:0002318",
      "GO:0071236",
      "GO:0030212",
      "GO:0021904",
      "GO:0060684",
      "GO:0071285",
      "GO:0010907",
      "GO:0033157",
      "GO:1902202",
      "GO:1990418",
      "GO:0044342",
      "GO:1990264",
      "GO:2000646",
      "GO:0072655",
      "GO:0072656",
      "GO:0042866",
      "GO:0061061",
      "GO:0070315",
      "GO:0071472",
      "GO:0009436",
      "GO:0019265",
      "GO:0019448",
      "GO:0042853",
      "GO:0046724",
      "GO:0021542",
      "GO:0032079",
      "GO:0031929",
      "GO:0045792",
      "GO:0060709",
      "GO:0100002",
      "GO:1903721",
      "GO:0055013",
      "GO:0034201",
      "GO:0001776",
      "GO:0002328",
      "GO:0060770",
      "GO:1904030",
      "GO:1902746",
      "GO:2000078",
      "GO:0046931",
      "GO:0046031",
      "GO:0019050",
      "GO:0046898",
      "GO:0071839",
      "GO:0003140",
      "GO:0007228",
      "GO:1902108",
      "GO:0071247",
      "GO:0071396",
      "GO:1902220",
      "GO:0007371",
      "GO:0021910",
      "GO:0051799",
      "GO:0060248",
      "GO:0072285",
      "GO:2000826",
      "GO:0005886",
      "GO:0005576",
      "GO:0005634",
      "GO:0016021",
      "GO:0005737",
      "GO:0005783",
      "GO:0005622",
      "GO:0005739",
      "GO:0005829",
      "GO:0005813",
      "GO:0043231",
      "GO:0005654",
      "GO:0005887",
      "GO:0005794",
      "GO:0030054",
      "GO:0005764",
      "GO:0005929",
      "GO:0036064",
      "GO:0097542",
      "GO:0005769",
      "GO:0015630",
      "GO:0030424",
      "GO:0043204",
      "GO:0070062",
      "GO:0030670",
      "GO:0005856",
      "GO:0042383",
      "GO:0005759",
      "GO:0030018",
      "GO:0005768",
      "GO:0005930",
      "GO:0032587",
      "GO:0005777",
      "GO:0032991",
      "GO:0005911",
      "GO:0005819",
      "GO:0031965",
      "GO:0005776",
      "GO:0060170",
      "GO:0000407",
      "GO:0005782",
      "GO:0005743",
      "GO:0016607",
      "GO:0005741",
      "GO:0005758",
      "GO:0005901",
      "GO:0030315",
      "GO:0034774",
      "GO:0005788",
      "GO:0098794",
      "GO:0031982",
      "GO:0016605",
      "GO:0030666",
      "GO:0030672",
      "GO:0043202",
      "GO:0035578",
      "GO:0043209",
      "GO:0097443",
      "GO:0097136",
      "GO:0016010",
      "GO:0016012",
      "GO:0030016",
      "GO:0032839",
      "GO:0034045",
      "GO:0034274",
      "GO:0070852",
      "GO:0098554",
      "GO:0097134",
      "GO:0031464"
    ]
  }
}
```