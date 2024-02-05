"use client"
import React, { useState, useEffect, useRef, FC } from 'react';
import styles from './TextInput.module.css';

interface PasswordInputProps {
  label: string;
  getValue: (value: string) => void;
}

const PasswordInput:FC<PasswordInputProps> = ({ label, getValue }) => {
  const [content, setContent] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputPasswordRef = useRef<HTMLDivElement>(null);
  

  const handleInput = () => {
    const newText = inputPasswordRef.current?.innerText || '';
    setContent(newText);
    // Move the cursor to the end after each input event
    moveCursorToEnd();
  };

  const moveCursorToEnd = () => {
    const selection = window.getSelection();
    const range = document.createRange();

    if (inputPasswordRef.current) {
      range.selectNodeContents(inputPasswordRef.current);
      range.collapse(false);

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    if (inputPasswordRef.current) {
      if (isPasswordVisible) {
        // Show asterisks if password visibility is toggled
        inputPasswordRef.current.innerText = '*'.repeat(content.length);
      } else {
        // Show actual text if password visibility is not toggled
        inputPasswordRef.current.innerText = content;
      }

      // Move the cursor to the end after updating the content
      moveCursorToEnd();
    }
  }, [content, isPasswordVisible]);

  useEffect(() => {
    getValue(content);
  }, [content, getValue]);

  return (
    <>
    <div className={styles.label}>{label}</div>
      <div
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning // Suppress React warning for contentEditable
        className={styles.password_text_box}
        id="inputPassword"
        ref={inputPasswordRef}
        tabIndex={0}
      ></div>
      <div className={styles.toggle_button} 
      onClick={togglePasswordVisibility}
      tabIndex={0} >
        {isPasswordVisible ? 'Show' : 'Hide'}
      </div>
    </>
  );
}

export default PasswordInput;
