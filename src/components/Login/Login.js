import React from 'react';
import Navbar from "../../UI/Navbar/Navbar";
const Login = () => {

    return (

        <div>
            <Navbar />

            <form>
            <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
            </form>

        </div>
    );
}

export default Login;
