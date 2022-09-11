import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddNewCar from '../components/AddCar';
import CarInfo from '../components/CarInfo';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'
import SignIn from '../components/SignIn';
import sidebar from '../utils/sidebar'

const Root = () => {

  const {pathname} = window.location;
  console.log(pathname);

  return (
    <div style={{display: 'flex'}}>
        {pathname !== '/signin' && <Sidebar/>}
        <div style={{width: '100%'}}>
          {pathname !== '/signin' && <Header/>}
          <Routes>
              {sidebar.map(({id, path, Element}) => 
                  <Route key={id} path={path} element={Element}/>
              )}
              <Route path='/addcar' element={<AddNewCar/>}/>
              <Route path='/asosiy/:id' element={<CarInfo/>}/>
              <Route path='/signin' element={<SignIn/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Root