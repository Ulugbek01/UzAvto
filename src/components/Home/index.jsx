import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import { AddBtn, AddWrapper, Container, Label } from './style';


const Home = () => {
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

  return (
    <Container>
      <AddWrapper>
        <h2><Label/>Mashinalar</h2>
        <AddBtn><Plus className='add-icon'/>Mashina qo'shish</AddBtn>
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
          </tr>
        </thead>

        <tbody className='tbody'>
          {cars.map((car, index) => 
            <tr key={car._id}>
              <td>{index + 1}</td>
              <td>{car.marka.name}</td>
              <td>{car.gearbok}</td>
              <td>{car.tonirovka}</td>
              <td>{car.motor}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.distance}</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination current={current} onChange={onChange} defaultCurrent={1} total={50}/>
    </Container>
  )
}

export default Home