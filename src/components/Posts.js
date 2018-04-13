import React, { Component } from 'react'

class Posts extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // } commented out cos dont need components state anymore cos post is going to come from redux (application state)

  //componentWillMount(){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   //fetch returns a promise with a result that needs to map to json
    //   .then(data => this.setState({ posts: data }));
    // //here is where you make a fetch request, you also could use axios
  //}

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

export default Posts;
