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
        <div key={post.id.toString()} className="comment-card">
          <img src='./image/profile.png' className="comment-image"/>
          <div className="container">
            <h1>User {post.userId}</h1>
            <p className="title">{post.title}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <form>
          <input type="text" name="search" placeholder="Search.."/>
        </form>
        <button className="w3-button w3-white w3-border w3-border-red w3-round-large top-left-position">Sort</button>
        <div className="comment-flex">
          {contents}
        </div>
      </div>
    );
  }
}
