import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login'
import Listofjob from './Pages/ListofJob/Listofjob'
import JobScheduler from './Pages/JobScheduler/JobScheduler'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/listofjob" element={<Listofjob />} />
          <Route path="/jobschedule" element={<JobScheduler />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
  

export default App
