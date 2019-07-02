import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// intial state for books

const booksInitialState = {
  loading: false,
  booksData: []
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default:
      return state
  }
}

// reducer for books
export const booksReducer = (state = booksInitialState, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS': 
      return {
        ...state,
        booksData: [...action.payload]
      }
    case 'START_FETCHING_BOOKS': 
      return {
        ...state,
        loading: true
      }
    case 'FINISH_FETCHING_BOOKS':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

// FETCH BOOK DATA FROM API ACTION
export const fetchBooksData = () => async dispatch => {
  dispatch(startFetchingBooks())

  let res = await fetch('https://www.googleapis.com/books/v1/volumes?q=python')
  let data = await res.json()

  dispatch(finishFetchingBooks())
  
  return dispatch({ type: 'FETCH_BOOKS', payload: data.items })
}

export const startFetchingBooks = () => {
  return { type: 'START_FETCHING_BOOKS' }
}

export const finishFetchingBooks = () => {
  return { type: 'FINISH_FETCHING_BOOKS' }
}
// ----------------------------------------------------------------

// export function initializeStore (initialState = exampleInitialState) {
//   return createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }

export function initializeStore (initialState = booksInitialState) {
  return createStore(
    booksReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}