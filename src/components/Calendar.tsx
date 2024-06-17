'use client'

import { useEffect } from 'react';
import { getMonthlyMatrix } from  '../utils'


export default function Calendar() {

  useEffect(() => {
    console.log(getMonthlyMatrix())
  }, [])

  return (
    <></>
  );
}
