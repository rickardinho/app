import React from 'react';
import TopBar from '../event/top-bar.jsx';
import CalendarItem from './calendar-item.jsx';
import FilterPanel from '../general/filter-panel.jsx';
import Spinner from '../general/spinner.jsx';

const Calendar = ({ location, data, isFetching, fetchEvent, displaySome, displayAll, isFilter, isShowHosting }) => {

    let sortedData = data.sort((a, b) => {
        a = a.eventWhen[0].date;
        b = b.eventWhen[0].date;

        return new Date(a).getTime() > new Date(b).getTime();
    });

    return (
        <div>
            <TopBar location={ location } />
            
            <div className="container">
                {
                    isFetching && <Spinner />
                }
                {
                    data.length === 0 && !isFetching &&
                        <div className="no-events-message">
                            You have no { location.pathname.indexOf('album') !== -1 ? "past" : "upcoming" } events.
                        </div>
                }
                {
                    !isFetching && data.length > 0 && <FilterPanel displaySome={ displaySome }
                                                                   displayAll={ displayAll }
                                                                   isFilter={ isFilter }
                                                                   isShowHosting={ isShowHosting } />
                }
                {
                    !isFetching && sortedData.map((item, i) => {

                        return <CalendarItem key={ i }
                                             eventName={ item.eventName }
                                             eventWhat={ item.eventWhat }
                                             eventWhere={ item.eventWhere }
                                             eventWhen={ item.eventWhen }
                                             coverPhoto={ item.coverPhoto }
                                             eventID={ item.eventID } />;
                    })
            }
            </div>
        </div>
    );
};

export default Calendar;
