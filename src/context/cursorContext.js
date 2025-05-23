"use client";
import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [cursorText, setCursorText] = useState("");
    const [hoveredElement, setHoveredElement] = useState(null);

    const value = {
        cursorVariant,
        setCursorVariant,
        cursorText,
        setCursorText,
        hoveredElement,
        setHoveredElement
    };

    return (
        <CursorContext.Provider value={value}>
            {children}
        </CursorContext.Provider>
    );
}

export function useCursor() {
    const context = useContext(CursorContext);
    if (context === undefined) {
        throw new Error('useCursor must be used within a CursorProvider');
    }
    return context;
} 