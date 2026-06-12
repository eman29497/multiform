import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface FormState{
    step:number;
    userData:{
        firstName:string;
        email:string;
        address:string;
        city:string;
        [key: string]:string;
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
        updatedField: (state,action:PayloadAction<{field: string; value:string}>)=>{
            const {field,value} = action.payload;
            state.userData[field] = value;
        },
        nextStep:(state) =>{state.step += 1;},
        prevStep:(state) =>{state.step -= 1;},
    },
});
export const {updatedField,nextStep,prevStep} = formSlice.actions;
export default formSlice.reducer;