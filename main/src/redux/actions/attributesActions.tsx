import {createAction} from "@reduxjs/toolkit";
import {AttributeModel} from "../../models/AttributeModel";

export const AttributeLoaded = createAction<AttributeModel[]>("ATTRIBUTE_LOADED")
export const AttributeNotLoaded = createAction("ATTRIBUTE_NOT_LOADED")