import React from 'react';
import '../../src/App.css';
import FirstGrid from '../body/first_grid';
import SecondGrid from '../body/second_grid';
import NewsLetter from '../body/newsletter';
import SlidingCarousel from '../slidingcarousel/carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  // const adminUser ={
  //   email: "admin@gmail.com",
  //   passoword: "admin@123"
  // }
  // const [user, setUser] = useState({nmae:"", email:""});
  // const [error, setError] = useState("");

  // const Login = () => {
  //   console.log(details);
  // }
  
  // const Logout = () => {
  //   console.log("Logout");
  // }

  return (
  <div>
    <div>
      <SlidingCarousel />
    </div>

    <div className='grid'>
      <FirstGrid />
    </div>

    <div className="grid2">
      <SecondGrid />
    </div>

    <div className="grid3">
      <NewsLetter/>
    </div>

  </div>
  );
}

export default Home;
