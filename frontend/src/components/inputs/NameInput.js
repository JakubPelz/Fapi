import React from 'react';

const NameInput = ({ user, name, setName }) => {
  const nameValidation = () => {
    if (name === '') {
      return <div></div>;
    }
    if (name.trim().length === 5) {
      return <div></div>;
    } else {
      return <div className="validation">Jméno a příjmení jsou 2 slova</div>;
    }
  };
  return (
    <div className="field">
      <h3>Objednavatel</h3>
      <label>Jméno a příjmení</label>
      <input
        type="text"
        name="name"
        placeholder={user === null ? 'Jméno a příjmení' : name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      {nameValidation()}
    </div>
  );
};

export default NameInput;
