import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <button className='sign-in' onClick={()=> navigate('/signin')}>Kirish</button>
    </Container>
  )
}

export default Header;