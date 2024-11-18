import React from 'react';
import Country from '../Country';

export default function Countries() {
  return (
    <div className="mt-20 grid flex-1 grid-cols-5 gap-8 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:mt-10 max-sm:grid-cols-1">
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </div>
  );
}
