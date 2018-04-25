//evaluate any actions that are committed like fetching a post and creating a new post.

//for an action we create types, which are constants.
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [], //represent the posts that come in from our action (our action is where we will put fetch request)
  item: {} //represents the single post that we add and the response back will go in here
}

export default function(state = initialState, action) { //action(an object) includes a type and thats what we are evalutating (we do this by using a JS switch)
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
      case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default: //which type is being passed for the case of fetch posts
      return state;
  }
  //evaluates the type we are dealing with
}
