const SIMPLE_ACTION = 'SIMPLE_ACTION';

export default (state = {}, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        result: action.payload
      }
    default:
      return state
  }
}