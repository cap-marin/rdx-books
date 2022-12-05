import { createSlice } from '@reduxjs/toolkit';
//import userEvent from '@testing-library/user-event';
import { BooksData } from "../FakeData";

export const bookSlice = createSlice({
    name: "books",
    initialState: {value: BooksData},
    reducers: {
        addBook: (state, action) => {
            //add book
            state.value.push(action.payload);
            
        },

        deleteBook: (state, action) => {
            //del book
            state.value = state.value.filter((book) => book.id !== action.payload.id);
            
        },

        updateBook: (state, action) => {
            //update book
            state.value.map((book) => {
                if (book.id === action.payload.id) {
                    book.name = action.payload.name;
                }
            });
        },

    },
});

export const { addBook , deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;