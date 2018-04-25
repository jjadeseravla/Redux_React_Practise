import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //the provider we brought in from react redux library as well as connect, it connects components from redux store that was provided by the provideer component
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // } commented out cos dont need components state anymore cos post is going to come from redux (application state)

  componentWillMount(){
    this.props.fetchPosts(); //calls fatch action
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   //fetch returns a promise with a result that needs to map to json
    //   .then(data => this.setState({ posts: data }));
    // //here is where you make a fetch request, you also could use axios
  }

  render() {
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts); //map our state to our properties. fetchPosts is a function.  Posts is the components.  fetchPosts will just call fetch
