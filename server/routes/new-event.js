var saveNewEvent = require('../db/saveNewEvent.js');
var createNotification = require('../lib/createNotification.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/new-event',
        config: {
            description: 'saves newly created events.',

            handler: (request, reply) => {

                saveNewEvent(request.payload, (error, eventID) => {


                    if (error) {
                        reply(error);
                    }
                    // create notification object
                    createNotification(eventID, request.payload, (error, result) => {

                    });
                    // go to invitees list
                    // for each invitee, push new notification object

                });
            }
        }
    }]);

    return next();
};

exports.register.attributes = {
    name: 'NewEvent'
};
