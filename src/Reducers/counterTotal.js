const total = 0;
export default (state = total, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case "decrement":
            return state - 1;
        case "makeZero":
            return 0;
        default:
            return state;
    }
}