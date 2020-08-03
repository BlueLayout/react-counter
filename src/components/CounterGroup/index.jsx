import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CounterNum: 1,
            total: 0
        }
    }

    generatorCounter = () => {
        return new Array(this.state.CounterNum).fill(0).map((value, index) =>
            <Counter key={index} counter-increase={this.handleIncrease} counter-decrease={this.handleDecrease}/>
        )
    };

    render() {
        return <div>
            Total:<input type='text' value={this.state.total} readOnly/>
            <br/>
            CountNum:<input type='text' value={this.state.CounterNum} onChange={this.changeCountNum}/>
            {this.generatorCounter()}
        </div>
    }

    handleIncrease = () => {
        this.setState({
            total: this.state.total + 1
        })
    };

    handleDecrease = () => {
        this.setState({
            total: this.state.total - 1
        })
    };

    changeCountNum = (e) => {
        if (e.target.value.match(/[0-9]+/g)) {
            this.setState({
                CounterNum: parseInt(e.target.value)
            })
        } else {
            this.setState({
                CounterNum: 0
            })
        }
    };

}

export default CounterGroup