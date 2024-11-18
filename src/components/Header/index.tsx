import React from 'react';

export default function Header() {
  return (
    <div className="flex h-32 w-full flex-1 items-center px-10 shadow-md max-2xl:h-20">
      <p className="flex gap-2 text-2xl font-bold max-2xl:text-xl max-sm:text-base">
        <span>Countries</span>
        <span className="text-blue-800">Info</span>
      </p>
    </div>
  );
}
