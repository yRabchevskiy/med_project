export enum FB_Auth_Error_TYPES {
  email = 'email',
  password = 'password',
  unknown = 'unknown'
}

export interface IFB_Auth_Error {
  type: FB_Auth_Error_TYPES;
  value: string;
}
export const fb_auth_errors_parser = (e: string): IFB_Auth_Error => {
  debugger
  switch (e) {
    case 'auth/invalid-password':
    case 'auth/wrong-password': {
      return { type: FB_Auth_Error_TYPES.password, value: 'Password is invalid'};
    }
    case 'auth/invalid-email': {
      return { type: FB_Auth_Error_TYPES.email, value: 'Email is invalid' };
    }
    default: {
      return { type: FB_Auth_Error_TYPES.unknown, value: 'Impossible to solve a problem' };
    }
  }
}