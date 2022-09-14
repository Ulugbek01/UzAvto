import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Pannellum } from 'pannellum-react';
import { Container } from './style';
import { ReactComponent as HomeFill } from '../../assets/icons/home-fill.svg';

const CarInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carInfo, setCarInfo] = useState({});
  const [select, setSelect] = useState('tashqi');
  
  useEffect(() => {
    fetch(`https://cartestwebapp.herokuapp.com/car/${id.replace(':', '')}`)
    .then((res) => res.json())
    .then((res) => setCarInfo(res.data))
  }, [id])

  const signIn = () => {
    navigate(`${localStorage.getItem('token') ? '/' : '/signin'}`)
    localStorage.removeItem('token');
  }

  console.log(carInfo);

  return (
    <Container>
      <button className='login' onClick={signIn}>{localStorage.getItem('token') ? 'Chiqish' : 'Kirish'}</button>
      <p><span className='c-pointer' onClick={() => navigate('/')}>Bosh sahifa</span> {'>'} <span onClick={() => navigate(-1)} className="c-pointer">Modellar</span> {'>'} {carInfo?.marka?.name} turlari</p>
      <h2 className='title  '>Moddellari</h2>
      <div className='car-info__wrapper'>
        <div className='car-info'>
          <h2>{carInfo.marka?.name}</h2>
          <p>{carInfo.price} so'm dan</p>
          <img className='car-left__img' src={`https://cartestwebapp.herokuapp.com/${carInfo.imgUrl}`} alt="car-img" />
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
          <div className='flex-box' style={{justifyContent: 'space-between'}}>
            <h2>{carInfo.marka?.name}</h2>
            <div><HomeFill className='home-fill' onClick={()=> navigate('/')}/></div>
          </div>
          <Pannellum
            width="100%"
            height="420px"
            image={select === 'tashqi' ? `https://cartestwebapp.herokuapp.com/${carInfo?.imgUrlAutside}` : `https://cartestwebapp.herokuapp.com/${carInfo?.imgUrlInside}`}
            pitch={10}
            yaw={180}
            hfov={500}
            autoRotate={6}
            autoLoad
            showZoomCtrl={false}
          >
          </Pannellum>
            <p className='to-center mt'>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
          
          <div className='flex-box selected-btns'>
            <div className='flex-box'>
              <label htmlFor="tashqi">Tashqi makon</label>
              <input value={'tashqi'} onClick={()=> setSelect('tashqi')} type={'radio'} name="img" id='tashqi'/>
            </div>
            <div className='flex-box'>
              <label htmlFor="ichki">Ichki makon</label>
              <input value={'ichki'} onClick={()=> setSelect('ichki')} type={'radio'} name="img" id='ichki'/>
            </div>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default CarInfo