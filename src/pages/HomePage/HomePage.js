import React from 'react'
import HeroCart from '../../components/HeroCart';
import Banner from "../../components/Banner";
import MiniBanner from "../../components/MiniBanner";
import PersonCarusel from "../../components/PersonCarusel";
import Spacingtech from "../../components/Spacingtech";
import Latest from "../../components/Latest";
import LimitCarusel from "../../components/LimitCarusel";
function HomePage() {
  return (
    <div>
         <HeroCart/>
         <Banner />
      <LimitCarusel/>
      <MiniBanner/>
      <PersonCarusel/>
      <Spacingtech/>
      <Latest/>
    </div>
  )
}

export default HomePage