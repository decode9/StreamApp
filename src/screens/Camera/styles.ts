import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    flex: 1
  },
  mainHide: {
    display: 'none'
  },
  mainUpper: {
    position: 'absolute',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    top: 0,
    left: 0,
    flex: 2
  },
  camera: {
    width: '100%',
    height: '100%'
  },
  textCamera: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  iconBox: {
    borderRadius: 200,
    backgroundColor: 'black',
    padding: 10,
    height: 60,
    width: 60,
    marginVertical: 10
  },
  icon: {
    fontSize: 40,
    color: 'white'
  },
  iconAudio: {
    fontSize: 80,
    color: 'black'
  },
  mainAudio: {
    width: '100%',
    height: '100%',
    backgroundColor: '#131c21',
  },
  iconBoxAudio:{
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
    height: 100,
    width: 100,
    marginVertical: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textAudio:{
    marginTop: '30%',
    marginBottom: '30%',
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textAlign: 'center'
  },
  buttonBox:{
    
  }
});

export default styles;
