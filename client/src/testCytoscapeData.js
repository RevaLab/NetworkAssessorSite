// input_genes = ['A', 'B', 'C']

export default {
  1: {
      "edges": [
        {
          "data": {
            "source": 1,
            "target": 2
          }
        },
        {
          "data": {
            "source": 1,
            "target": 3
          }
        },
        {
          "data": {
            "source": 2,
            "target": 3
          }
        },
        {
          "data": {
            "source": 3,
            "target": 4
          }
        }
      ],
      "nodes": [
        {
          "data": {
            "id": 1,
            "pathways": [],
            "symbol": "A"
          }
        },
        {
          "data": {
            "id": 2,
            "pathways": [],
            "symbol": "B"
          }
        },
        {
          "data": {
            "id": 3,
            "pathways": [],
            "symbol": "C"
          }
        },
        {
          "data": {
            "id": 4,
            "pathways": [
              1, 2
            ],
            "symbol": "D"
          }
        }
      ]
  },
  2: {
    "edges": [
      {
        "data": {
          "source": 1,
          "target": 2
        }
      },
      {
        "data": {
          "source": 1,
          "target": 3
        }
      },
      {
        "data": {
          "source": 2,
          "target": 3
        }
      },
      {
        "data": {
          "source": 3,
          "target": 4
        }
      },
      {
        "data": {
          "source": 4,
          "target": 5
        }
      }
    ],
    "nodes": [
      {
        "data": {
          "id": 1,
          "pathways": [],
          "symbol": "A"
        }
      },
      {
        "data": {
          "id": 2,
          "pathways": [],
          "symbol": "B"
        }
      },
      {
        "data": {
          "id": 3,
          "pathways": [],
          "symbol": "C"
        }
      },
      {
        "data": {
          "id": 4,
          "pathways": [
            1, 2
          ],
          "symbol": "D"
        }
      },
      {
        "data": {
          "id": 5,
          "pathways": [
            1
          ],
          "symbol": "E"
        }
      }
    ]
  }
};
