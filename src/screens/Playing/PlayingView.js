/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { type ViewProps } from './types';
import useStyles from './PlayingStyles';
import Slider from '@react-native-community/slider';

const resource = {
  more: require('../../../assets/icons/baseline-more_horiz-24px.png'),
  expand: require('../../../assets/icons/baseline-expand_more-24px.png'),
  pause: require('../../../assets/icons/baseline-pause-24px.png'),
  prev: require('../../../assets/icons/baseline-fast_rewind-24px.png'),
  next: require('../../../assets/icons/baseline-fast_forward-24px.png'),
  play: require('../../../assets/icons/baseline-play_arrow-24px.png'),
};

const PlayingView = (props: ViewProps) => {
  const {
    trackDetail,
    isPlaying,
    onPause,
    onPlay,
    duration,
    currentTime,
    navigation,
  } = props;
  const styles = useStyles();

  const _playButton = () => {
    return (
      <TouchableOpacity onPress={onPlay} style={styles.toggleButton}>
        <Image source={resource.play} style={styles.toggleIcon} />
      </TouchableOpacity>
    );
  };

  const _pauseButton = () => {
    return (
      <TouchableOpacity onPress={onPause} style={styles.toggleButton}>
        <Image source={resource.pause} style={styles.toggleIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={resource.expand} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đang phát</Text>
        <TouchableOpacity>
          <Image source={resource.more} />
        </TouchableOpacity>
      </View>

      <View style={styles.thumbnailWrapper}>
        <Image
          source={{ uri: trackDetail?.artwork }}
          style={styles.thumbnail}
        />
      </View>

      <View style={styles.trackInfo}>
        <Text style={styles.trackName}>{trackDetail?.title}</Text>
        <Text style={styles.artist}>{trackDetail?.artist}</Text>
      </View>

      <View>
        <Slider
          style={styles.sliderStyle}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FF2D55"
          maximumTrackTintColor="#FFBFCB"
          onValueChange={value => {
            // console.log(value);
          }}
        />
      </View>

      <View style={styles.time}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.timeText}>{duration}</Text>
      </View>

      <View style={styles.controlWrapper}>
        <TouchableOpacity style={styles.moveButton}>
          <Image source={resource.prev} style={styles.moveIcon} />
        </TouchableOpacity>

        {!isPlaying ? _playButton() : _pauseButton()}

        <TouchableOpacity style={styles.moveButton}>
          <Image source={resource.next} style={styles.moveIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

PlayingView.defaultProps = {};

export default PlayingView;
