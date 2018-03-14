import * as actionTypes from '../ActionTypes';

export default function todoRemove(id){
    return {
        type: actionTypes.TODO_REMOVE,
        id
    };
}