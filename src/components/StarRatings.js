import { useState } from "react";
import Proptypes from 'prop-types';

export default function StarRatings({ maxRating = 4, color = "gold", size = 40, className = "test", messages=[], defaultRating=1, onSetRating}  ) {

    const [rating, setRating] = useState(defaultRating);
    const [hoverRating, setHoverRating] = useState(0);

    StarRatings.propTypes = {
        maxRating: Proptypes.number,
        color: Proptypes.string,
        size: Proptypes.number,
        className: Proptypes.string,
        messages: Proptypes.array,
        defaultRating: Proptypes.number,
        onSetRating: Proptypes.func,
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    };
    const starContainerStyle = {
        display: 'flex',        
    };
    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color: color,
        fontSize: `${size / 1.5}px`,
    };
    function handleRating (rating) {
        setRating(rating);        
        onSetRating && onSetRating(rating);
    };
    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }).map((_, index) => (
                    <Star key={index} onRate={()=> handleRating(index+1)} full={hoverRating ? hoverRating >= index + 1 : rating >= index + 1} mauseEnter={() => setHoverRating(index + 1)} mauseLeave={() => setHoverRating(0)} color={color} size={size} />
                ))}
            </div>
            <p style={textStyle}>{messages.length === maxRating ? messages[hoverRating ? hoverRating - 1 : rating - 1] :  hoverRating  || rating || ""}</p>
        </div>
    );

}



function Fullstar({ color}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            stroke={color}

        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
    );

}
function Emptrystar({color}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    );

}


function Star({ onRate, full, mauseEnter, mauseLeave, color, size}) {
    const starStyle = {        
        display: 'block',
        cursor: 'pointer',
        color: color,
        width: `${size}px`,
        height: `${size}px`,
    };

    return (
        <span role="button" style={starStyle} onClick={onRate} onMouseEnter={mauseEnter} onMouseLeave={mauseLeave}>
            {
                full ? <Fullstar color={color} /> : <Emptrystar color={color} />
            }
        </span>
    );
}


