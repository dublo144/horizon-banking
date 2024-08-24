import Header from "@/components/Header";
import HomeRightSider from "@/components/HomeRightSider";
import NoAccountsAlert from "@/components/NoAccountsAlert";
import TotalBalanceDisplay from "@/components/TotalBalanceDisplay";
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title={"Welcome"}
            userFirstName={user.firstName}
            subTitle={
              "Access and manage your account and transactions efficiently"
            }
          />
        </header>
        {/* Check if no accounts connected */}
        <NoAccountsAlert />
        <TotalBalanceDisplay
          accounts={[]}
          totalBanks={1}
          totalBalance={1562.35}
        />
        TRANSACTIONS
      </div>

      <HomeRightSider
        user={user}
        transactions={[]}
        creditCards={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
      />
    </section>
  );
}
