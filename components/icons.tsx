
import React from 'react';

export const CopyIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.54,5.23l-1.39-1.39A6.41,6.41,0,0,0,14.58,2H10A3,3,0,0,0,7,5V15a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h3.59a2.41,2.41,0,0,1,1.7.7l1.41,1.41a2.41,2.41,0,0,1,.7,1.7V15a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V8A1,1,0,0,1,4,7H5A1,1,0,0,1,5,9H4v6a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V8.41a6.42,6.42,0,0,0-1.92-4.58ZM14.59,4a.41.41,0,0,0-.29.12L13,5.41V6a3,3,0,0,0,3,3h.59l1.29-1.29a.41.41,0,0,0,.12-.29Z" />
    <path d="M19,20H9a1,1,0,0,0,0,2H19a3,3,0,0,0,3-3V10a1,1,0,0,0-2,0v9A1,1,0,0,1,19,20Z" />
  </svg>
);

export const CheckIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M9.71,11.29a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l7-7a1,1,0,0,0-1.42-1.42L12,13.59Z"/>
        <path d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12ZM12,5a7,7,0,1,0,7,7A7,7,0,0,0,12,5Z"/>
    </svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
  </svg>
);
