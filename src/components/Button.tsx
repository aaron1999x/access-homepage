import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  type: 'button' | 'submit' | 'reset';
}

export default function Button({ text, className, type }: ButtonProps) {
  return (
    <button
      className={`${className}  text-black text-sm py-2 px-6  uppercase`}
      type={type}
    >
      {text}
    </button>
  );
}
