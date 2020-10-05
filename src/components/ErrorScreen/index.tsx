import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import Props from './interface';

const ErrorScreen: FC<Props> = ({ type = '', icon = 'ios-bug', message = 'app_error' }) => (
  <View style={styles.screen}>
    <View style={styles.content}>
      <View style={styles.icon}>
        <Icon type={type} name={icon} size={45} color={"green"} />
      </View>
      <Text style={styles.text}>UPS! Ha ocurrido un error</Text>
    </View>
  </View>
);

export default ErrorScreen;
