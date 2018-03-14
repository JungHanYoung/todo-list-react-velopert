import React from 'react';
import './Palette.css'

const Color = ({ color, active, onClick}) => {
    return (
        <div 
        className={ `color ${active ? 'active' : '' }`}
        style={{background: color}}
        onClick={onClick}
        ></div>
    )
}

const Palette = ({colors, selectedColor, onSetColor}) => {

        const colorItem = colors.map(
            (color) => {
                if(color === selectedColor){
                    return (
                        <Color
                            active={true}
                            color={color}
                            onClick={() => { onSetColor(color); }}
                        />
                    )
                } else {
                    return (
                        <Color
                            active={false}
                            color={color}
                            onClick={() => { onSetColor(color); }}
                        />
                    )
                }
            }
        )

        return (
            <div className="palette">
                {colorItem}
            </div>
        );
    
}

export default Palette;
