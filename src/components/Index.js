'use strict';

import React from 'react';
import radium from 'radium';
import ReactPlayer from 'react-player';
import Wrapper from 'cat-components/lib/wrapper';
import VideoSubtitle from 'cat-components/lib/video-subtitle';

import Normalize from 'componentsShare/Normalize';
import subtitle from 'data/subtitle';

import * as style from './style/index';

@radium
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      played: 0
    };
  }

  render() {
    const {duration, played} = this.state;

    return (
      <div>
        <Normalize />

        <ReactPlayer url='https://www.youtube.com/watch?v=NjTT5_RSkw4'
          onDuration={duration => this.setState({duration})}
          onProgress={({played}) => this.setState({played})}
        />

        <VideoSubtitle now={{second: duration * played}}
          subtitle={subtitle.map(({content, ...time}) => ({
            ...time,
            content: now => (
              <div style={now ? style.now : {}}>
                {content}
              </div>
            )
          }))}
        />
      </div>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}>
    <Index {...props} />
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
