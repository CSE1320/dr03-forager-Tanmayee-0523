// components/Message.jsx
import React from 'react';

const Message = ({ header, icon, message }) => {
  return (
    <div className="bg-[#FF5050] rounded-xl text-sm w-full font-medium text-white px-4 py-4 mx-4">
      <div className="flex items-center mb-2">
        <img width="27px" height="27px" className="mr-2" src={icon} alt="Warning Icon" />
        <h1 className="uppercase text-lg font-semibold">{header}</h1>
      </div>
      <p className="text-white">{message}</p>
    </div>
  );
};

export default Message;
