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
  const [trackDetail, setTrackDetail] = useState<Object>({});
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<Object>({});
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const _getTrackDetail = async () => {
    try {
      const trackDetailData = await axios.get('http://192.168.1.4:8888/');
      setTrackDetail(trackDetailData.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const _onPlay = () => {
    const sound = new Sound(
      trackDetail?.url || '',
      Sound.MAIN_BUNDLE,
      error => {
        !!error && ToastAndroid.show(error.message, ToastAndroid.SHORT);
        if (!sound) {
          sound.play();
          setPlaying(true);
          setSound(sound);
          setDuration(sound.getDuration());
          sound.getCurrentTime(seconds => seconds);
        } else {
          sound.play();
          setLoaded(sound.isLoaded());
          setPlaying(true);
          setSound(sound);
          sound.getCurrentTime(seconds => seconds);
        }
      },
    );
  };

  const _onPause = () => {
    sound.pause();
    setPlaying(false);
    setSound(sound);
    setDuration(sound.getDuration());
    sound.getCurrentTime(seconds => console.log(seconds));
  };

  useEffect(() => {
    _getTrackDetail();
  }, []);

  return (
    <PlayingView
      {...props}
      onPlay={_onPlay}
      onPause={_onPause}
      trackDetail={trackDetail}
      isPlaying={isPlaying}
      duration={duration}
      currentTime={currentTime}
    />
  );
};

export default PlayingContainer;
