import {useEffect, useRef, useState } from "react";

export default function useInView() {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) =>{
                if (entry.IsIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target); //animate once only
                }
            },
            {threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return [ref, isInView];
}