import { SHOW_LOADER } from './action-types';
import { DispatchProps } from '../../interfaces';

const initialState = {
  loader: false
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loader: payload };
    default:
      return state;
  }
}

