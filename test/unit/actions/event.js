import test from 'tape';
import { GET_EVENT, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, UPDATE_POLL } from '../../../src/js/actions/event.js';
import { getEvent, getEventRequest, getEventSuccess, getEventFailure, updatePoll } from '../../../src/js/actions/event.js';
import { CONFIRM_POLL, CONFIRM_POLL_REQUEST, CONFIRM_POLL_SUCCESS, CONFIRM_POLL_FAILURE } from '../../../src/js/actions/event.js';
import { confirmPoll, confirmPollRequest, confirmPollSuccess, confirmPollFailure } from '../../../src/js/actions/event.js';
import { CONFIRMED_EVENT_SELECTION } from '../../../src/js/actions/event.js';
import { confirmedEventSelection } from '../../../src/js/actions/event.js';
import createThunk from '../../utils/mock-thunk.js';

test('getEvent async action creator returns expected action', (t) => {

    let actual;
    const { dispatch, queue } = createThunk();
    let eventID = 'event:100';
    dispatch(getEvent(eventID));

    [{...actual}] = queue;

    const expected = {
        type: GET_EVENT_REQUEST,
        isFetching: true
    };

    t.deepEqual(actual, expected, "getEvent returns GET_EVENT_REQUEST action");
    t.end();
});

test('getEventRequest action creator returns expected action', (t) => {

    const expected = {
        type: GET_EVENT_REQUEST,
        isFetching: true
    };
    const actual = getEventRequest();

    t.deepEqual(actual, expected);
    t.end();
});

test('getEventSuccess action creator returns expected action', (t) => {

    const data = {
        eventName: "sohil",
        eventDescription: "Birthday"
    };
    const expected = {
        type: GET_EVENT_SUCCESS,
        data,
        isFetching: false
    };

    const actual = getEventSuccess(data);

    t.deepEqual(actual, expected);
    t.end();
});

test('getEventFailure action creator returns expected action', (t) => {

    const error = {
        message: "Whoops"
    };
    const expected = {
        type: GET_EVENT_FAILURE,
        isFetching: false,
        error
    };

    const actual = getEventFailure(error);

    t.deepEqual(actual, expected);
    t.end();
});

test('updatePoll action creator returns expected action', (t) => {

    const expected = {
        type: UPDATE_POLL,
        eventType: "eventWhen",
        index: 2
    };

    const actual = updatePoll("eventWhen", 2);

    t.deepEqual(actual, expected);
    t.end();
});

test('confirmPoll async action creator returns expected action', (t) => {

    let actual;
    const { dispatch, queue } = createThunk();

    const poll = {
        eventWhat: [true, false, false],
        eventWhere: [true, true]
    };
    const eventID = 'event:101';
    dispatch(confirmPoll(poll, eventID));

    [{...actual}] = queue;

    const expected = {
        type: CONFIRM_POLL_REQUEST,
        isFetching: true
    };

    t.deepEqual(actual, expected, "getEvent returns CONFIRM_POLL_REQUEST action");
    t.end();
});

test('confirmPollRequest action creator returns expected action', (t) => {

    const expected = {
        type: CONFIRM_POLL_REQUEST,
        isFetching: true
    };
    const actual = confirmPollRequest();

    t.deepEqual(actual, expected);
    t.end();

});

test('confirmPollSuccess action creator returns expected action', (t) => {
    const expected = {
        type: CONFIRM_POLL_SUCCESS,
        isFetching: false,
    };

    const actual = confirmPollSuccess();

    t.deepEqual(actual, expected);
    t.end();
});

test('confirmPollFailure action creator returns expected action', (t) => {
    const expected = {
        type: CONFIRM_POLL_FAILURE,
        isFetching: false,
    };

    const actual = confirmPollFailure();

    t.deepEqual(actual, expected);
    t.end();
});

test('confirmedEventSelection action creator returns expected action', (t) => {

    const expected = {
        type: CONFIRMED_EVENT_SELECTION,
        eventType: "eventWhen",
        value: {
            date: "2015-12-12",
            time: "10:10"
        },
        index: 1
    };

    const actual = confirmedEventSelection("eventWhen", { date: "2015-12-12", time: "10:10" },  1);

    t.deepEqual(actual, expected);
    t.end();
});