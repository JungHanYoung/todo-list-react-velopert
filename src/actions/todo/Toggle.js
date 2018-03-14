import * as actionTypes from '../ActionTypes';

export default function todoToggle(id) {
    return {
        type: actionTypes.TODO_TOGGLE,
        id
    };
}