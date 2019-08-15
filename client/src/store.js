import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mockState = {
  queryUIReducer: {
    queryList: [
      "gene_1",
      "gene_2",
      "gene_5",
    ],
    filteredQueryList: [
      "gene_2",
    ],
    selectedGoIds: [
      "go_id_1",
    ],
    ontologies: {
      byId: {
        ontology1: [
          "go_id_1",
          "go_id_2",
        ],
      }
    },
    goTerms: {
      byId: {
        go_id_1: {
          name: "cytosol",
          genes: [
            "gene2",
          ],
        }
      },
      allIds: ['go_id_1'],
    },
  },
};


export default function configureStore(initialState = {}) {
 return createStore(
  rootReducer,
  {
    ...initialState,
    queryUIReducer: mockState.queryUIReducer,
  },
  composeEnhancers(
    applyMiddleware(thunk),
  )
 );
}