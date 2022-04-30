import React from 'react';

const EmailInput = ({ email, setEmail, user }) => {
  return (
    <div className="field">
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder={user === null ? 'Email' : user.email}
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default EmailInput;
