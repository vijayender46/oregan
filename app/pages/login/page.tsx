import React from 'react'
import styles from '../../Login.module.css'
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <div className={styles.page}>
        <h1 className={styles.title}>Login page </h1>
        <LoginForm />
        
    </div>
  )
}



