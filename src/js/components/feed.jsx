import React from 'react';
import Notification from './notification.jsx';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import CssLoader from './general/css-loader.jsx';



const Feed = ({ notifications, isFetching }) => {

    let mappedNotifications = notifications.map((data, i) => {

        return (
            <Notification
                key={ i }
                eventID={ data.eventID }
                timestamp={ data.timestamp }
                isPoll={ data.isPoll }
                firstName={ data.firstName }
                lastName={ data.lastName }
                photoURL={ data.photoURL }
                eventWhat={ data.eventWhat }
                eventWhere={ data.eventWhere }
                eventWhen={ data.eventWhen }
                userIsHost={ data.hostID == getUserID() } />
        );
    });

    return (

        <div>
            {
                isFetching && <CssLoader />
            }
            <div className="row">
                <h4 className="twelve columns">Feed</h4>
            </div>
            { mappedNotifications }
            <div className="row">
                <button className="twelve columns">
                  <Link to="/create-event">
                    Create new event
                  </Link>
                </button>
            </div>
        </div>
    );
};

export default Feed;
