import React from 'react'

const Circles = () => {

	return (
    <div
      className={`relative w-4 h-4 -left-[1.88rem] flex items-center justify-center`}
    >
      <div className="absolute w-full h-full rounded-full stroke-0 bg-secondary" />
      <div className="rounded-full h-1/2 w-1/2 bg-slate-50 dark:fill-slate-50 fill-cyan-600 animate-pulse" />
    </div>
  );
}

export default Circles