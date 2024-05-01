import React from 'react';
import BackgroundImage from '../assets/backgroundimage.jpg';
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function Component() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('invalid email')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm Password is required')
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className=' h-screen relative'>
      <div className='flex flex-col items-center justify-center relative'>
        <img
          src={BackgroundImage}
          alt='background'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-blue-900 opacity-75' />
        <h1
          className='absolute left-4 top-4 object-contain font-bold text-2xl text-accent-white mx-16
        '
        >
          Auto Buy
        </h1>
        <div className='flex justify-center items-center h-screen'>
          <div className='-mt-20 w-96 h-[480px] z-10 bg-accent-white rounded-md'>
            <h2 className='mb-4 text-primary-normal text-lg font-semibold mt-5'>
              Sign Up to get Started
            </h2>
            <form className='relative' onSubmit={formik.handleSubmit}>
              <div
                className='mx-10 flex items-center mb-4 relative'
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <label
                  htmlFor='email'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  placeholder='example@gmail.com'
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80 outline-none'
                />
              </div>
              <p className='text-red-300'>{formik.errors.email}</p>
              <div
                className='mx-10 flex items-center mb-4 relative'
                isInvalid={formik.errors.password && formik.touched.password}
              >
                <label
                  htmlFor='password'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                >
                  password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80 outline-none'
                />
              </div>
              <p className='text-red-300 text-start'>{formik.errors.password}</p>
              <div
                className='mx-10 flex items-center mb-4 relative'
                isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}
              >
                <label
                  htmlFor='password'
                  className='absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white'
                >
                  confirmPassword
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  className='border border-gray-400 text-xs px-3 py-3 rounded w-80 outline-none'
                />
              </div>
              <p className='text-red-300 text-start'>{formik.errors.confirmPassword}</p>
              <label class='flex items-center mx-10 mb-5'>
                <input
                  type='checkbox'
                  className='form-checkbox bg-transparent text-gray-900 mr-2'
                  name='agree'
                />
                <span className='text-sm text-gray-900 font-extralight'>Remind me always</span>
              </label>
              {/* <Link to="/about"> */}
              <button
                type='submit'
                className='w-80 bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300'
              >
                Log In
              </button>
              {/* </Link> */}
            </form>
            <div className='flex items-center mx-10 mt-6'>
              <hr class='flex-grow border-t-2 border-gray-400 mr-2' />
              <span class='text-gray-500'>OR</span>
              <hr class='flex-grow border-t-2 border-gray-400 ml-2' />
            </div>
            <div className='flex flex-col items-center mx-10 gap-3 mt-6'>
              <Link to=''>
                <button
                  type='submit'
                  className='flex items-center gap-4 w-80 py-2 px-4 border border-x-2 border-y-2 rounded-md font-semibold text-center text-base text-gray-900 white bg-transparent hover:bg-secondary-normalhover hover:text-accent-white'
                >
                  <FaGoogle className='' />
                  SignIn with Google
                </button>
              </Link>
              <Link to=''>
                <button
                  type='submit'
                  className='flex items-center gap-4 w-80 py-2 px-4 border border-x-2 border-y-2 rounded-md font-semibold text-center text-base text-gray-900 white bg-transparent hover:bg-secondary-normalhover hover:text-accent-white'
                >
                  <FaApple className='' />
                  SignIn with Google
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='z-10 flex flex-col items-center mx-10 lg:-mt-20 mb-5'>
          <h2 className='mb-4 text-accent-white text-lg font-semibold '>
            Already have an account?
          </h2>
          <button
            type='submit'
            className='w-40 bg-accent-white text-gray-900 py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300'
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
