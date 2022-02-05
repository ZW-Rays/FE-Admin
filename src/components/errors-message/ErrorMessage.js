import React from 'react';
import styles from './ErrorMessage.module.css'

export default function ErrorMessage({
    message = '',
    isError = false
}) {
  let styleErrorMessage = ''
  if (isError) styleErrorMessage = styles['span-error-message']
  return (
  <div>
      <span className={styleErrorMessage}>{message}</span>
  </div>
  );
}
