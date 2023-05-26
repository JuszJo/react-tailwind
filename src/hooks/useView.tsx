import { useEffect, useState } from "react";

export default function useView() {
    const [isMobile, setIsMobile] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function resizeHandler() {
        setWindowWidth(window.innerWidth);
    }

    function checkWidth() {
        if(windowWidth <= 768) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        checkWidth();

        addEventListener('resize', resizeHandler);

        return () => removeEventListener('resize', resizeHandler);
    })

    return isMobile;
}