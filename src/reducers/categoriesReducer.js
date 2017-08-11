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
export function singlePostReducer(singlePost = {singlePost: {}, comments: {} }, action) {
  switch (action.type) {
    case 'FETCH_SINGLE_POST':
      return { ...singlePost, singlePost: action.payload.post.data }
    case 'FETCH_COMMENTS':
      return { ...singlePost, comments: action.payload}
    default:
      return { ...singlePost }
  }
}
export function currentPostCommentsReducer(currentComments = {}, action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return { ...currentComments, currentComments: action.payload }
    default:
      return { ...currentComments }
  }
}