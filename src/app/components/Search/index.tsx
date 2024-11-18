import React from 'react';

export default function Search() {
  return (
    <div className="mt-20 w-full flex-1 rounded-md border bg-zinc-50 p-10 shadow-md max-2xl:p-8 max-sm:mt-10">
      <input
        type="text"
        placeholder="Encontre países pelo nome"
        className="w-full flex-1 rounded-full border-2 px-12 py-4 text-2xl text-slate-400 placeholder:text-slate-400 max-2xl:px-6 max-2xl:py-2 max-xl:text-base"
      />
    </div>
  );
}
