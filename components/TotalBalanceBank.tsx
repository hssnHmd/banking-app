import { formatAmount } from '@/lib/utils';
import CountUp from 'react-countup';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBank = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-18 font-semibold text-gray-900">
          {totalBanks} Bank accounts
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">total current Balance</p>
          <div className="flex-center gap-2 text-24 lg:text-30 flex-1 font-semibold text-gray-900">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBank;
