import React from 'react';

const UserForm = () => (
  <form className="UserForm">
    <fieldset>
      <label htmlFor="name">Name</label>
      <input name="name" id="name"></input>
    </fieldset>
    <fieldset>
      <label htmlFor="username">Username</label>
      <input name="username" id="username"></input>
    </fieldset>
    <fieldset>
      <label htmlFor="email">Email</label>
      <input name="email" id="email"></input>
    </fieldset>
    <button type="submit">Submit</button>
  </form>
);

export default UserForm;
