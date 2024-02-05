"use client"
import React, { useState } from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import styles from '../Login.module.css'

const LoginForm = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = () => {
    console.log('Text Input Value:', textValue);
    console.log('Password Input Value:', passwordValue);

    // login logic
  };


  return (
    <div onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.formGroup}>
            <TextInput
                label="Username"
                getValue={(value) => setTextValue(value)}
            />
        </div>

        <div className={styles.formGroup}>
            <PasswordInput
                label="Password"
                getValue={(value) => setPasswordValue(value)}
            />
        </div>

        <div className='formGroup'>
            <div 
            onClick={handleSubmit}
            tabIndex={0} 
            className={styles.submit_btn}>Log in</div>
        </div>
    </div>
  );
};

export default LoginForm;
