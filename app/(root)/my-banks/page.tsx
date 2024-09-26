import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import { getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React from 'react';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect('sign-in');

  const accounts = await getAccounts({ userId: loggedIn.$id });
  const accountsData = accounts?.data;
  if (!accounts) return;
  return (
    <div className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Banks Account"
          subtext="Effortlessly manage your bank activities."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your card</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={a.id}
                  account={a}
                  userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBanks;
