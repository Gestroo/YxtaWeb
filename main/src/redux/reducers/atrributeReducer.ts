import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {AttributeModel} from "../../models/AttributeModel";
import {AttributeLoaded,AttributeNotLoaded} from "../actions/attributesActions";

const attributes: AttributeModel[] = [];

export const attributeReducer = createReducer(attributes,(builder)=> {
    builder.addCase(AttributeLoaded, (state, action: PayloadAction<AttributeModel[]>) => {
        return action.payload;
    }).addCase(AttributeNotLoaded, (state, action: PayloadAction<any>)=>{
        return state;
    })});

