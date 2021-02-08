import React, { useState, useEffect, createContext } from 'react';
import { Hub, Auth } from 'aws-amplify';
import {
  CUSTOM_AUTH_STATE,
  CUSTOM_AUTH_MESSAGE,
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_OUT,
} from '../constants';

const AuthContext = createContext<Auth>({
  state: SIGN_OUT,
  user: null,
});

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState({ state: SIGN_OUT, user: null });

  // fetch user info if the user was already logged in
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        localStorage.setItem(CUSTOM_AUTH_STATE, CUSTOM_AUTH_MESSAGE);
        setAuth({ state: SIGN_IN, user });
      })
      .catch(() => localStorage.getItem(CUSTOM_AUTH_STATE))
      .then(
        (cachedAuthState) =>
          cachedAuthState === CUSTOM_AUTH_MESSAGE && Auth.signOut()
      );
  }, []);

  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      const { event, data } = payload;
      switch (event) {
        case SIGN_IN:
          setAuth({ state: event, user: data });
          localStorage.setItem(CUSTOM_AUTH_STATE, CUSTOM_AUTH_MESSAGE);
          break;
        case SIGN_OUT:
          setAuth({ state: event, user: null });
          localStorage.removeItem(CUSTOM_AUTH_STATE);
          break;
        case SIGN_IN_FAIL:
          setAuth({ state: event, user: null });
          break;
        default:
          console.log('Caught an unexpected Hub event: ', event);
          break;
      }
    });
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
