const initialState = {
  blog: {}
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case "BLOG_LOADED":
      return {
        ...state,
        blog: action.payload
      }
    default:
      return state
  }
}

