import { FETCH_POSTS, NEW_POST } from './types';
//thunk allows you to call dispatch function directly to make asynchronous requests

export const fetchPosts = () => dispatch => {
  // return function(dispatch) { //whenever we want to send the data we call dispatch(like a promise when you call resolve and pass in whatever you want)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }));
  // }
}

export const createPost = (postData) => dispatch => { //postData cos submitting a post
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => dispatch({
    type: NEW_POST,
    payload: post
  }));
}
