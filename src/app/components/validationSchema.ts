import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),

 email: Yup.string()
  .matches(
    /^[a-zA-Z0-9._%+-]+@(?!.*\.\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
    'Invalid email format'
  )
    .required('Email is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
});


