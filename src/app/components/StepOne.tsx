'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedField } from '../redux/formSlice';
import { RootState } from '../redux/store';

const StepOne = ({ errors }: { errors: Record<string, string> }) => {
  const dispatch = useDispatch();
  const { firstName, email } = useSelector((state: RootState) => state.form.userData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatedField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-gray-800 text-center">Personal Info</h2>
      
      <div className="space-y-1.5">
        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">First Name</label>
        <input 
          name="firstName" 
          placeholder="Enter your name"
          value={firstName} 
          onChange={handleChange}
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium"
        />
        {errors.firstName && <p className="text-red-500 text-[10px] font-bold">{errors.firstName}</p>}
      </div>

      <div className="space-y-1.5">
        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</label>
        <input 
          name="email" 
          placeholder="Enter your email"
          value={email} 
          onChange={handleChange}
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium"
        />
        {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email}</p>}
      </div>
    </div>
  );
};

export default StepOne;