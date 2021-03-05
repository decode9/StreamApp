import { LOGIN, LOGOUT } from './action-types';
import { DispatchProps } from '../../interfaces';

const initialState = {
  cameraName: '',
  sideCamera: 'front',
  serverEmition: '',
  init: false
};

export default (state: any = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
