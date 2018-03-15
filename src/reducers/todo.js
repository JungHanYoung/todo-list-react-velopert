import update from 'react-addons-update';
import * as types from '../actions/ActionTypes';

const initialState = {
    id: 2,
    todos: [
        { id: 0, text: '리액트 소개', checked: false, color: '#343a40' },
        { id: 1, text: 'JSX 사용하기!', checked: true, color: '#12b886' },
        { id: 2, text: '라이프 사이클 적용하기', checked: false, color: '#f03e3e' }
    ],
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    selectedColor: '#343a40'
};

export default function todo(state = initialState, action){
    console.log('reducer :', state);
    let index = Number();
    if(typeof action.id !== "undefined"){
        const object = state.todos.find(function(element){
            return element.id === action.id;
        });
        index = state.todos.indexOf(object);
        console.log('index :', index);
    }
    
    switch(action.type){
        /* CREATE */
        case types.TODO_CREATE:
            //console.log('reducer :', state.todos);
            //console.log('State - id :', state.id);
            if(isNaN(state.id)){
                console.log('id is NaN')
            }
            // console.log('Action - text :', action.text);
            // console.log('State - selectedColor :', `${state.selectedColor}`);
            // const { selectedColor } = state;
            // console.log('variable selectedColor :', selectedColor);

            return update(state, {
                todos: {
                    $push: [{
                        id: ++state.id,
                        text: action.text,
                        checked: false,
                        color: state.selectedColor
                    }]
                }
            });
        /* TOGGLE */
        case types.TODO_TOGGLE:
            //console.log('find method :', object);
            const t = update(state, 
                {
                    todos: {
                        [index]: {
                            checked: { $set: !state.todos[index].checked }
                        }
                    }
                }
            )
            console.log(t);
            return t;
            // return update(state,
            //     {
            //         todos: update(
            //             state.todos,
            //                 {
            //                     [index]: {
            //                         checked: { $set: !state.todos[index].checked }
            //                     }
            //                 }
            //             )
                    
            //     }
            // )
        /* REMOVE */
        case types.TODO_REMOVE:

            //console.log('find method :', object);
            //console.log('indexOf :', index);
            
            return update(
                state,
                {
                    todos: {
                        $splice: [[index, 1]]
                    }
                }
                // {
                //     $splice: [[action.id, 1]]
                // }
            );
        /* SET_COLOR */
        case types.TODO_SET_COLOR:
            return update(
                state,
                {
                    selectedColor: { $set: action.color }
                }
                // {
                //     $set: action.selectedColor
                // }
            );
        /* initialize */
        default:
            return state;
    }
}