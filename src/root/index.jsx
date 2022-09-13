import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddNewCar from '../components/AddCar';
import CarInfo from '../components/CarInfo';
import Category from '../components/Category';
import Header from '../components/Header';
import Home from '../components/Home';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar'
import SignIn from '../components/SignIn';
import sidebar from '../utils/sidebar'

const Root = () => {
  return (
    <div>
      {/* <div style={{display: 'flex'}}>
          <Sidebar/>
          <div style={{width: '100%'}}>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                {sidebar.map(({id, path, Element}) => 
                    <Route key={id} path={path} element={Element}/>
                )}
                <Route path='/addcar' element={<AddNewCar/>}/>
                <Route path='/asosiy/:id' element={<CarInfo/>}/>
            </Routes>
          </div>
      </div> */}
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