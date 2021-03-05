import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#131c21',
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  inputBox: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    paddingHorizontal: 15,
    borderColor: 'white',
    color: 'white',
    width: '100%',
    marginVertical: 10,
  },
  picker: {
    color: 'white',
    width: '100%',
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 15
  },
  pickerBox: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150
  },
  button: {
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    width: '100%'
  }
});

export default styles;
