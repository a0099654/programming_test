import React from 'react';
import {Link} from 'react-router';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let posts = this.props.postData;
    if (!posts || posts.length === 0) {
      return <div>Loading posts ...</div>;
    }

    let arrPosts = Array.from(posts);

    let contents = arrPosts.map(post => {
      return (
        <div key={post.id.toString()}>
          <div className="card">
            <div>{post.userId}</div>
            <div>{post.title}</div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {contents}
      </div>
    );
  }
}
