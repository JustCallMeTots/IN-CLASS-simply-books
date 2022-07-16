import React from 'react'
import { useRouter } from 'next/router';

export default function New() {
    const router = useRouter();
    const { firebaseKey } = router.query;
  return (
    <div>new author form goes here biiiiitch</div>
  )
};
