import React from 'react';
export const userDetailsObject = {firstName:'test', lastName:'testlastName'};
export const UserDetailsFormContext = React.createContext({
  submitForm: () => {}
});