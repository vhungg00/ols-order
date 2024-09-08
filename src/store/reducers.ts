import todosReducer from 'app/pages/TodosPage/slice'

/**
 * Create reducer for app
 * @returns {object} The object root reducer.
 */
export function createReducer() {
  return {
    todosReducer,
  }
}
