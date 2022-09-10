import React from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const AddCar = () => {
  const navigate = useNavigate();

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
  
  return (
    <Container>
      <h2>Mashina Qo'shish</h2>
      <div className='form-control'>
        <div>
          <label htmlFor="motor">Motor</label>
          <input type="text" placeholder='Kiriting' name='motor' id='motor'/>
          <label htmlFor="color">Color</label>
          <input type="text" placeholder='Kiriting' name='color' id='color'/>
          <label htmlFor="gearbook">Gearbook</label>
          <input type="text" placeholder='Kiriting' name='gearbook' id='gearbook'/>
          <label htmlFor="interImg">Rasm 360 ichki makon</label>
          <input type={'file'} placeholder='Kiriting' name='interImg' id='interImg'/>
          <label htmlFor="deseription">Deseription</label>
          <input type="text" placeholder='Kiriting' name='deseription' id='deseription'/>
        </div>
        <div>
          <label htmlFor="tanirovka">Tanirovkasi</label>
          <input type="text" placeholder='Kiriting' name='tanirovka' id='tanirovka'/>
          <label htmlFor="year">Year</label>
          <input type="text" placeholder='Kiriting' name='year' id='year'/>
          <label htmlFor="distance">Distance</label>
          <input type="text" placeholder='Kiriting' name='distance' id='distance'/>
          <label htmlFor="narxi">Narxi</label>
          <input type='text' placeholder='Kiriting' name='narxi' id='narxi'/>
          <label htmlFor="modelImg">Modeli turi uchun rasm</label>
          <input type={'file'} placeholder='Kiriting' name='modelImg' id='modelImg'/>
        </div>
      </div>

      <button onClick={onSave} className='save-btn'>Saqlash</button>
    </Container>
  )
}

export default AddCar;