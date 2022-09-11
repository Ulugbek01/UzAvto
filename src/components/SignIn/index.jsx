import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const SignIn = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    phoneNumber: '',
    password: ''
  })
  const [error, setError] = useState('');

  const {mutate} = useMutation(()=> {
    return fetch('https://cartestwebapp.herokuapp.com/employee/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU"
      },
      body: JSON.stringify({
        phoneNumber: userInfo.phoneNumber,
        password: userInfo.password,
      })
    }).then((res) => res.json());
  })

  const onSubmit = () => {
    if(userInfo.phoneNumber && userInfo.password) {
      mutate({}, {
        onSuccess: ((res) => {
          if(res.message === "Success"){
            localStorage.setItem('token', `${res.data?.token}`)
            navigate('/asosiy');
          }
          else {
            setError('Login yoki password xato')
          }
        }),
        onError: ((err) => setError( err && 'Login yoki password xato'))
      })
    }
    else {
      alert('malumot kiriting')
    }
  }
  
  return (
    <Container>
      <h2>Tizimga Kirish</h2>
      <input onChange={(e) => {setUserInfo({...userInfo, [e.target.name]: e.target.value}); setError('')}} name='phoneNumber' type={'tel'} placeholder='phoneNumber'/>
      <input onChange={(e) => {setUserInfo({...userInfo, [e.target.name]: e.target.value}); setError('')}} name='password' type={'password'} placeholder='password'/>
      <span className='error'>{error}</span>
      <button className='enter-btn' onClick={onSubmit}>Kirish</button>
    </Container>
  )
}

export default SignIn;