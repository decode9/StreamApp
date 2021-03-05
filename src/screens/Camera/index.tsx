import React, { memo, FC, useState } from 'react';
import styles from './styles';
import { StatusBar, View, Text, Button, PermissionsAndroid, TextInput } from 'react-native';
import { Props } from './interface';
import { NodeCameraView } from 'react-native-nodemediaclient';

const Camera: FC<Props> = memo(() => {

  const requestCameraPermission = async () => {
    try {
      await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]);
    } catch (err) {
      console.warn(err);
    }
  };

  const [view, setVb]: any = useState(null);
  const [publish, setPublish] = useState(false);
  const [publishTitle, setPublishTitle] = useState('publicar');
  const [username, setUsername] = useState('stream');

  return (
    <>
      <StatusBar barStyle={'light' == 'light' ? 'dark-content' : 'light-content'} translucent={true} backgroundColor={'transparent'} />

      <View style={styles.main}>
        <Text>WebCam Streaming</Text>

        <TextInput style={{ textAlign: 'center' }} placeholder='User Tag' editable={!publish} onChangeText={(text) => { setUsername(text) }} />

        <NodeCameraView
          style={{ height: 400, width: 400 }}
          ref={(vb: any) => { setVb(vb) }}
          outputUrl={'rtmp://192.168.1.101/live/' + username + '?pwd=a_secret_password'}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
          autopreview={true}
        />

        <Button
          onPress={() => {
            if (publish) {

              view.stop()
              setPublish(false)
              setPublishTitle('Publicar')
            } else {
              requestCameraPermission()
              view.start()
              setPublish(true)
              setPublishTitle('Despublicar')
            }
          }}
          title={publishTitle}
          color='#841584'
        />

      </View>
    </>
  );
});

export default Camera;
