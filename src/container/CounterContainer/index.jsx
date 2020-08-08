import {connect} from "react-redux";
import Counter from "../../components/Counter";
import * as actions from "../../action";

const mapStateToProps = state => ({
    CounterNum: state.counterNumber
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(actions.onIncrement()),
    onDecrement: () => dispatch(actions.onDecrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)