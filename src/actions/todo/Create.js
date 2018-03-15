import * as actionTypes from '../ActionTypes';

export default function todoCreate(text){
    console.log('Action - CREATE(text) :', text);
    return {
        type: actionTypes.TODO_CREATE,
        text: text
    };
}