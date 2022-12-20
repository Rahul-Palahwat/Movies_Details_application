import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { data_all } from "../../../utils/api";
import { STATUS } from "../../../utils/constants";

interface InitialState{
    getDataStatus: string,
    getCommentStatus: string,
    items: any,
    error: string,
}
const initialState:InitialState = {
    getDataStatus : STATUS.NOT_STARTED,
    getCommentStatus : STATUS.NOT_STARTED,
    items: [],
    error: '',
}

export const getTotalItems = createAsyncThunk ( 'data/all' , async(payload: {} , thunkAPI) => {
    const response = await data_all.get(`` , payload)
    console.log("response", response);
    let {ok , data , problem} = response
    if(ok) {
        return data
    } else {
        return thunkAPI.rejectWithValue(problem)
    }
} )


const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        // reducer for get all users
        builders.addCase(getTotalItems.pending , state => {
            state.getDataStatus = STATUS.FETCHING
        })
        builders.addCase(getTotalItems.fulfilled , (state , actions) => {
            state.getDataStatus = STATUS.SUCCESS
            console.log("it's me",actions.payload)
            state.items = actions.payload
        })
        builders.addCase(getTotalItems.rejected , (state , actions) => {
            state.getDataStatus = STATUS.FAILED
            state.error = actions.error.message || "Item not added to cart"
        })
        
    }
})

export const get_allReducer = dataSlice.reducer