import React, { useState } from 'react';
import { BiLike } from "react-icons/bi";
const VerticalVideoPlayer = ({ videoSrc, videoSrc1, videoSrc2 }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className='container' >
            <div style={{ textAlign: 'center' }}>
                <iframe width="315" height="560" src={videoSrc} title="China or Japan में orange की खेती कुछ इस तरह से की जाती हैं | professional farming of orange |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;web-comment" allowfullscreen></iframe> <button
                    onClick={handleLikeClick}
                    style={{
                        fontSize: '20px',
                        padding: '10px',
                        background: isLiked ? 'red' : 'transparent',
                        color: isLiked ? 'white' : 'black',
                        border: '3px solid white',
                        borderRadius: '5px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        position: 'absolute'
                    }}

                >
                    <BiLike />

                </button><br></br>
                <iframe width="315" height="560" src="https://www.youtube.com/embed/ALBJqnHVM3w" title="Conversations with Eevee✨#shorts #cat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button
                    onClick={handleLikeClick}
                    style={{
                        fontSize: '20px',
                        padding: '10px',
                        background: isLiked ? 'red' : 'transparent',
                        color: isLiked ? 'white' : 'black',
                        border: '3px solid white',
                        borderRadius: '5px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        position: 'absolute'
                    }}

                >
                    <BiLike />

                </button>
                <br></br>
                <iframe width="315" height="560" src="https://www.youtube.com/embed/2vFg6lb3tSY" title="Cats race for some milk #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button
                    onClick={handleLikeClick}
                    style={{
                        fontSize: '20px',
                        padding: '10px',
                        background: isLiked ? 'red' : 'transparent',
                        color: isLiked ? 'white' : 'black',
                        border: '3px solid white',
                        borderRadius: '5px',
                        marginTop: '5px',
                        cursor: 'pointer',
                        position: 'absolute'
                    }}

                >
                    <BiLike />

                </button>

            </div>
        </div>
    );
};

export default VerticalVideoPlayer;