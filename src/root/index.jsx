import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddNewCar from '../components/AddCar';
import CarInfo from '../components/CarInfo';
import Category from '../components/Category';
import Home from '../components/Home';
import Main from '../components/Main';
import SignIn from '../components/SignIn';

const Root = () => {
  return (
    <div>
          {/* <Routes>
              <Route/>
              {sidebar.map(({id, path, Element}) => 
                  <Route key={id} path={path} element={Element}/>
              )}
          </Routes> */}
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/category/:id' element={<Category/>}/>
          <Route path='/model/:id' element={<CarInfo/>}/>
          <Route path='/asosiy' element={<Home/>}/>
          <Route path='/asosiy/:id' element={<CarInfo/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/addcar' element={<AddNewCar/>}/>
        </Routes>
    </div>
  )
}

export default Root