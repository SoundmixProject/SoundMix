/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { type Props, ViewProps } from './types';
import useStyles from './SignUpStyles';

const Resource = {
  addImage: require('../../../assets/icons/add.png'),
};

const SignUpView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();

  const [selected, setSelected] = useState(false);

  const genderList = [
    {
      id: 1,
      name: 'Nam',
    },
    {
      id: 2,
      name: 'Nữ',
    },
  ];

  const _chosenGender = (gender, index) => {
    return (
      <TouchableOpacity
        style={selected ? styles.genderActive : styles.genderChosen}
        key={index}
        onPress={() => _onSelect(gender, index)}>
        <Text style={styles.genderContent}>{gender.name}</Text>
      </TouchableOpacity>
    );
  };

  const _onSelect = (gender, index) => {
    setSelected(gender.id === index + 1);
  };

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#707070' }}>
        Thông tin tài khoản
      </Text>

      <View style={styles.addAvatarWrapper}>
        <Image source={Resource.addImage} style={styles.addAvatarIcon} />
        <Text style={styles.addAvatarText}>Thêm ảnh đại diện</Text>
      </View>

      <View style={styles.fullNameWrapper}>
        <TextInput placeholder="Họ" style={styles.fullNameInput} />
        <TextInput placeholder="Tên" style={styles.fullNameInput} />
      </View>

      <View style={styles.dateOfBirthWrapper}>
        <TextInput placeholder="Ngày" style={styles.dateOfBirthInput} />
        <TextInput placeholder="Tháng" style={styles.dateOfBirthInput} />
        <TextInput placeholder="Năm" style={styles.dateOfBirthInput} />
      </View>

      <View style={styles.genderWrapper}>
        {genderList.map((gender, index) => {
          return _chosenGender(gender, index);
        })}
      </View>

      <View style={styles.emailWrapper}>
        <TextInput placeholder="Email" style={styles.emailInput} />
      </View>

      <TouchableOpacity
        onPress={() => navigate('BottomTabNavigator')}
        style={styles.finishButton}>
        <Text style={styles.finishButtonText}>Hoàn tất</Text>
      </TouchableOpacity>
    </View>
  );
};

SignUpView.defaultProps = {};

export default SignUpView;
