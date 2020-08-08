import * as actions from "../../action"
import {connect} from "react-redux";
import CounterGroup from "../../components/CounterGroup";

const mapStateToProps = state => ({
    number:state.counterNumber,
    total:state.counterTotal
});

const mapDispatchToProps = dispatch => ({
    onMakeZero: () => dispatch(actions.onMakeZero()),
    modifyCounterNumber: (value) => dispatch(actions.modifyCounterNumber(value))
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterGroup)