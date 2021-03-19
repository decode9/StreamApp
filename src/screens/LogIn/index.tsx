import React, { memo, FC, useState } from 'react';
import styles from './styles';
import { Button, CheckBox, View } from 'native-base';
import { Image, StatusBar, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Props, StateProps } from './interface';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../store/actions'
import { requestCameraPermission } from '../../utils'

const LogIn: FC<Props> = memo(({ action, auth }) => {

  const [form, setForm] = useState({ cameraName: auth.cameraName, sideCamera: auth.sideCamera, serverEmition: auth.serverEmition, onlyAudio: auth.onlyAudio });
  const Gorilla = require('../../../assets/images/GORILLA.png')

  const connectCamera = () => {
    if (form.cameraName && form.serverEmition && form.sideCamera) {
      if (requestCameraPermission()) {
        action.login({ ...form, ...{ init: true } })
      }
    }
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
      <View style={styles.main}>
        <View>
          <Image style={styles.image} source={Gorilla} />
          <Text style={styles.title}>Stream Camera</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput placeholderTextColor='white' value={form.cameraName} style={styles.input} placeholder='Nombre de Camara' onChangeText={(text) => { setForm({ ...form, ...{ cameraName: text } }) }} />
          <TextInput placeholderTextColor='white' value={form.serverEmition} style={styles.input} placeholder='Servidor' onChangeText={(text) => { setForm({ ...form, ...{ serverEmition: text } }) }} />
          <View style={(form.onlyAudio) ? { display: 'none' } : styles.pickerBox}>
            <Picker style={styles.picker} selectedValue={form.sideCamera} onValueChange={(text) => { setForm({ ...form, ...{ sideCamera: text } }) }}>
              <Picker.Item label='Delantera' value='front' />
              <Picker.Item label='Trasera' value='back' />
            </Picker>
          </View>
          <View style={styles.audioBox}>
            <CheckBox style={styles.checkBox} checked={form.onlyAudio} onPress={(event) => { setForm({ ...form, ...{ onlyAudio: !form.onlyAudio } }) }} />
            <Text style={styles.Text}>Solo Audio</Text>
          </View>

          <Button style={styles.button} bordered onPress={connectCamera} >
            <Text style={styles.buttonText} >Conectar</Text>
          </Button>
        </View>
      </View>
    </>
  );
});

const mapStateProps = ({ auth }: StateProps) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = { login };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(LogIn);

