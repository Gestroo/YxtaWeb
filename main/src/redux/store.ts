import {configureStore} from '@reduxjs/toolkit';
import {clientReducer} from './slices/clientslice';
import {attributeReducer} from "./reducers/atrributeReducer";

export const store = configureStore({
	reducer: {
		client: clientReducer,
		attributes: attributeReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch