import React from 'react';

export default class Musics extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src='./image/Music-Transparent-Background.png' className="image"/>
          <div className="container">
            <h1>New Wave Kit</h1>
            <p className="title">First Song</p>
            <audio controls src="https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg"></audio>
          </div>
        </div>
        <div className="card">
          <img src='./image/Music-Transparent-Background.png' className="image"/>
          <div className="container">
            <h1>Synth Organ</h1>
            <p className="title">Second Song</p>
            <audio controls src="https://static.bandlab.com/soundbanks/previews/synth-organ.ogg"></audio>
          </div>
        </div>
      </div>
    );
  }
}
