import Header from "@/components/Header";
import HomeRightSider from "@/components/HomeRightSider";
import TotalBalanceDisplay from "@/components/TotalBalanceDisplay";

export default function Home() {
  const user = {
    $id: "123123",
    firstName: "Mads",
    lastName: "Brandt",
    email: "some@email.com",
  };

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
