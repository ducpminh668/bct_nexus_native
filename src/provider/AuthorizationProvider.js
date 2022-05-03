
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsTokenReady, getTokenFromLocal } from '../redux/slices/authSlice';

const AuthorizationProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isTokenReady = useSelector(selectIsTokenReady);
  // wait get token form locale
  useEffect(() => {
     dispatch(getTokenFromLocal());
  }, [dispatch]);

  if (!isTokenReady) { return null; }

  return (
    <>
      {children}
    </>
  );
};

export default AuthorizationProvider;
