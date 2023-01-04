import React, { useState } from "react";

function Singup() {
  const [people, setPeople] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    number: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeople({ ...people, [name]:value});
  };
  return (
    <div> 
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />{" "}
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <input
          type="number"
          name="number"
          placeholder="Enter Mobile"
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          onChange={handleChange}
        />{" "}
        <br />
        <select id="gender" onChange={handleChange}>
          <option value="Male">Volvo</option>
          <option value="Female">Saab</option>
          <option value="Unpecified">Opel</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Singup;
