'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedField } from '../redux/formSlice';
import { RootState } from '../redux/store';
const StepTwo = ({ errors }: { errors: any }) => {
  const dispatch = useDispatch();
  const { address, city } = useSelector((state: RootState) => state.form.userData);
  const handleChange = (field: 'address' | 'city', value: string) => {
    dispatch(updatedField({ field, value }));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Address Details</h2>
      </div>
      <div className="w-64 space-y-4">
        <div>
          <label className="block mb-1 text-[11px] font-semibold text-gray-400 uppercase">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Type Your Address..."
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 outline-none"
          />
          {errors?.address && (
            <p className="text-red-500 text-[10px] mt-1">{errors.address}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-[11px] font-semibold text-gray-400 uppercase">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => handleChange('city', e.target.value)}
            placeholder="Type City Here..."
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 outline-none"
          />
          {errors?.city && (
            <p className="text-red-500 text-[10px] mt-1">{errors.city}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;