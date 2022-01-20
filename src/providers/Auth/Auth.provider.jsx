import React, { useState, useEffect, useContext, useCallback, useReducer } from 'react';
import AuthContext from '../../auth/AuthContext.auth';
import useVideosFetch from '../../hooks/useVideosFetch';
import { favoritesReducer } from '../../reducers/favoritesReducer';
import { types } from '../../types/types';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

function useAuth() {
  const context = useContext(AuthContext);
  //console.log(context);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  
  const [authenticated, setAuthenticated] = useState(false);  
  
  const [category, setCategory] = useState('Wizeline');
  const { videos } = useVideosFetch(category);
  const [isChecked, setIsChecked] = useState(false);
  const [state, dispatch] = useReducer(favoritesReducer, {});

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    
    const isAuthenticated = Boolean(lastAuthState);
    console.log(isAuthenticated);
    
    setAuthenticated(isAuthenticated);
  }, [category]);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  const addFavorite = useCallback((video) => {
    dispatch({
      type: types.addFavorite,
      payload: video,
    })
  }, [])

  const removeFavorite = useCallback((videoId) => {
    dispatch({
      type: types.removeFavorite,
      payload: videoId,
    })
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, videos, category, setCategory, isChecked, setIsChecked, addFavorite, removeFavorite, favorites: state}}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
