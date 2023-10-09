import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';


const Signup = () => {

  const formik = useFormik({
    initialValues: {
      name : "",
      email: '',
      password: "",
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  }),
  onSubmit:( values, {resetForm}) => {
    console.log(values);
    resetForm({values: "" });
  },
});

const nameError = formik.touched.name && formik.errors.name && <span style={{color : 'red'}}>{formik.errors.name}</span>
const emailError =formik.touched.email && formik.errors.email && <span style={{color : 'red'}}>{formik.errors.email}</span>
const passwordError = formik.touched.password &&formik.errors.password && <span style={{color : 'red'}}>{formik.errors.password}</span >

const renderFrom =<form onSubmit={formik.handleSubmit}>
<diV>
    <label htmlFor='name'> Name:</label>
    <input 
    type="text" 
    id="name" 
    name='name' 
    onChange={formik.handleChange} 
    value={formik.values.name}
    />
    <br />
    { nameError}
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
    <br />
     {emailError}
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
    <br />
    {passwordError}
</diV>
<button type='submit'>submit</button>
</form>

  return (
    <div>
     <h2> User signup</h2>
     {renderFrom}
    </div>
  )
}

export default Signup;