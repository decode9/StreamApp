import React, { memo, FC, useState, useEffect } from 'react';
import styles from './styles';
import { StatusBar, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Props, StateProps } from './interface';
import { NodeCameraView } from 'react-native-nodemediaclient';
import { logOut } from '../../store/actions'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'native-base';

const Camera: FC<Props> = memo(({ auth, action }) => {

  const [view, setVb]: any = useState(null);
  const [publish, setPublish] = useState(false);
  const setStream = () => {
    if (publish) view.stop()
    if (!publish) view.start()
    setPublish(!publish)
  }

  useEffect(() => {
    if (view && !publish) setStream()
    if (view && auth.sideCamera == 'back') view.switchCamera()
  }, [view])

  return (
    <>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
      <View style={styles.main}>
        <NodeCameraView
          style={styles.camera}
          ref={(vb: any) => { setVb(vb) }}
          outputUrl={`rtmp://${auth.serverEmition}/live/${auth.cameraName}?pwd=a_secret_password`}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 30, videoFrontMirror: false }}
          autopreview={true}
        />
      </View>
      <SafeAreaView style={styles.mainUpper}>
        <Text style={styles.textCamera}>{auth.cameraName}</Text>
        <View style={{ alignSelf: 'flex-end' }}>
          <Button style={styles.iconBox} onPress={() => view.switchCamera()} >
            <Icon style={styles.icon} name={'camera-front'} />
          </Button>
          <Button style={styles.iconBox} onPress={setStream} >
            <Icon style={styles.icon} name={(publish) ? 'visibility-off' : 'visibility'} />
          </Button>
          <Button style={styles.iconBox} onPress={action.logOut} >
            <Icon style={styles.icon} name={'arrow-back'} />
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
});

const mapStateProps = ({ auth }: StateProps) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = { logOut };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Camera);

