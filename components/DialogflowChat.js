'use client';

import { useEffect, useState } from 'react';

export default function DialogflowChat() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('DialogflowChat component mounted');
    // Create and append the iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://console.dialogflow.com/api-client/demo/embedded/4aa2cf41-bc36-45a8-b18b-f5f6e6351255';
    iframe.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 500px;
      border: none;
      z-index: 9999;
      display: block;
      visibility: visible;
      opacity: 1;
    `;
    document.body.appendChild(iframe);
    setIsLoaded(true);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
      zIndex: 9999
    }}>
      Test Chat Widget
    </div>
  );
} 