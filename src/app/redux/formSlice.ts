import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface FormState{
    step:number;
    userData:{
        firstName:string;
        email:string;
        address:string;
        city:string;
    };
}
const initialState: FormState={
    step:0,
    userData:{
        firstName:'',
        email:'',
        address:'',
        city:''
    },

};
const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        updatedField: (state,action:PayloadAction<{field: keyof FormState['userData']; value:string}>)=>{
            state.userData[action.payload.field] = action.payload.value;
        },
        nextStep:(state) =>{state.step += 1;},
        prevStep:(state) =>{state.step -= 1;},
    },
});
export const {updatedField,nextStep,prevStep} = formSlice.actions;
export default formSlice.reducer;