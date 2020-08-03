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
                <button onClick={this.decreaseNum}>-</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.increaseNum}>+</button>
            </div>
        )
    }

    increaseNum = () => {
        this.setState({
            number: this.state.number + 1
        });
        this.props['counter-increase']()
    };

    decreaseNum = () => {
        this.setState({
            number: this.state.number - 1
        });
        this.props['counter-decrease']()
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
