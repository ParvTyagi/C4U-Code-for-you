import React, { useState, useEffect } from 'react';

const Toaster = ({ message = "This is a toaster message!", duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-64 bg-white shadow-lg rounded-lg p-4">
      <p className="text-gray-800">{message}</p>
    </div>
  );
}

export default Toaster;