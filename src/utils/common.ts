import { PermissionsAndroid } from 'react-native';

export const actionObject = (type: any, payload: any = null) => {
  return { type, payload }
}

export const requestCameraPermission = async () => {
  try {
    const permission = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]);
    if (permission['android.permission.CAMERA'] == 'granted' && permission['android.permission.RECORD_AUDIO'] == 'granted') return true
    return false
  } catch (err) {
    console.warn(err);
    return false
  }
};