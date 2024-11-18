import React from 'react';
import Img from './Image';
import { Separator } from '@/components/ui/separator';
import Infos from './Infos';
import Link from 'next/link';

export default function Country() {
  return (
    <Link
      href="/"
      className="w-full max-w-[30rem] rounded-md border p-2 shadow-sm max-md:max-w-full"
    >
      <Img />
      <Separator className="mt-3" />
      <Infos />
    </Link>
  );
}
