'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { nextStep, prevStep } from '../redux/formSlice';
import { validationSchema } from './validationSchema';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const FormContainer = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const step = useSelector((state: RootState) => state.form.step);
  const userData = useSelector((state: RootState) => state.form.userData);

  const handleNext = async () => {
    try {
      const stepSchema = step === 0 
        ? validationSchema.pick(['firstName', 'email']) 
        : validationSchema;

      await stepSchema.validate(userData, { abortEarly: false });
      setErrors({});
      dispatch(nextStep());
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      err.inner.forEach((e: any) => validationErrors[e.path] = e.message);
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        {step === 0 ? <StepOne errors={errors} /> : <StepTwo errors={errors} />}
        
        <div className="flex justify-between mt-8">
          <button 
            type="button"
            onClick={() => dispatch(prevStep())} 
            disabled={step === 0}
            className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition disabled:opacity-50"
          >Back</button>
          <button 
            type="button"
            onClick={handleNext} 
            className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition"
          >
            {step === 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;