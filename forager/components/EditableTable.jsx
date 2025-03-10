"use client";
import React, { useState } from "react";

const EditableTable = ({ attributes }) => {
  // Initialize state for left-side inputs
  const [inputs, setInputs] = useState(attributes.map(attr => attr.userInput || ""));

  // Handle input change
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Clear input when "X" is clicked
  const clearInput = (index) => {
    const newInputs = [...inputs];
    newInputs[index] = "";
    setInputs(newInputs);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <table className="w-full border-collapse">
        <tbody>
          {attributes.map((attr, index) => (
            <tr key={index} className="border-b">
              {/* Left Side (Editable) */}
              <td className="p-2 flex items-center space-x-2">
                <button
                  onClick={() => clearInput(index)}
                  className="text-blue-500 hover:text-red-500"
                >
                  ✖
                </button>
                <input
                  type="text"
                  value={inputs[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder="Type here..."
                  className="border-b focus:outline-none focus:border-blue-500 w-full"
                />
              </td>

              {/* Divider Line */}
              <td className="p-2 text-blue-400">|</td>

              {/* Right Side (Static) */}
              <td className="p-2 font-semibold">{attr.label}</td>
              <td className="p-2">{attr.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
