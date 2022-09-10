import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddNewCar from '../components/AddCar';
import Sidebar from '../components/Sidebar'
import sidebar from '../utils/sidebar'

const Root = () => {
  return (
    <div style={{display: 'flex'}}>
        <Sidebar/>
        <Routes>
            {sidebar.map(({id, path, Element}) => 
                <Route key={id} path={path} element={Element}/>
            )}
            <Route path='/addcar' element={<AddNewCar/>}/>
        </Routes>
    </div>
  )
}

export default Root