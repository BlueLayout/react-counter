import React from "react";
import Counter from "../Counter";
import store from "../Store";

class CounterGroup extends React.Component {

    onIncrement = () => {
        store.dispatch({
            type: "increment"
        });
    };

    onDecrement = () => {
        store.dispatch({
            type: "decrement"
        });
    };

    onMakeZero = () => {
        store.dispatch({
            type: 'makeZero'
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            CounterNum: 1,
            total: store.getState()
        }
    }

    generatorCounter = () => {
        return new Array(this.state.CounterNum).fill(0).map((value, index) =>
            <Counter key={index} counter-increase={this.handleIncrease} counter-decrease={this.handleDecrease}
                     CounterNum={this.state.CounterNum}/>
        )
    };

    render() {
        return <div>
            CountNum:<input type='text' value={this.state.CounterNum} onChange={this.changeCountNum}/>
            <br/>
            Total:<input type='text' value={store.getState()} readOnly/>
            {this.generatorCounter()}
        </div>
    }

    handleIncrease = () => {
        this.onIncrement()
        store.subscribe(() =>
            this.setState({
                total: store.getState()
            })
        );
    };

    handleDecrease = () => {
        this.onDecrement()
        store.subscribe(() =>
            this.setState({
                total: store.getState()
            })
        );
    };

    changeCountNum = (e) => {
        if (e.target.value.match(/[0-9]+/g)) {
            this.setState({
                CounterNum: parseInt(e.target.value),
            });
            this.onMakeZero()
        } else {
            this.setState({
                CounterNum: 0
            });
            this.onMakeZero()
        }
    };

}

export default CounterGroup