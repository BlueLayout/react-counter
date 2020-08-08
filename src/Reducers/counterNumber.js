const number = 0;
export default (state = number, action) => {
    if (action.type === 'modifyNumber') {
        return action.value;
    } else {
        return state;
    }
}