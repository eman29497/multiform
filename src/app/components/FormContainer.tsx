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
  const finalData = useSelector((state: RootState) => state.form.userData);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });
      
      if (response.ok) {
        console.log('Data successfully saved to MongoDB');
        dispatch(nextStep()); // Submit hone ke baad success screen par jayein
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Submission Error:', error);
    }
  };

  const handleNext = async () => {
    try {
      // Step-wise validation
      if (step === 0) {
        await validationSchema.validateAt('firstName', finalData);
        await validationSchema.validateAt('email', finalData);
      } else if (step === 1) {
        await validationSchema.validateAt('address', finalData);
        await validationSchema.validateAt('city', finalData);
      }

      setErrors({}); // Agar sab sahi hai to errors clear karein

      if (step === 1) {
        handleSubmit(); 
      } else {
        dispatch(nextStep());
      }
    } catch (err: any) {
      // Sirf current step ka error show karein
      setErrors({ [err.path]: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm">
        
        <div className="w-full mb-8 min-h-[200px]">
          {step === 0 && <StepOne errors={errors} />}
          {step === 1 && <StepTwo errors={errors} />}
          
          {step > 1 && (
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold text-green-600">Form Submitted! ✅</h2>
            </div>
          )}
        </div>

        {step < 2 && (
          <div className="flex justify-between mt-8 w-64 mx-auto">
            <button 
              disabled={step === 0}
              onClick={() => dispatch(prevStep())}
              className="px-4 py-2 bg-gray-200 rounded-lg text-sm disabled:opacity-50"
            >
              Back
            </button>
            
            <button 
              onClick={handleNext}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
            >
              {step === 1 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormContainer;