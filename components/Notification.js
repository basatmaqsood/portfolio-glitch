'use client';
import React, { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-hide after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification success">
      <p>{message}</p>
      <button onClick={onClose} className="close-btn">✖</button>
      <style jsx>{`
        @keyframes slideInOut {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          20% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }

        .notification {
          position: fixed;
          top: 20%;
          left: 35%;
          transform: translate(-50%, -50%);
          background-color: #f26b38;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          z-index: 99999;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          animation: slideInOut 3s ease-in-out forwards;
          max-width: 90%;
          text-align: center;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }

        .close-btn:hover {
          color: #d0d0d0;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .notification {
            top: 15%;
            right: 10%;
            // transform: translate(-50%, -50%);
            max-width: 90%;
            font-size: 12px;
            padding: 10px 15px;
          }

          .close-btn {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .notification {
            max-width: 90vw;
            right:5%;
            font-size: 12px;
            padding: 8px 10px;
          }

          .close-btn {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Notification;
