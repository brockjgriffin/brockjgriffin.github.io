import { createSlice } from "@reduxjs/toolkit";
import { db } from "../config";

const cartDb = db.collection('userInfo')
const initialState = {
    title: '',
    price: '',
    cartQuanity: ''
}

export const addToFirestore = createSlice({
    name: 'addFirestore',
    initialState,
    reducers : {
        create: (state, action) => {
            cartDb.add(action.payload).then(ref => {
                console.log('product added')
            })
        }
    }
})