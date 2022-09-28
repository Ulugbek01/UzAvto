import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Container } from './style';

const {REACT_APP_BASE_URL: url} = process.env;
const Category = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [cars, setCars] = useState([])
  const {pathname} = useLocation();
  let id = pathname.slice(11);
  // console.log(param);

  useEffect(() => {
    fetch(`https://cartestwebapp.herokuapp.com/car?limit=5&page=1&categoryId=${id}`)
      .then((res) => res.json())
      .then((res) => setCars(res.data?.data))
  }, [id])

  console.log(cars);
  console.log(url);
  return (
    <Container>
      <button className='login' onClick={() => navigate('/signin')}>Kirish</button>
      <p>Bosh sahifa {'>'} Modellari {'>'} {cars?.length  > 0 ? cars[0].marka?.name+' turlari' : ''}</p>
      <div className='cars-wrapper'>
        {cars.map((car) => 
          <div key={car._id} className="to-center car-item" onClick={() => navigate(`/model/:${car._id}`)}>
            <img src={`${url}/${car.imgUrl}`} alt="car-img" />
            <h3 className='car-title'>{car.marka?.name}</h3>
            <p className='price'><span>Narxi</span>: {car.price}</p>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Category;