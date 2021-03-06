import { hashHistory } from 'react-router';

export default function getUserID () {

    if (!document.cookie.match(/sparkID=\d+/)) {

        console.error('User session cookie not found.');
        hashHistory.push('/');
    } else {
        const result = document.cookie.match(/sparkID=\d+/)[0].match(/\d+/);

        return result[0];
    }
}
