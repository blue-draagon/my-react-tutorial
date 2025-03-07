import {useEffect, useRef, useState} from "react";

/**
 *
 * @param {string} title
 */
export function useDocumentTitle(title = "") {
    const titleRef = useRef(document.title)

    useEffect(() => {
        return () => {
            document.title = titleRef.current;
        }
    }, []);

    useEffect(() => {
        document.title = title ? title : titleRef.current;
    }, [title]);

}