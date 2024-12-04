import React from 'react'
import TabComponent from '../../Components/TabComponent/TabComponent'
import Listofjob from '../ListofJob/Listofjob'
import JobScheduler from '../JobScheduler/JobScheduler'

const Home = () => {
  return (
    <div>
      <TabComponent/>
      <Listofjob/>
      <JobScheduler/>
    </div>
  )
}

export default Home
