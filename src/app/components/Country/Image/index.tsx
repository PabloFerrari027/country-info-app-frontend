import Img from 'next/image';
import React from 'react';

export default function Image() {
  return (
    <div className="relative h-52 w-full overflow-hidden rounded-md max-2xl:h-32 max-sm:h-44">
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"
        alt=""
        fill={true}
        priority={true}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
