export function categoriesReducer(categories = {}, action) {
  switch(action.type) {
    case 'FETCH_CATEGORIES':
      return { ...categories, categories: action.payload}
    default:
      return { ...categories }
  }
}
export function allPostsReducer(allPosts = {}, action) {
  switch(action.type) {
    case 'FETCH_ALL_POSTS':
      return { ...allPosts, allPosts: action.payload}
    default:
      return { ...allPosts }
  }
}