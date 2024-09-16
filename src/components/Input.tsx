import React from 'react';

interface InputProps {
  placeholder: string;
  className?: string;
}

export default function Input({ placeholder, className }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${className} p-4 placeholder:tracking-tight placeholder:text-sm`}
    />
  );
}
