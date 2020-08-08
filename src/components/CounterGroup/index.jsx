import React from "react";
import CounterContainer from "../../container/CounterContainer";

class CounterGroup extends React.Component {

    generatorCounter = () => {
        return new Array(this.props.number).fill(0).map((value, index) =>
            <CounterContainer key={index}/>
        )
    };

    render() {
        return <div>
            CountNum:<input type='text' value={this.props.number} onChange={this.changeCountNum}/>
            <br/>
            Total:<input type='text' value={this.props.total} readOnly/>
            {this.generatorCounter()}
        </div>
    }

    changeCountNum = (e) => {
        if (e.target.value.match(/[0-9]+/g)) {
            this.props.modifyCounterNumber(parseInt(e.target.value))
            this.props.onMakeZero();
        } else {
            this.props.onMakeZero();
            this.props.modifyCounterNumber(0)
        }
    };

}

export default CounterGroup