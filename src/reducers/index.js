export default function movies (state =[],action){ //state is the current state of our object
  if(action.type == 'ADD_MOVIES'){
    return action.movies;
  }
  return state;
}