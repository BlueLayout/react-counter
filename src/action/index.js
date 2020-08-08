export const onIncrement = () => ({
    type: 'increment'
});

export const onDecrement = () => ({
    type: 'decrement'
});

export const onMakeZero = () => ({
    type: 'makeZero'
});

export const modifyCounterNumber = value => ({
    type: 'modifyNumber',
    value
})