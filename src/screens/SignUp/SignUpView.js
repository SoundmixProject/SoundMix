/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import { type Props, ViewProps } from './types';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useStyles from './SignUpStyles';
import moment from 'moment';

const Resource = {
  addImage: require('../../../assets/icons/add.png'),
};

const SignUpView = (props: Props & ViewProps) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const styles = useStyles();

  const currentDate = new Date();

  const [selectedGender, setSelectedGender] = useState<number>(1);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState<any>(new Date());
  const [mode, setMode] = useState<string>('date');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
    if (!!firstName.length && !!lastName.length) {
    }
    // navigate('BottomTabNavigator');
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
    <View style={styles.root}>
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
    </View>
  );
};

SignUpView.defaultProps = {};

export default SignUpView;
