const pathwayData = {
  queryList: {
    validGenes: [
      "FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1",
      "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4",
      "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1",
    ],
    invalidGenes: [

    ],
  },
  pathwayDatabases: {
    byId: {
      1: {
        name: 'KEGG',
      },
      2: {
        name: 'My Cancer Genome',
      },
      3: {
        name: 'Reactome',
      }
    },
    allIds: [2, 1, 3],
  },
  ppiDatabases: {
    byId: {
      1: {
        name: 'STRING',
      },
      2: {
        name: 'BioGrid',
      },
    },
    allIds: [1, 2],
  },
};

const ppiDatabaseBioGrid = {
  ppiDatabases: {
    byId: {
      2: {
        edgesLengths: {
          547: 3,
          838: 4,
          1097: 6,
          1210: 2,
          1911: 0,
          2725: 17,
          2942: 3,
          3116: 5,
          3240: 43,
          3369: 30,
          3379: 12,
          3662: 1,
          4903: 10,
          5290: 13,
          6131: 10,
          6145: 1,
          6194: 5,
          6380: 17,
          6492: 5,
          7388: 2,
          7504: 2,
          8186: 1,
          8655: 5,
          8848: 4,
          9143: 0,
          9268: 8,
          9820: 7,
          9875: 5,
          9931: 21,
          9932: 1
        },
      }
    }
  }
}

const pathwayDatabaseKEGG = {
  pathways: {
    byId: {
      "547": {
        "name": "Apoptosis path",
        "color": "#f85435",
        "membersLength": 11,
        "overlapLength": 9,
        "pVal": 0.0006363054587206767
      },
      "838": {
        "name": "TGF-B Signaling path",
        "color": "#cfedde",
        "membersLength": 4,
        "overlapLength": 6,
        "pVal": 0.00145758036001902
      },
      "1097": {
        "name": "DNA Damage path",
        "color": "#4e188c",
        "membersLength": 11,
        "overlapLength": 1,
        "pVal": 0.00015145873325311322
      },
      "1210": {
        "name": "Cellular Architecture and Microenvironment path",
        "color": "#629b5f",
        "membersLength": 6,
        "overlapLength": 2,
        "pVal": 0.00147910835279699
      },
      "1911": {
        "name": "Janus Kinase JAK-or-Signal Transducers and Activators of Transcription STAT path",
        "color": "#972086",
        "membersLength": 9,
        "overlapLength": 2,
        "pVal": 0.00181001789273953
      },
      "2725": {
        "name": "PI3K-AKT1-MTOR Signaling path",
        "color": "#c46bed",
        "membersLength": 20,
        "overlapLength": 2,
        "pVal": 0.000374773849753141
      },
      "2942": {
        "name": "Chromatin Remodeling-DNA Methylation path",
        "color": "#e61452",
        "membersLength": 5,
        "overlapLength": 4,
        "pVal": 0.00002392763949444232
      },
      "3116": {
        "name": "Hedgehog Signaling path",
        "color": "#1aa7ba",
        "membersLength": 0,
        "overlapLength": 3,
        "pVal": 0.00047829128970683366
      },
      "3240": {
        "name": "Cell Cycle ext path",
        "color": "#be19f3",
        "membersLength": 45,
        "overlapLength": 4,
        "pVal": 0.001487112880164228
      },
      "3369": {
        "name": "Cell Cycle Control path",
        "color": "#fca535",
        "membersLength": 31,
        "overlapLength": 9,
        "pVal": 0.0007529947487762665
      },
    }
  },
  pathwayDatabases: {
    byId: {
      1: {
        name: 'KEGG',
        pathways: ["547", "838", "1097", "1210", "1911", "2725", "2942", "3116", "3240", "3369"],
      }
    }
  }
}

const pathwayDatabaseReactome = {
  pathways: {
    byId: {
      "7504": {
        "name": "Metabolic Signaling path",
        "color": "#3a6670",
        "membersLength": 6,
        "overlapLength": 5,
        "pVal": 0.0007371020317998451
      },
      "8186": {
        "name": "Immune Checkpoints path",
        "color": "#b44e61",
        "membersLength": 1,
        "overlapLength": 3,
        "pVal": 0.0017095708242806454
      },
      "8655": {
        "name": "B-Catenin-WNT Signaling path",
        "color": "#a2f46f",
        "membersLength": 9,
        "overlapLength": 0,
        "pVal": 0.0007673122647588677
      },
      "8848": {
        "name": "HIPPO ext path",
        "color": "#9ffd6d",
        "membersLength": 3,
        "overlapLength": 2,
        "pVal": 0.0008083142932262799
      },
      "9143": {
        "name": "RNA Splicing path",
        "color": "#10aa6a",
        "membersLength": 2,
        "overlapLength": 4,
        "pVal": 0.0012626687631663671
      },
      "9268": {
        "name": "TGFB ext path",
        "color": "#5c7847",
        "membersLength": 6,
        "overlapLength": 1,
        "pVal": 0.0004052376646696736
      },
      "9820": {
        "name": "NFKB ext path",
        "color": "#e2648c",
        "membersLength": 7,
        "overlapLength": 3,
        "pVal": 0.000917922235325964
      },
      "9875": {
        "name": "Notch ext path",
        "color": "#476035",
        "membersLength": 3,
        "overlapLength": 0,
        "pVal": 0.000620379457046759
      },
      "9931": {
        "name": "Apoptosis ext path",
        "color": "#bb7e85",
        "membersLength": 25,
        "overlapLength": 3,
        "pVal": 0.0018552338699180581
      },
      "9932": {
        "name": "ERK ext path",
        "color": "#90d8ea",
        "membersLength": 10,
        "overlapLength": 9,
        "pVal": 0.001980012744088671
      }
    }
  },
  pathwayDatabases: {
    byId: {
      3: {
        name: 'Reactome',
        pathways: ["7504", "8186", "8655", "8848", "9143", "9268", "9820", "9875", "9931", "9932"],
      }
    }
  }
}

