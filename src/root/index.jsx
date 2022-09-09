import React from 'react'
import { Route, Routes } from 'react-router-dom';
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
        </Routes>
    </div>
  )
}

export default Root