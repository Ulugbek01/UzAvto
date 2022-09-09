import React from 'react'
import {NavLink} from 'react-router-dom';
import sidebar from '../../utils/sidebar'
import { Container } from './style'

const Sidebar = () => {
  return (
    <Container>
      {sidebar.map((item) => {
        const {icon: Icon} = item;
        return (
          <NavLink className={'nav-link'} key={item.id} to={item.path}>{<Icon/>}<span className='title'>{item.title}</span></NavLink>
        )
      } 
      )}
    </Container>
  )
}

export default Sidebar