const pathwayDatabaseMyCancerGenome = {
  "pathways": {
    "byId": {
      "3379": {
        "name": "WNT ext path",
        "color": "#fe5d18",
        "membersLength": 12,
        "overlapLength": 5,
        "pVal": 0.0003250272196074229
      },
      "3662": {
        "name": "CALC PKC ext path",
        "color": "#923b3e",
        "membersLength": 5,
        "overlapLength": 8,
        "pVal": 0.0013787906109511874
      },
      "4903": {
        "name": "Jack Stat ext path",
        "color": "#82fd0f",
        "membersLength": 14,
        "overlapLength": 3,
        "pVal": 0.0006057200026052585
      },
      "5290": {
        "name": "Mitogen Activated Protein-MAP Kinase Signaling path",
        "color": "#4c7fb8",
        "membersLength": 17,
        "overlapLength": 5,
        "pVal": 0.0008449145721473537
      },
      "6131": {
        "name": "Receptor Tyrosine KinaseORGrowth Factor Signaling path",
        "color": "#521f74",
        "membersLength": 14,
        "overlapLength": 7,
        "pVal": 0.000026876482060089303
      },
      "6145": {
        "name": "Protein Degradation Ubiquitination path",
        "color": "#ec8600",
        "membersLength": 7,
        "overlapLength": 3,
        "pVal": 0.0009249305959767607
      },
      "6194": {
        "name": "Kinase Fusions path",
        "color": "#2b2e2c",
        "membersLength": 9,
        "overlapLength": 1,
        "pVal": 0.000954274430117962
      },
      "6380": {
        "name": "AKT ext path",
        "color": "#9561e2",
        "membersLength": 26,
        "overlapLength": 9,
        "pVal": 0.00185390326478682
      },
      "6492": {
        "name": "G-Protein Signaling path",
        "color": "#273b25",
        "membersLength": 1,
        "overlapLength": 6,
        "pVal": 0.000795553195050128
      },
      "7388": {
        "name": "Hormone Signaling path",
        "color": "#9dfc27",
        "membersLength": 5,
        "overlapLength": 3,
        "pVal": 0.0004654716728720567
      },
    },
  },
  pathwayDatabases: {
    byId: {
      2: {
        name: "My Cancer Genome",
        pathways: ["3379", "3662", "4903", "5290", "6131", "6145", "6194", "6380", "6492", "7388"],
      },
    }
  }
}

const ppiDatabasesSTRING = {
  ppiDatabases: {
    byId: {
      1: {
        name: 'STRING',
        edgesLengths: {
          547: 5,
          838: 1,
          1097: 9,
          1210: 0,
          1911: 3,
          2725: 15,
          2942: 1,
          3116: 5,
          3240: 43,
          3369: 27,
          3379: 11,
          3662: 0,
          4903: 8,
          5290: 10,
          6131: 12,
          6145: 3,
          6194: 5,
          6380: 19,
          6492: 2,
          7388: 4,
          7504: 1,
          8186: 1,
          8655: 8,
          8848: 0,
          9143: 2,
          9268: 6,
          9820: 7,
          9875: 3,
          9931: 25,
          9932: 3
        }
      }
    }
  }
}

const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
const pathwayDataPromise = () => delay(100, pathwayData);
const ppiDatabasesPromise = (id) => delay(2000, {
  1: ppiDatabasesSTRING,
  2: ppiDatabaseBioGrid,
}[id]);
const pathwayDatabasePathwaysPromise = (id) => delay(2000, {
  1: pathwayDatabaseKEGG,
  2: pathwayDatabaseMyCancerGenome,
  3: pathwayDatabaseReactome,
}[id]);

export {
  pathwayDataPromise as pathways,
  ppiDatabasesPromise as ppiDatabases,
  pathwayDatabasePathwaysPromise as pathwayDatabasePathways
}