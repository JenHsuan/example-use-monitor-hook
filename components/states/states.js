//Initial states
export const initialState = {
    users:[],
    data: ''
};

//Selector functions
export const selectData = rootState => rootState.templateReducer.data;
export const selectUsers = rootState => rootState.templateReducer.users;
