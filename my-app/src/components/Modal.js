import React, { useState } from 'react';

const Modal = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const saveProfile = () => {
    // Implement saving the profile data
    closeModal();
  };

  const renderStep1 = () => (
    <div>
      <h1>Step 1: Personal Information</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h1>Step 2: Contact Information</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={saveProfile}>Save</button>
    </div>
  );

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {step === 1 ? renderStep1() : null}
        {step === 2 ? renderStep2() : null}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
