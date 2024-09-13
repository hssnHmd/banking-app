'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp prefix="$" decimals={2} duration={4} decimal="," end={amount} />
    </div>
  );
};

export default AnimatedCounter;
