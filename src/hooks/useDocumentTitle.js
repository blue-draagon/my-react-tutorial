import {useEffect, useState} from "react";

/**
 *
 * @param {string} title
 */
export function useDocumentTitle(title = "") {
    useEffect(() => {
        const baseTitle = document.title;
        return () => {
            document.title = baseTitle;
        }
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

}