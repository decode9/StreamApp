import React, { memo, FC, useState } from 'react';
import styles from './styles';
import { View } from 'native-base';
import { Image, StatusBar, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Props, StateProps } from './interface';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const LogIn: FC<Props> = memo(({ action, auth }) => {

  const [form, setForm] = useState({ cameraName: auth.cameraName, sideCamera: auth.sideCamera, serverEmition: auth.serverEmition });
  const Gorilla = require('../../../assets/images/GORILLA.png')

  return (
    <>
      <StatusBar barStyle={'light' == 'light' ? 'dark-content' : 'light-content'} translucent={true} backgroundColor={'transparent'} />
      <View style={styles.main}>
        <View>
          <Image source={Gorilla} />
          <Text>Stream Camera</Text>
        </View>
        <View>
          <TextInput value={form.cameraName} style={{ textAlign: 'center' }} placeholder='Nombre de Camara' onChangeText={(text) => { setForm({ ...form, ...{ cameraName: text } }) }} />
          <TextInput value={form.serverEmition} style={{ textAlign: 'center' }} placeholder='Servidor' onChangeText={(text) => { setForm({ ...form, ...{ serverEmition: text } }) }} />
          <Picker selectedValue={form.sideCamera} onValueChange={(text) => { setForm({ ...form, ...{ sideCamera: text } }) }}>
            <Picker.Item label='Delantera' value='front' />
            <Picker.Item label='Trasera' value='back' />
          </Picker>
        </View>
      </View>
    </>
  );
});

const mapStateProps = ({ auth }: StateProps) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {};

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(LogIn);

