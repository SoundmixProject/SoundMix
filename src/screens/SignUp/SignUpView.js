/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { type Props, ViewProps } from './types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useStyles from './SignUpStyles';
import moment from 'moment';
import { validateEmail } from '../../common/validator';
import AppScreen from '../../components/AppScreen';

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
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<any>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(
    false,
  );

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
        activeOpacity={1}
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
    if (firstName.trim().length && lastName.trim().length) {
      if (validateEmail(email.trim())) {
        navigate('BottomTabNavigator');
      } else {
        alert('Email không hợp lệ');
      }
    } else {
      alert('Họ và tên không dược để trống');
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setDate(date);
  };

  return (
    <AppScreen contentContainerStyle={styles.root}>
      <Text style={styles.title}>Thông tin tài khoản</Text>

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
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.dateOfBirthInput}>
          <Text>{moment(date).format('DD')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.dateOfBirthInput}>
          <Text>{moment(date).format('MM')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.dateOfBirthInput}>
          <Text>{moment(date).format('YYYY')}</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          onDateChange={handleConfirm}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
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
    </AppScreen>
  );
};

SignUpView.defaultProps = {};

export default SignUpView;
