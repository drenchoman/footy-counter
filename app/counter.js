'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Counter({ name }) {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.wrapper}>
      <h2>{name}</h2>
      <span className={styles.number}>{counter}</span>
      <div className={styles.buttonWrapper}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
}
