export default function (categories = {}, action) {
  switch(action.type) {
    case 'FETCH_CATEGORIES':
      return { ...categories, categories: action.payload}
    default:
      return { ...categories }
  }
}