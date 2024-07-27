'use client'
import React from 'react';
import CountUp from 'react-countup';

// Custom formatting function for Indian numbering system with rupee symbol
const formatIndianNumber = (amount: number) => {
  const x = amount.toFixed(2).split('.');
  const x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const lastThree = x1.substring(x1.length - 3);
  const otherNumbers = x1.substring(0, x1.length - 3);
  const formattedNumber = otherNumbers !== '' ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree : lastThree;
  return '₹' + formattedNumber + x2;
};

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp 
        decimals={2}
        decimal="."
        end={amount}
        formattingFn={formatIndianNumber}
      />
    </div>
  );
};

export default AnimatedCounter;

