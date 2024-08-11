// import MobileNav from "@/components/MobileNav";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = await getLoggedInUser();
  const loggedIn = {
    $id: '123456789',
    email: 'aryan.jain@example.com',
    userId: 'user_001',
    dwollaCustomerUrl: 'https://api.dwolla.com/customers/12345678',
    dwollaCustomerId: '12345678',
    firstName: 'aryan',
    lastName: 'jain',
    name: 'aryan jain',
    address1: '1234 Main St',
    city: 'Mumbai',
    state: 'MH',
    postalCode: '400001',
    dateOfBirth: '1995-08-15',
    ssn: '1234-1234-1234'
  };
  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children} 
      </div>
    </main>
  );
}