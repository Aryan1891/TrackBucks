import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  // console.log(loggedIn);
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>    
            <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.name || 'Guest'}
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