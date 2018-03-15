import React, { Component } from 'react';
import './Palette.css'

const Color = ({ color, active, onClick}) => {
    return (
        <div 
        className={ `color`}
        ></div>
    )
}

class Palette extends Component {
    render() {

        // const colorItem = colors.map(
        //     (color) => {
        //         if(color === selectedColor){
        //             return (
        //                 <Color
        //                     active={true}
        //                     color={color}
        //                     onClick={() => { onSetColor(color); }}
        //                 />
        //             )
        //         } else {
        //             return (
        //                 <Color
        //                     active={false}
        //                     color={color}
        //                     onClick={() => { onSetColor(color); }}
        //                 />
        //             )
        //         }
        //     }
        // )

        return (
            <div className="palette">
                <Color />
            </div>
        );
    }
}

export default Palette;
