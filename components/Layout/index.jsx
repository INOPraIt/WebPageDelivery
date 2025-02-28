import { Routes, Route } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';

import RestrictAccess from '../RestrictAccess';
import HomePage from '../../pages/Home';

import { getUserInfoAction, clearUserError } from './../../store/actions/user.actions';
import Navbar from '../Navbar';

export default connect(
  (s) => ({
    language: s.user.language,
    user: s.user.state,
    userError: s.user.error,
  }),
  {
    getUserInfoAction,
    clearUserError,
  }
)(({ language, user, userError, getUserInfoAction, clearUserError }) => {
  React.useEffect(() => {
    getUserInfoAction();
  }, []);

  React.useEffect(() => {
    if (userError) {
      // TODO: show error

      clearUserError();
    }
  }, [userError]);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomePage />} />

        <Route
          path={'/login'}
          element={
            <div>
              <HomePage />
            </div>
          }
        />
      </Routes>
    </>
  );
});
