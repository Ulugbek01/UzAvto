import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Pagination } from 'antd';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as Delete} from '../../assets/icons/delete.svg';
import { AddBtn, AddWrapper, Container, Label } from './style';


const Home = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [current, setCurrent] = useState(2);

  const onChange = (page) => {
    setCurrent(page);
  };

  useEffect(()=> {
    fetch(`https://cartestwebapp.herokuapp.com/car?limit=5&page=${current}`)
    .then((res) => res.json())
    .then((res) => setCars(res.data?.data));
  },
  [current])

  const { mutate } = useMutation((id) => {
    return fetch(`https://cartestwebapp.herokuapp.com/car/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU'  
      }
    })
  })

  const onDelete = (id) => {
    mutate(id, {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    })
  }


  return (
    <Container>
      <AddWrapper>
        <h2><Label/>Mashinalar</h2>
        <AddBtn onClick={() => navigate('/addcar')}><Plus className='add-icon'/>Mashina qo'shish</AddBtn>
      </AddWrapper>
      <table width={'100%'} className='table'>
        <thead className='thead'>
          <tr>
            <th>#</th>
            <th>Markasi</th>
            <th>Gearbook</th>
            <th>Tanirovkasi</th>
            <th>Motor</th>
            <th>Year</th>
            <th>Color</th>
            <th>Distance</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className='tbody'>
          {cars.map((car, index) => 
            <tr key={car._id}>
              <td>{index + 1}</td>
              <td>{car.marka?.name || 'Chevrolet'}</td>
              <td>{car.gearbok}</td>
              <td>{car.tonirovka}</td>
              <td>{car.motor}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.distance}</td>
              <td onClick={()=> onDelete(car._id)} className='delete'><Delete/></td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination current={current} onChange={onChange} defaultCurrent={1} total={50}/>
    </Container>
  )
}

export default Home