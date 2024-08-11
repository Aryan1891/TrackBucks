import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
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
    ssn: '123-45-6789'
  };
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>    
            <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account with efficient transactioins'
            />
           <TotalBalanceBox 
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={12369.5}
           
           />

            </header>
            
        </div>
        <RightSidebar
  user={loggedIn}
  transactions={[]}
  banks={[
  ]}
/>
    </section>
  )
}

export default Home