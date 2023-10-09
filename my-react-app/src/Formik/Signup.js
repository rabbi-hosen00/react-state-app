
import React from 'react';
import { useFormik } from 'formik';


const Signup = () => {

  const formik = useFormik({
    initialValues: {
      name : "",
      email: '',
      password: "",
  },
  onSubmit:( values, {resetForm}) => {
    console.log(values);
    resetForm({values: "" });
  },
});

  return (
    <div>
     <h2> User signup</h2>
     <form onSubmit={formik.handleSubmit}>
        <diV>
            <label htmlFor='name'> Name:</label>
            <input 
            type="text" 
            id="name" 
            name='name' 
            onChange={formik.handleChange} 
            value={formik.values.name}
            />
        </diV>
        <diV>
            <label htmlFor='email'> Email:</label>
            <input 
            type="text" 
            id="email" 
            name='email' 
            onChange={formik.handleChange} 
            value={formik.values.email}
            />
        </diV>
        <diV>
            <label htmlFor='password'> Password:</label>
            <input 
            type="text" 
            id="password" 
            name='password' 
            onChange={formik.handleChange} 
            value={formik.values.password}
            />
        </diV>
        <button type='submit'>submit</button>
     </form>
    </div>
  )
}

export default Signup;
