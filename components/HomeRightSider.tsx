import { User } from "@/types/types";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import CreditCard from "./CreditCard";

type Props = {
  user: User;
  transactions: any[];
  creditCards: any[];
};

export default function HomeRightSider({
  user,
  transactions,
  creditCards,
}: Props) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-emerald-500">
              {user.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My cards</h2>
          <Link href={"/"} className="flex items-center gap-2">
            <Plus />
            <h2 className="text-14 font-semibold text-gray-600">Add card</h2>
          </Link>
        </div>

        {creditCards?.length > 0 ? (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <CreditCard
                key={creditCards[0].$id}
                account={creditCards[0]}
                cardHoldersName={creditCards[0].cardHoldersName}
                showBalance={false}
              />
            </div>
            {creditCards[1] ? (
              <div className="absolute right-0 top-12 z-0 hover:z-20 hover:top-16">
                <CreditCard
                  key={creditCards[1].$id}
                  account={creditCards[1]}
                  cardHoldersName={creditCards[1].cardHoldersName}
                  showBalance={false}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </aside>
  );
}
