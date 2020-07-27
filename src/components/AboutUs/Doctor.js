import React from 'react';
import Navbar from "../../UI/Navbar/Navbar";
const Doctor = () =>{
  return (
  <div>
  <Navbar />
    <div class="row p-3">
    <div class="col-md-12 text-center">
      <img class="doclogo" src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" />
    </div>
    <div class="col-md-12">
    <h2> About Us</h2>
    <p class="para container">
    <h4>What we do</h4>
We are on a mission to connect patients with doctors and make it accessible for a billion Indians. 
The best part - we are making it happen because of you!
<p>We need your help to succeed in our mission. There are various people out there who are emotionally disturbed. We need your help to cure their stress, physical or emotional. We provide a platform to connect them with great doctors like you.</p>
    </p>
    
    </div>
    </div>
</div>
  );
}

export default Doctor;
