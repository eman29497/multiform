import * as Yup from 'yup';
export const validationSchema = Yup.object({
    firstName:Yup.string().required('First Name is required'),
    email:Yup.string().email('Invalid email format').required('Email is required'),
    address:Yup.string().required('Address is required'),
    city:Yup.string().required('City is required'),
});