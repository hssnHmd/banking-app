import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BankCard from './BankCard';

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl text-blue-500 font-bold">
              {user.name[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name ">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-6 py-8">
        <div className="w-full flex justify-between">
          <h1 className="header-2">My Banks</h1>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus icon"
            />
            <p className="font-semibold text-14 text-gray-600">Add Bank</p>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={user.name}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute top-8 ring-0 z-0 w-[90%]">
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={user.name}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSideBar;
