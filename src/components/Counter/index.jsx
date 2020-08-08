import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onDecrement}>-</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        )
    }

    increaseNum = () => {
        this.setState({
            number: this.state.number + 1
        });
        this.props.onIncrement()
    };

    decreaseNum = () => {
        this.setState({
            number: this.state.number - 1
        });
        this.props.onDecrement()
    };

    static getDerivedStateFromProps(props, state) {
        if (props.CounterNum !== state.CounterNum) {
            return {
                number: 0,
                CounterNum: props.CounterNum
            }
        }
        return null;
    }
}

export default Counter
