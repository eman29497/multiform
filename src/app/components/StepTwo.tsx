'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedField } from '../redux/formSlice';
import { RootState } from '../redux/store';
const StepTwo = ({ errors }: { errors: Record<string, string> }) => {
  const dispatch = useDispatch();
  const { address, city } = useSelector((state: RootState) => state.form.userData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatedField({ field: e.target.name, value: e.target.value }));
  };
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-gray-800 text-center">Address Details</h2>
  
      <div className="space-y-1.5">
        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Address</label>
        <input 
          name="address" 
          placeholder="Type Your Address..." 
          value={address} 
          onChange={handleChange}
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium"
        />
        {errors.address && <p className="text-red-500 text-[10px] font-bold">{errors.address}</p>}
      </div>
      <div className="space-y-1.5">
        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">City</label>
        <input 
          name="city" 
          placeholder="Type City Here..." 
          value={city} 
          onChange={handleChange}
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium"
        />
        {errors.city && <p className="text-red-500 text-[10px] font-bold">{errors.city}</p>}
      </div>
    </div>
  );
};

export default StepTwo;