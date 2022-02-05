import React from 'react';
import styles from './ErrorMessage.module.css'

export default function ErrorMessage({
    message = ''
}) {
  return (
  <div>
      <span className={styles['span-error-message']}>{message}</span>
  </div>
  );
}
