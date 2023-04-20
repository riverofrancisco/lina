import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: number,
    status: string,
}

const initialState: InitialState = {
value: 0,
status: "ok",
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    valueAdder: (state, {payload}) => {
        state.value = state.value + payload
    },
    changeStatus: (state, {payload}) => {
        if(state.status === "ok"){
            state.status = "loading"
        } if(state.status === "loading")
        state.status = "ok"
    }
}

})

export const reducer = global.actions;