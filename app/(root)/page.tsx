import Header from "@/components/Header";
import TotalBalanceDisplay from "@/components/TotalBalanceDisplay";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title={"Welcome"}
            userFirstName="Mads"
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
      </div>
    </section>
  );
}
