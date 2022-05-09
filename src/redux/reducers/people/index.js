import {LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE} from "./actions";

const initialPeopleState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: null,
}


export default function peopleReducer(state = initialPeopleState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      const {page, search} = action.payload

      return {
        ...state,
        loading: true,
        page,
        search
      }
    }

    case LOAD_USERS_SUCCESS: {
      return {...state, data: action.payload, loading: false}
    }

    case LOAD_USERS_FAILURE: {
      return {...state, error: action.payload, loading: false}
    }

    default:
      return state
  }
}