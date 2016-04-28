import React from 'react';
import { connect } from 'react-redux';
import { setEventWhat, addInput, removeInput } from '../actions/create-event.js';
import EventWhat from '../components/event-what.jsx';

const mapStateToProps = (state) => {
    let data = state.createEvent.eventWhat;
    return {
        eventWhatData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhat: (inputKey, event) => {
            dispatch(setEventWhat(event.target.value, inputKey));
        },

        addInput: (nextInputKey) => {

            dispatch(addInput(nextInputKey, "eventWhat"));
        },

        removeInput: (lastInputKey) => {
            dispatch(removeInput(lastInputKey, "eventWhat"));
        }
    };
};

const EventWhatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhat);

export default EventWhatContainer;
