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
export function postsByCategoryReducer(postsByCategory = {}, action) {
  switch(action.type) {
    case 'FETCH_POSTS_BY_CATEGORY':
      return { ...postsByCategory, postsByCategory: action.payload }
    default:
      return { ...postsByCategory }
  }
}