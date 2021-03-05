import { PermissionsAndroid } from 'react-native';

export const actionObject = (type: any, payload: any = null) => {
  return { type, payload }
}

const requestCameraPermission = async () => {
  try {
    await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]);
  } catch (err) {
    console.warn(err);
  }
};