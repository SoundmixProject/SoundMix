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

  const [selectedGender, setSelectedGender] = useState<number>(1);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [email, setEmail] = useState<string>('');

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
        style={
          selectedGender === gender.id
            ? styles.genderActive
            : styles.genderChosen
        }
        key={index}
        onPress={() => _onSelect(gender)}>
        <Text
          style={
            selectedGender === gender.id
              ? styles.genderContentActive
              : styles.genderContent
          }>
          {gender.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const _onSelect = gender => {
    setSelectedGender(gender.id);
  };

  const _onSubmit = () => {
    if (!!firstName.length && !!lastName.length) {
    }
    // navigate('BottomTabNavigator');
  };

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#707070' }}>
        Thông tin tài khoản
      </Text>

      <TouchableOpacity style={styles.addAvatarWrapper}>
        <Image source={Resource.addImage} style={styles.addAvatarIcon} />
        <Text style={styles.addAvatarText}>Thêm ảnh đại diện</Text>
      </TouchableOpacity>

      <View style={styles.fullNameWrapper}>
        <TextInput
          placeholder="Họ"
          style={styles.fullNameInput}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Tên"
          style={styles.fullNameInput}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.dateOfBirthWrapper}>
        <TextInput
          placeholder="Ngày"
          style={styles.dateOfBirthInput}
          value={day}
          onChangeText={setDay}
        />
        <TextInput
          placeholder="Tháng"
          style={styles.dateOfBirthInput}
          value={month}
          onChangeText={setMonth}
        />
        <TextInput
          placeholder="Năm"
          style={styles.dateOfBirthInput}
          value={year}
          onChangeText={setYear}
        />
      </View>

      <View style={styles.genderWrapper}>
        {genderList.map((gender, index) => {
          return _chosenGender(gender, index);
        })}
      </View>

      <View style={styles.emailWrapper}>
        <TextInput
          placeholder="Email"
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        onPress={() => _onSubmit(selectedGender)}
        style={styles.finishButton}>
        <Text style={styles.finishButtonText}>Hoàn tất</Text>
      </TouchableOpacity>
    </View>
  );
};

SignUpView.defaultProps = {};

export default SignUpView;
