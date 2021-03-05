import { LOGIN, LOGOUT } from './action-types';
import { actionObject } from '../../utils';

export const login = (body: any) => actionObject(LOGIN, body)
export const logOut = () => actionObject(LOGOUT)