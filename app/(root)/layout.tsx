import { MobileNav } from "@/components/nav";
import Sidebar from "@/components/Sidebar";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = {
    $id: "123123",
    firstName: "Mads",
    lastName: "Brandt",
    email: "some@email.com",
  };

  return (
    <SignedIn>
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={user} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
            <div>
              <MobileNav user={user} />
            </div>
          </div>
          {children}
        </div>
      </main>
    </SignedIn>
  );
}
