import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/suplier/supSlice";

const CompanyRegister = () => {
  const initialValue = {
    cif: "", 
    name: "", 
    email: "", 
    employes: 0, 
    password: "", 
  };

  const [data, setData] = useState(initialValue);
  const [btnDisable, setBtnDisable] = useState(true);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, message } = useSelector((state) => state.sup);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(reset());
    }
  }, [isSuccess, navigate, dispatch]);

  const validate = (fieldValues = data) => {
    let tempErrors = { ...errors };

    if ("cif" in fieldValues) {
      if (!fieldValues.cif) tempErrors.cif = "CIF is required";
      else if (!/^[A-Za-z0-9]{8,10}$/.test(fieldValues.cif))
        tempErrors.cif = "CIF must be 8-10 alphanumeric characters";
      else delete tempErrors.cif;
    }

    if ("name" in fieldValues) {
      if (!fieldValues.name) tempErrors.name = "Name is required";
      else delete tempErrors.name;
    }

    if ("email" in fieldValues) {
      if (!fieldValues.email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(fieldValues.email))
        tempErrors.email = "Email is invalid";
      else delete tempErrors.email;
    }

    if ("employes" in fieldValues) {
      if (fieldValues.employes < 0 || fieldValues.employes > 20)
        tempErrors.employes = "Number of employees must be between 0 and 20";
      else delete tempErrors.employes;
    }

    if ("password" in fieldValues) {
      if (!fieldValues.password) tempErrors.password = "Password is required";
      else if (fieldValues.password.length < 8)
        tempErrors.password = "Password must be at least 8 characters long";
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
      dispatch(register(data));
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
            name="cif"
            placeholder="CIF"
            value={data.cif}
            onChange={handleInputChange}
          />
          {errors.cif && <p>{errors.cif}</p>}
          <input
            type="text"
            name="name"
            placeholder="Company name"
            value={data.name}
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
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
            name="employes"
            min="0"
            max="20"
            placeholder="Number of employees"
            value={data.employes}
            onChange={handleInputChange}
          />
          {errors.employes && <p>{errors.employes}</p>}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <button onClick={handleSubmit} disabled={btnDisable}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegister;
