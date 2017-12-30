// State argument is not application state, only the state this reducer is responsible for
// Defaut state is null(ES6)
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      //DONT MUTATE STATE, STATE ALWAYS FRESH
      return action.payload;
  }

  return state;
}