import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const AddCar = () => {
  const navigate = useNavigate();
  const [carInfo, setCarInfo] = useState({
    imgUrl: '',
    imgUrlInside: '',
    imgUrlAutside: '',
    price: '',
    year: '',
    description: '',
    tonirovka: '',
    motor: '',
    color: '',
    distance: '',
    gearbok: '',
    categoryId: '',
  });

  const onChange = (e)=> {
    setCarInfo({...carInfo, [e.target.name]: e.target.value});
  }

  const { mutate } = useMutation(()=> {
    return fetch('https://cartestwebapp.herokuapp.com/car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU`
      },
      body: JSON.stringify({
        imgUrl: "img-a463268af6f271bc3adac0871d505b4a.jpg",
        imgUrlInside: "img-db607b3fdb99095051f37c849887ace7.jpg",
        imgUrlAutside: "img-a463268af6f271bc3adac0871d505b4a.jpg",
        price: 222000000,
        year: 2021,
        description: "ideal",
        tonirovka: "bor",
        motor: 1.6,
        color: 'qora',
        distance: 18901,
        gearbok: 'avtomat',
        categoryId: '23180c53d0953487569045c7'
      })
    })
  });

  const onSave = () => {
    mutate({}, {
      onSuccess: ((res) => {
        console.log(res);
        if(res.status === 200) {
          navigate('/asosiy');
        }
        else {
          console.log('not success');
        }
      }),
      onError: ((err) => console.log(err))
    })
  }

  console.log(carInfo);
  
  return (
    <Container>
      <h2>Mashina Qo'shish</h2>
      <div className='form-control'>
        <div>
          <label htmlFor="motor">Motor</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='motor' id='motor'/>
          <label htmlFor="color">Color</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='color' id='color'/>
          <label htmlFor="gearbok">Gearbok</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='gearbok' id='gearbok'/>
          <label htmlFor="interImg">Rasm 360 ichki makon</label>
          <input onChange={onChange} type={'file'} placeholder='Kiriting' name='interImg' id='interImg'/>
          <label htmlFor="deseription">Deseription</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='deseription' id='deseription'/>
        </div>
        <div>
          <label htmlFor="tonirovka">Tanirovkasi</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='tonirovka' id='tonirovka'/>
          <label htmlFor="year">Year</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='year' id='year'/>
          <label htmlFor="distance">Distance</label>
          <input onChange={onChange} type="text" placeholder='Kiriting' name='distance' id='distance'/>
          <label htmlFor="price">Narxi</label>
          <input onChange={onChange} type='text' placeholder='Kiriting' name='price' id='price'/>
          <label htmlFor="modelImg">Modeli turi uchun rasm</label>
          <input onChange={onChange} type={'file'} placeholder='Kiriting' name='modelImg' id='modelImg'/>
        </div>
      </div>

      <button onClick={onSave} className='save-btn'>Saqlash</button>
    </Container>
  )
}

export default AddCar;