import React from 'react';
import config from '../config';
import PostService from '../services/PostService';
import Posts from '../components/Posts';

const postService = new PostService(config.jsonPlaceholder);

export default class SimpleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    };
  }

  componentDidMount() {
    postService.getData().then(postData => this.setState({postData}));
  }

  render() {
    return <Posts postData={this.state.postData}></Posts>;
  }
}
