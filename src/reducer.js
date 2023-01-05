const userListReducer = function (state = [], action) {
    switch (action.type) {
        case "SET_USER_LIST":
            console.log(action.data);
            return action.data;
        default:
            return state;
    };
}

export default userListReducer; 