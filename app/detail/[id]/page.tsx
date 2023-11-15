'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Detail() {
  let movieId = '0';
  //pathvariable 추출
  const router = usePathname();
  const numberPart = router.match(/\d+/);
  if (numberPart) {
    movieId = numberPart[0];
  }

  return (
    <div>
      <h1>{movieId}상세페이지</h1>
    </div>
  );
}
