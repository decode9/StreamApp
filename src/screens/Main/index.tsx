import React, { memo, FC } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Root, View } from 'native-base';
import { StatusBar, ActivityIndicator } from 'react-native';
import { StateProps, Props } from './interface';
import Camera from '../Camera';
import LogIn from '../LogIn';

const Main: FC<Props> = memo(({ intermittence, auth }) => {

  const { loader } = intermittence;

  return (
    <>
      <StatusBar barStyle={'default'} translucent={true} backgroundColor={'transparent'} />
      <Root>
        {auth.init ? <Camera /> : <LogIn/>}
        {
          loader ? (
            <View style={styles.loader}>
              <ActivityIndicator size='large' color={'gray'} />
            </View>
          ) : null
        }
      </Root>
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

export default connect(mapStateProps, mapDispatchToProps)(Main);
