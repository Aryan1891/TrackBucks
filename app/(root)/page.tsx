import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "aryan"}
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
    </section>
  )
}

export default Home