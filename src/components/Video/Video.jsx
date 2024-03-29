import React from 'react';
import YouTube from 'react-youtube';
import './style.css'

class Example extends React.Component {
  render() {
     
    const opts = {
      
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} className='video'   />;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
export default Example