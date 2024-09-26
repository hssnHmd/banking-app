import HeaderBox from '@/components/HeaderBox';
import PaymentTransferForm from '@/components/PaymentTransferForm';
import { getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React from 'react';

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect('sign-in');

  const accounts = await getAccounts({ userId: loggedIn.$id });
  const accountsData = accounts?.data;
  if (!accounts) return;
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific detail or notes related the payment transfer"
      />
      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
