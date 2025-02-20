"use client";
import { useEffect, useCallback } from 'react';
import { useCursor } from '@/context/cursorContext';

const MOUSE_POSITION_EVENT = 'mousePositionUpdate';

export function useCursorHover() {
    const { setCursorVariant, setCursorText } = useCursor();

    const checkElementUnderCursor = useCallback(() => {
        const element = document.elementFromPoint(
            window.mouseX || 0,
            window.mouseY || 0
        );
        
        if (element) {
            let currentElement = element;
            while (currentElement) {
                if (currentElement.getAttribute('data-cursor')) {
                    setCursorVariant('hover');
                    const cursorText = currentElement.getAttribute('data-cursor-text') || '';
                    setCursorText(cursorText);
                    return;
                }
                currentElement = currentElement.parentElement;
            }
            setCursorVariant('default');
            setCursorText('');
        }
    }, [setCursorVariant, setCursorText]);

    useEffect(() => {
        let frameId;
        let lastUpdate = 0;
        const THROTTLE_MS = 16; // Approximately 60fps

        const update = () => {
            const now = Date.now();
            
            if (now - lastUpdate >= THROTTLE_MS) {
                checkElementUnderCursor();
                // Only dispatch if we have valid mouse coordinates
                if (window.mouseX != null && window.mouseY != null) {
                    window.dispatchEvent(new CustomEvent(MOUSE_POSITION_EVENT, {
                        detail: { x: window.mouseX, y: window.mouseY }
                    }));
                }
                lastUpdate = now;
            }
            
            frameId = requestAnimationFrame(update);
        };

        frameId = requestAnimationFrame(update);

        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [checkElementUnderCursor]);
}

export const MOUSE_POSITION_UPDATE = MOUSE_POSITION_EVENT;