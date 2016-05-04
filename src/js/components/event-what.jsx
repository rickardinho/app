import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Input from './create-event/input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let inputs = eventWhatData.map( (value, i) => {
        return (
            <Input
                className=""
                onChange={ handleEventWhat.bind(this, i) }
                key={ i }
                value={ value }
                placeholder= "What would you like to do?"
            />);
    });


    let addInputClasses = classnames("one column", "round-button", {
        "hide": eventWhatData.length >= 3
    });

    let removeInputClasses = classnames("one column", "round-button", {
        "hide": eventWhatData.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhatData[0] === ""
    });

    return (
        <div className="">
            <div className="">
                <div className="row">
                    <h2 className="twelve columns title">What?</h2>
                </div>
            </div>

            { inputs }
            <div className="">
                <div className="row">
                    <button className={ addInputClasses } onClick={ (e) => addInput(eventWhatData.length) }>
                        +
                    </button>
                </div>

                <div className="row">
                    <button className={ removeInputClasses } onClick={ (e) => removeInput(eventWhatData.length - 1) }>
                        -
                    </button>
                </div>

                <div className="row">
                    <button className={ nextButtonClasses }>
                        <Link to='/create-event/where'>Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventWhat;
