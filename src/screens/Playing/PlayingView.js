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
  const { trackDetail, isPlaying, onPause, onPlay } = props;
  const styles = useStyles();

  const _playButton = () => {
    return (
      <TouchableOpacity
        onPress={onPlay}
        style={{
          width: 70,
          aspectRatio: 1,
          backgroundColor: '#FF2D55',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
        }}>
        <Image
          source={resource.play}
          style={{ tintColor: '#FFF', width: 50, height: 50 }}
        />
      </TouchableOpacity>
    );
  };

  const _pauseButton = () => {
    return (
      <TouchableOpacity
        onPress={onPause}
        style={{
          width: 70,
          aspectRatio: 1,
          backgroundColor: '#FF2D55',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
        }}>
        <Image
          source={resource.pause}
          style={{ tintColor: '#FFF', width: 50, height: 50 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity>
          <Image source={resource.expand} style={{ borderWidth: 1 }} />
        </TouchableOpacity>
        <Text
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 16,
            color: '#707070',
          }}>
          Đang phát
        </Text>
        <TouchableOpacity>
          <Image source={resource.more} style={{ borderWidth: 1 }} />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 32 }}>
        <Image
          source={{ uri: trackDetail?.artwork }}
          style={{ width: 315, height: 315, borderRadius: 20 }}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
          {trackDetail?.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#707070',
            textAlign: 'center',
          }}>
          {trackDetail?.artist}
        </Text>
      </View>

      <View>
        <Slider
          style={{ width: '100%', height: 100 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FF2D55"
          maximumTrackTintColor="#FFBFCB"
        />
      </View>

      <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            width: 70,
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
          }}>
          <Image
            source={resource.prev}
            style={{ tintColor: '#000', width: 50, height: 50 }}
          />
        </TouchableOpacity>

        {!isPlaying ? _playButton() : _pauseButton()}

        <TouchableOpacity
          style={{
            width: 70,
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
          }}>
          <Image
            source={resource.next}
            style={{ tintColor: '#000', width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

PlayingView.defaultProps = {};

export default PlayingView;
