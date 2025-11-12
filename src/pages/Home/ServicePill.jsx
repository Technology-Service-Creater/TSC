import React from 'react';

function ServicePill({ title, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        `font-[Montserrat] font-medium text-xs sm:text-base px-4 py-3 rounded-full border transition-all duration-200 w-fit max-w-full text-center break-words ` +
        (selected
          ? 'bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white shadow-sm'
          : 'bg-white text-zinc-800 border-zinc-400 hover:bg-zinc-100')
      }
      style={{ outline: 'none' }}
    >
      {title}
    </button>
  );
}

export default ServicePill;
