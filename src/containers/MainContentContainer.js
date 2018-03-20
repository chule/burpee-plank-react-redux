import { connect } from 'react-redux';
import { changeDrawerAction, changeModalAction, 
    timerValueAdd, timerValueRemove, timerStarted, currentTime } from "../actions";
import MainContentComponent from "../components/MainContentComponent";

const mapStateToProps = state => {
    return {
        changeDrawer: state.changeDrawer,
        changeModal: state.changeModal,
        timerValue: state.timerValue,
        timerStarted: state.timerStarted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeDrawerHere: () => {
            dispatch(changeDrawerAction());
        },
        changeModalHere: () => {
            dispatch(changeModalAction());
        },
        timerValueAddHere: () => {
            dispatch(timerValueAdd());
        },
        timerValueRemoveHere: () => {
            dispatch(timerValueRemove());
        },
        timerStartedHere: () => {
            dispatch(timerStarted());
        },
        changeCurrentTimeHere: (time) => {
            dispatch(currentTime(time));
        }         
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContentComponent);