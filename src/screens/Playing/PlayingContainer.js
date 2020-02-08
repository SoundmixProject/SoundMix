/**
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { type Props } from './types';
import PlayingView from './PlayingView';
import Sound from 'react-native-sound';
import axios from 'axios';

const PlayingContainer = (props: Props) => {
  const [state, setState] = useState<Object>({
    trackDetail: {},
    isPlaying: false,
    duration: 0,
    currentTime: 0,
    isLoaded: false,
  });

  const _getTrackDetail = async () => {
    try {
      const trackDetail = await axios.get('http://192.168.1.4:8888/');
      setState(oldState => ({
        ...oldState,
        trackDetail: trackDetail.data,
      }));
    } catch (e) {
      console.log(e.message);
    }
  };

  const _onPlay = () => {
    console.log('onPlay');
    const sound = new Sound(
      state.trackDetail?.url || '',
      Sound.MAIN_BUNDLE,
      error => {
        !!error && ToastAndroid.show(error.message, ToastAndroid.SHORT);
        if (!state.sound) {
          sound.play();
          setState(oldState => ({ ...oldState, isPlaying: true, sound }));
        } else {
          sound.play();
          setState(oldState => ({ ...oldState, isPlaying: true, sound }));
        }
      },
    );
  };

  const _onPause = () => {
    state.sound.pause();
    setState(oldState => ({
      ...oldState,
      isPlaying: false,
      sound: oldState.sound,
    }));
  };

  useEffect(() => {
    _getTrackDetail();
  }, []);

  return (
    <PlayingView
      {...props}
      onPlay={_onPlay}
      onPause={_onPause}
      trackDetail={state.trackDetail}
      isPlaying={state.isPlaying}
    />
  );
};

export default PlayingContainer;
