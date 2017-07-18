import React from 'react';

export default class Musics extends React.Component {
  render() {
    return (
      <div>
        <div>
          Title: New Wave Kit
          <audio controls src="https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg"></audio>
        </div>
        <div>
          Title: Synth-organ
          <audio controls src="https://static.bandlab.com/soundbanks/previews/synth-organ.ogg"></audio>
        </div>
      </div>
    )
  }
}
