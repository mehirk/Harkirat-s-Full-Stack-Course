import { useRef, useEffect } from "react"

export const usePrev = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value
    }, [value]);

    return ref.current;
}