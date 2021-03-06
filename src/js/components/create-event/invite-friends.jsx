import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import axios from 'axios';
import { store } from '../../init-store.js';
import { getFBFriends } from '../../actions/create-event.js';


class InviteFriends extends React.Component {
    constructor (props){
        super(props);
    }

    componentWillMount () {
        if (this.props.friends.length === 0) {
            store.dispatch(getFBFriends());
        }
    }

    render () {
        var friends = this.props.friends.map((friendData, index) => {
            return (
                  <div key={ index } className="item invited-friends">
                        <div className="right floated content">
                            <div onClick={ (e) => this.props.handleSelected(friendData, index) } className="ui button">Invite</div>
                        </div>
                        <img className="ui avatar image" src={ friendData.photoURL } />
                        <div className="content">
                            { friendData.firstName } { friendData.lastName }
                        </div>
                  </div>
            );
        });

        var invitees = this.props.invitees.map((inviteeData, index) => {
            if (!inviteeData) {
                return (
                    <div>
                        <p> Add your Friends to see them here </p>
                    </div>
                );
            } else {
                return (
                    <div onClick={ (e) => this.props.removeSelected(inviteeData, index) }
                         key={ inviteeData.id }
                         className="ui big image label blue">
                        <img src={ inviteeData.photoURL} />
                            { inviteeData.firstName }
                        <i className="fa fa-times" ariaHidden="true"></i>
                    </div>

                );
            }
        });

        let classes = classnames("twelve columns", {
            'display-none': this.props.invitees.length === 0
        });

        return (
            <div>
                <div>
                    <h5>Invited friends</h5>
                    { invitees }
                </div>

                <hr />

                <div className="ui middle aligned divided list">
                    { friends }
                </div>

                <Link to='/create-event/confirm'>
                    <button className={ classes }>Next</button>
                </Link>
            </div>
        );
    }
}


export default InviteFriends;
