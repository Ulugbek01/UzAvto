import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from './style';
import carImg1 from '../../assets/img/car-img1.png'
import tashqi from '../../assets/img/tashqi.png'
import ichki from '../../assets/img/ichki.png'

const CarInfo = () => {
  const { id } = useParams();
  const [carInfo, setCarInfo] = useState({});
  const [select, setSelect] = useState('tashqi');
  
  useEffect(() => {
    fetch(`https://cartestwebapp.herokuapp.com/car/${id.replace(':', '')}`)
    .then((res) => res.json())
    .then((res) => setCarInfo(res.data))
  }, [id])

  console.log(carInfo);


  return (
    <Container>
      <h2>Moddellari</h2>
      <div className='car-info__wrapper'>
        <div className='car-info'>
          <h2>{carInfo.marka?.name}</h2>
          <p>{carInfo.price} so'm dan</p>
          <img src={carInfo.imgUrl && carImg1} alt="car-img" />
          <p><b>Marka: </b>{carInfo.marka?.name}</p>
          <p><b>Tanirovkasi: </b>{carInfo.tonirovka}</p>
          <p><b>Motor: </b>{carInfo.motor}</p>
          <p><b>Year: </b>{carInfo.price}</p>
          <p><b>Color: </b>{carInfo.color}</p>
          <p><b>Distance: </b>{carInfo.distance} km</p>
          <p><b>Gearbook: </b>{carInfo.gearbok}</p>
          <p><b>Deseription: </b>{carInfo.description}</p>
          <p style={{marginTop: '10px'}}><b>Jami: </b>{carInfo.price} so'm dan</p>
        </div>
        <div className='full-car__img'>
          <h2>Chevrolet Malibu</h2>
          <img width='100%' src={select === 'tashqi' ? tashqi : ichki} alt="car-img" />
            <p className='to-center mt'>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
          
          <div className='flex-box selected-btns'>
            <div className='flex-box'>
              <label htmlFor="tashqi">Tashqi makon</label>
              <input onClick={()=> setSelect('tashqi')} type={'radio'} name="img" id='tashqi'/>
            </div>
            <div className='flex-box'>
              <label htmlFor="ichki">Ichki makon</label>
              <input onClick={()=> setSelect('ichki')} type={'radio'} name="img" id='ichki'/>
            </div>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default CarInfo