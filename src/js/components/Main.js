import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="musics">Musics</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
        <div className="full-length-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
