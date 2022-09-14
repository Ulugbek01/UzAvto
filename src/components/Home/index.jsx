import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Pagination } from 'antd';
import { AddBtn, AddWrapper, Container, Label } from './style';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as Delete} from '../../assets/icons/delete.svg';
import {ReactComponent as ArrowRight} from '../../assets/icons/arrow-right.svg';


const Home = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [current, setCurrent] = useState(1);
  const [id, setId] = useState(null);

  const onChange = (page) => {
    setCurrent(page);
  };

  useEffect(()=> {
    fetch(`https://cartestwebapp.herokuapp.com/car?limit=5&page=${current}`)
    .then((res) => res.json())
    .then((res) => setCars(res.data?.data));
  },
  [current, id])

  const { mutate } = useMutation((id) => {
    return fetch(`https://cartestwebapp.herokuapp.com/car/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    })
  })

  const onDelete = (id) => {
    setId(id);
    mutate(id, {})
  }

  return (
    <Container>
      <AddWrapper>
        <h2><Label onClick={() => navigate('/')} className="c-pointer"/>Mashinalar</h2>
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
              <td className='flex-box'><Delete onClick={()=> onDelete(car._id)} className='delete'/><ArrowRight onClick={()=> navigate(`/asosiy/:${car._id}`)} className='arrow-btn'/></td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination current={current} onChange={onChange} defaultCurrent={1} total={50}/>
    </Container>
  )
}

export default Home