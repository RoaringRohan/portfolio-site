import React, { useState, useEffect } from 'react';
import Picture from '../../../assets/images/selfie.webp';
import Pix1 from '../../../assets/images/pix-1.png';
import Pix2 from '../../../assets/images/pix-2.png';
import Pix3 from '../../../assets/images/pix-3.png';
import Pix4 from '../../../assets/images/pix-4.png';
import Pix5 from '../../../assets/images/pix-5.png';
import Pix6 from '../../../assets/images/pix-6.png';

const Portrait = () => {
    const [showImage, setShowImage] = useState(1);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        // One interval drives the whole glitch sequence, so one clear tears it all down.
        const frames = [2, 3, 4, 5, 6, 0];
        let i = 0;
        const glitchTimer = setInterval(() => {
            setShowImage(frames[i]);
            if (++i === frames.length) {
                clearInterval(glitchTimer);
                setHasLoaded(true);
            }
        }, 250);

        return () => clearInterval(glitchTimer);
    }, []);

    const renderGlitchImage = (imageIndex) => {
        switch (imageIndex) {
            case 1:
                return <img src={Pix1} alt="Glitch" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
            case 2:
                return <img src={Pix2} alt="Glitch" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
            case 3:
                return <img src={Pix3} alt="Glitch" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
            case 4:
                return <img src={Pix4} alt="Glitch" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
            case 5:
                return <img src={Pix5} alt="Glitch" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
            case 6:
                return <img src={Pix6} alt="Glitch" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
            default:
                return <img src={Picture} alt="My Face" style={{borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%'}} />;
        }
    };

    return (
        <div className="portraits">
            <div className={`portrait-container ${hasLoaded ? 'loaded' : ''}`}>
                <div className="glitch-effect">
                    {renderGlitchImage(showImage)}
                </div>
            </div>
        </div>
    );
};

export default Portrait;
