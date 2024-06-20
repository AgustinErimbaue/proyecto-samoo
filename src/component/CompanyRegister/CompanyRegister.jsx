import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompanyRegister = () => {
  const initialValue = {
    CIF: "",
    companyName: "",
    email: "",
    numberOfEmployees: 0,
    password: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisable, setBtnDisable] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (fieldValues = data) => {
    let tempErrors = { ...errors };

    if ("CIF" in fieldValues) {
      if (!fieldValues.CIF) tempErrors.CIF = "CIF is required";
      else if (!/^[A-Za-z0-9]{8,10}$/.test(fieldValues.CIF)) tempErrors.CIF = "CIF must be 8-10 alphanumeric characters";
      else delete tempErrors.CIF;
    }

    if ("companyName" in fieldValues) {
      if (!fieldValues.companyName) tempErrors.companyName = "Company name is required";
      else delete tempErrors.companyName;
    }

    if ("email" in fieldValues) {
      if (!fieldValues.email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(fieldValues.email)) tempErrors.email = "Email is invalid";
      else delete tempErrors.email;
    }

    if ("numberOfEmployees" in fieldValues) {
      if (fieldValues.numberOfEmployees < 0 || fieldValues.numberOfEmployees > 20) tempErrors.numberOfEmployees = "Number of employees must be between 0 and 20";
      else delete tempErrors.numberOfEmployees;
    }

    if ("password" in fieldValues) {
      if (!fieldValues.password) tempErrors.password = "Password is required";
      else if (fieldValues.password.length < 8) tempErrors.password = "Password must be at least 8 characters long";
      else delete tempErrors.password;
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    validate({ [name]: value });
  };

  useEffect(() => {
    setBtnDisable(!validate());
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      
      console.log("Form data:", data);
      setData(initialValue);
    
    }
  };

  return (
    <div>
      <div>Register</div>
      <div>
        <form>
          <input
            type="text"
            name="CIF"
            placeholder="CIF"
            value={data.CIF}
            onChange={handleInputChange}
          />
          {errors.CIF && <p>{errors.CIF}</p>}
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={data.companyName}
            onChange={handleInputChange}
          />
          {errors.companyName && <p>{errors.companyName}</p>}
          <input
            type="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="number"
            name="numberOfEmployees"
            min="0"
            max="20"
            placeholder="number of employees"
            value={data.numberOfEmployees}
            onChange={handleInputChange}
          />
          {errors.numberOfEmployees && <p>{errors.numberOfEmployees}</p>}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <button onClick={handleSubmit} disabled={btnDisable}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegister;
