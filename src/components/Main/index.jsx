import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { CarsWrapper, Container } from './style';
import chevrolet from '../../assets/img/chevrolet.png';

const Main = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  useEffect(()=> {
    fetch('https://cartestwebapp.herokuapp.com/category/marka?limit=5&page=1')
      .then((res) => res.json())
      .then((res) => setCategories(res.data?.data))
  }, [])

  console.log(categories);

  return (
    <Container>
      <button className='login' onClick={() => navigate('/signin')}>Kirish</button>
      <p>Bosh sahifa {'>'} modellari</p>
      <h1 className='title'>Modellari</h1>
      <CarsWrapper>
        {categories.map((category) => 
          <div className='car-item' key={category._id} onClick={() => navigate(`/category/:${category._id}`)}>
            <img src={category.imgUrl && chevrolet} alt="car-img" />
            <h3 className='category-title'>{category.name}</h3>
          </div>
        )}
      </CarsWrapper>
    </Container>
  )
}

export default Main;