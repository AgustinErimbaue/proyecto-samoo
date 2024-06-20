import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/suplier/supService";
const CompanyLogin = () => {
  const initialState = {
    cif: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData))
  };

  return (
    <div>
      <div>Company login</div>
      <form>
        <input
          type="text"
          name="cif"
          value={formData.cif}
          placeholder="CIF"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleOnSubmit}>Login</button>
    </div>
  );
};

export default CompanyLogin;
