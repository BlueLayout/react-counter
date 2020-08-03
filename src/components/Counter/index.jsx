import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
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
        })
    }

    decreaseNum = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
}

export default Counter
