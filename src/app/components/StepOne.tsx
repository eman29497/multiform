'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedField } from '../redux/formSlice';
import { RootState } from '../redux/store';
const StepOne = ({ errors }: { errors: any }) => {
  const dispatch = useDispatch();
  const { firstName, email } = useSelector((state: RootState) => state.form.userData);

  const handleChange = (field: 'firstName' | 'email', value: string) => {
    dispatch(updatedField({ field, value }));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold mb-4">Personal Info</h2>
      </div>
      <div className="w-64 space-y-4">
        <div>
          <label className="block text-[11px] font-semibold text-gray-400 uppercase">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="Enter First Name..."
            className="w-full px-3 py-2 border text-sm rounded-lg border-gray-200 outline-none"
          />
          {errors?.firstName && (
            <p className="text-red-500 text-[10px] mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-gray-400 uppercase">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Enter Email Here..."
            className="w-full px-3 py-2 border text-sm rounded-lg border-gray-200 outline-none"
          />
          {errors?.email && (
            <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default StepOne;