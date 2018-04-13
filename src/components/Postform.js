import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',  //blank by default
      body: ''
    };
    //each input value (title and body) will be part of our component's state

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //need to set the state.  we need the name of the input, instead of creating separate
    //onChange functions for each one, we just grab the name by e.target and set that the value of the form, eg, the input
    //allow you to now type inside form on view
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea name="body" onChange={this.onChange} value={this.state.body} />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm;
