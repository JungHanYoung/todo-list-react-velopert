import * as actionTypes from '../ActionTypes';

export default function todoSetColor(color) {
    return {
        type: actionTypes.TODO_SET_COLOR,
        color: color
    };
}