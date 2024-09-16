import React from 'react';
import profile from '../assets/aaron.png';

export default function Testimonials() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-xl font-medium mb-8  text-slate-700">Testimonials</h3>
      <p className="text-center text-gray-400 text-xs md:text-sm max-w-6xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        culpa consequuntur cum facilis labore! Sint qui voluptatum corporis quos
        maiores tempora laborum voluptates, ea nulla ipsam a quasi ad pariatur
        eveniet earum ducimus et amet ab quisquam. Illo ipsum, enim unde numquam
        similique corporis ullam placeat omnis eaque, perferendis laboriosam!
      </p>
      <div className="flex items-center gap-2 mt-6">
        <img
          src={profile}
          alt="Adrian Chapman Profile"
          className="w-10 h-10 rounded-full"
        ></img>
        <div className="flex flex-col text-sm text-primary leading-4">
          <span>Adrian Chapman</span>
          <span>Head of Sales, Capita EB</span>
        </div>
      </div>
    </div>
  );
}
