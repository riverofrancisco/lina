import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { RootState } from "../store";

export const Adder = (amount: number): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.valueAdder(amount))
}}