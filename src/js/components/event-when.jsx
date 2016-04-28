import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import DateTimeInput from './create-event/date-time-input.jsx';

const EventWhen = ({ eventWhenData, addInput, removeInput, handleDate, handleTime }) => {

    let inputCount = Object.keys(eventWhenData);

    let inputs = inputCount.map( (value, i) => {
        return (
            <DateTimeInput
                value={ eventWhenData[value] }
                key={ i }
                inputKey={ i }
                handleTime={ handleTime }
                handleDate={ handleDate }
            />);
    });

    let addInputClasses = classnames({
        "hide": inputCount.length >= 3
    });

    let removeInputClasses = classnames({
        "hide": inputCount.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhenData[0].date === "" || eventWhenData[0].time === ""
    });

    return (
        <div className="container">
            <div className="row">
                <div className="twelve columns">
                    <h2>When?</h2>
                </div>
            </div>

            { inputs }
            <div className="row">
                <div className="three columns">
                    <button className={ addInputClasses } onClick={ (e) => addInput(inputCount.length) }>
                        Add input
                    </button>
                </div>

                <div className="three columns">
                    <button className={ removeInputClasses } onClick={ (e) => removeInput(inputCount.length) }>
                        Remove input
                    </button>
                </div>

                <div className="three columns">
                    <button className={ nextButtonClasses }>
                        <Link to='/create-event/invitees'>Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventWhen;
