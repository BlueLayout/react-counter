import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CounterNum: this.props.CounterNum
        }
    }

    render() {
        return new Array(this.state.CounterNum).fill(0).map((value, index) =>
            <Counter key={index}/>
        )
    }
}

export default CounterGroup