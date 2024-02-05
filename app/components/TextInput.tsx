"use client"
import React, { useState, useEffect, useRef, FC, useCallback } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  label: string;
  getValue: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({ label, getValue }) => {
  const [content, setContent] = useState('');
  const inputTextRef = useRef<HTMLDivElement>(null);

  const moveCursorToEnd = useCallback(() => {
    const selection = window.getSelection();
    const range = document.createRange();

    const currentRef = inputTextRef.current;

    if (currentRef) {
      range.selectNodeContents(currentRef);
      range.collapse(false);

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, []);

  const handleInput = useCallback(() => {
    if (inputTextRef.current) {
      const newText = inputTextRef.current.innerText;
      setContent(newText);
      moveCursorToEnd();
    }
  }, [moveCursorToEnd]);

  useEffect(() => {
    const currentRef = inputTextRef.current;
    if (currentRef) {
      currentRef.addEventListener('input', handleInput);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('input', handleInput);
      }
    };
  }, [handleInput]);

  useEffect(() => {
    getValue(content);
  }, [content, getValue]);

  return (
    <>
      <div className={styles.label}>{label}</div>
      <div
        contentEditable
        onInput={handleInput}
        className={styles.text_box}
        id="inputText"
        ref={inputTextRef}
      ></div>
    </>
  );
};

export default TextInput;



