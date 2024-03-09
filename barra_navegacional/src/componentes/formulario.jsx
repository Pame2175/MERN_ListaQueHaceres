import React, { useContext, useState } from 'react';
import UserContext from './UserContext';

const Form = () => {
  const { setUsername } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setUsername(newValue); 
  };

  {/*const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
    setInputValue('');
  }; */}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
     
        <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">Nuevo nombre de usuario:</label>

          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="form-control"
            placeholder="Nuevo nombre de usuario"
          />
        </div>
       {/* <button type="submit" className="btn btn-primary">Cambiar nombre</button> */} 
      
    </div>
  );

}

export default Form;
