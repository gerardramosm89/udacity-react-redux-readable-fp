export function exampleReducer(state = {}, action) {
  switch(action.type) {
    case 'EXAMPLE_ACTION':
      return { ...state, state: action.payload.example}
  }
}