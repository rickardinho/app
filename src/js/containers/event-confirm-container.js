import React from 'react';
import { connect } from 'react-redux';
import { newEventRequest } from '../actions/create-event.js';
import { userLogin } from '../actions/auth.js';
import EventConfirm from '../components/event-confirm.jsx';

const mapStateToProps = (state) => {

    let data = state.createEvent;

    return {
        data: data,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        saveEvent: (data) => {
            // DO SOMETHING PRETTY TO DATA
            dispatch(newEventRequest(data));
        },

        discardEvent: () => {

            // CREATE A DISPATCH TO RESET STATE
        },

        login: () => {
            dispatch(userLogin());
        }
    };
};

const EventConfirmContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventConfirm);

export default EventConfirmContainer;
