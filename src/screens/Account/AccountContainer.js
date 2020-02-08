/**
 * @format
 * @flow
 */

import React from 'react';
import { type Props } from './types';
import AccountView from './AccountView';

const AccountContainer = (props: Props) => {
  return <AccountView {...props} />;
};

export default AccountContainer;
