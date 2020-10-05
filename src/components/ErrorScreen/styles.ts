import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: '90%'
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontSize: 12
  },
  icon: {
    alignSelf: 'center',
    marginTop: 20
  },
  logo: {
    position: 'absolute',
    justifyContent:'center',
    alignItems: 'center',
    top: 80,
    left: 0,
    right: 0,
    width: '100%'
  },
  imageSize: {
    width: 200, 
    height: 50
  }
});

export default styles;