import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'userInfo',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload);
            state.push(action.payload);
        },
        displayUser: () => { }
    }
});

export default userSlice.reducer;
export const { addUser, displayUser } = userSlice.actions;