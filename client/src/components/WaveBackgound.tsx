import React from 'react';
import { Interface } from 'readline';

interface WaveBGProps {
    children : React.ReactNode
}

function WaveBackground ({children} : WaveBGProps) {
    return (
        <div className="w-full p-10 h-screen flex justify-center relative items-center bg-[url('./assets/wave.svg')]">
            {children}
        </div>
    )
}

export default WaveBackground;