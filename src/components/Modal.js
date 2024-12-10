import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, title, content, confirmText, cancelText }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;