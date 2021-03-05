import React, { memo, FC } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Root, Text, View } from 'native-base';
import { StatusBar, ActivityIndicator } from 'react-native';
import { StateProps, Props } from './interface';
//import Camera from '../Camera';
//import LogIn from '../LogIn';

const Main: FC<Props> = (() => {

  //const { loader } = intermittence;

  return (
    <>
      <StatusBar barStyle={'default'} translucent={true} backgroundColor={'transparent'} />
      <Text>Hola</Text>
      {/* auth.init ? <Camera /> : <LogIn /> */}
      {
        /* loader ? (
          <View style={styles.loader}>
            <ActivityIndicator size='large' color={'gray'} />
          </View>
        ) : null */
      }
    </>
  );
});

const mapStateProps = ({ intermittence, auth }: StateProps) => ({ intermittence, auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {};

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default Main;

//export default connect(mapStateProps, mapDispatchToProps)(Main);
