import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "mouse-follower/dist/mouse-follower.min.css";
import "../index.css"

MouseFollower.registerGSAP(gsap);

export default function CursorFollower() {    
    useEffect(() => {
        const cursor = new MouseFollower({
            container: document.body,
            speed: 0.9,
            skewing: 2,
        });
        return () => cursor.destroy();
    }, []);

    return null;
}