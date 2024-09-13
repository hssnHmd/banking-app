import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBank from '@/components/TotalBalanceBank';

const Home = () => {
  const loggedIn = {
    firstName: 'Hassan',
    lastName: 'Hmd',
    email: 'hassan@gmail.com',
  };
  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="access and manage your account and transaction efficiently"
          />
          <TotalBalanceBank
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.24}
          />
        </header>
        RecentTrasaction
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.23 }, { currentBalance: 123.23 }]}
      />
    </section>
  );
};

export default Home;
