"use client";
import { useEffect } from 'react';
import { useCursor } from '@/context/cursorContext';

export function useCursorHover(text = "") {
    const { setCursorVariant, setCursorText } = useCursor();

    useEffect(() => {
        return () => {
            setCursorVariant("default");
            setCursorText("");
        };
    }, [setCursorVariant, setCursorText]);

    return {
        onMouseEnter: () => {
            setCursorVariant("hover");
            setCursorText(text);
        },
        onMouseLeave: () => {
            setCursorVariant("default");
            setCursorText("");
        }
    };
} 