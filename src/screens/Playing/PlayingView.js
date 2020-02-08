/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './PlayingStyles';
import Sound from 'react-native-sound';
import axios from 'axios';

const PlayingView = (props: Props & ViewProps) => {
  const styles = useStyles();
  const [data, setData] = useState({});

  const _onPlay = () => {
    const track = new Sound(data.url, Sound.MAIN_BUNDLE, error => {
      console.log(track);
      if (error) {
        console.log('error', error);
      } else {
        setTimeout(() => {
          console.log('No error');
          track.play(success => {
            console.log(success);
            if (success) {
              console.log('Nice');
            } else {
              console.log('No');
            }
          });
        }, 100);
      }
    });
  };

  useEffect(() => {
    axios
      .get('http://10.0.101.201:8888/')
      .then(result => {
        setData(result.data);
      })
      .catch(e => console.log('e', e));
  }, []);

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={_onPlay}>
        <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

PlayingView.defaultProps = {};

export default PlayingView;
