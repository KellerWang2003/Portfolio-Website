"use client";
import { useEffect, useCallback } from 'react';
import { useCursor } from '@/context/cursorContext';

// Event name for broadcasting mouse position updates
const MOUSE_POSITION_EVENT = 'mousePositionUpdate';

export function useCursorHover() {
    const { setCursorVariant, setCursorText, setHoveredElement } = useCursor();

    const checkElementUnderCursor = useCallback(() => {
        const element = document.elementFromPoint(
            window.mouseX || 0,
            window.mouseY || 0
        );
        
        if (element) {
            let currentElement = element;
            while (currentElement) {
                const cursorType = currentElement.getAttribute('data-cursor');
                if (cursorType) {
                    if (cursorType === 'hoverSmall') {
                        setCursorVariant('hoverSmall');
                    } else {
                        setCursorVariant('hover');
                    }
                    const cursorText = currentElement.getAttribute('data-cursor-text') || '';
                    setCursorText(cursorText);
                    
                    // Only set hoveredElement if it has a project index
                    if (currentElement.hasAttribute('data-project-index')) {
                        setHoveredElement(currentElement);
                    } else {
                        setHoveredElement(null);
                    }
                    return;
                }
                currentElement = currentElement.parentElement;
            }
            setCursorVariant('default');
            setCursorText('');
            setHoveredElement(null);
        }
    }, [setCursorVariant, setCursorText, setHoveredElement]);

    useEffect(() => {
        // Setup animation frame tracking
        let frameId;
        let lastUpdate = 0;
        const THROTTLE_MS = 16; // Throttle to ~60fps for performance

        // Main update loop
        const update = () => {
            const now = Date.now();
            
            // Only update if enough time has passed (throttling)
            if (now - lastUpdate >= THROTTLE_MS) {
                // Check for elements under cursor and update cursor state
                checkElementUnderCursor();
                // Broadcast mouse position if coordinates are available
                if (window.mouseX != null && window.mouseY != null) {
                    window.dispatchEvent(new CustomEvent(MOUSE_POSITION_EVENT, {
                        detail: { x: window.mouseX, y: window.mouseY }
                    }));
                }
                lastUpdate = now;
            }
            
            // Schedule next frame
            frameId = requestAnimationFrame(update);
        };

        // Start the animation loop
        frameId = requestAnimationFrame(update);

        // Cleanup function to cancel animation frame on unmount
        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [checkElementUnderCursor]);
}

// Export event name constant for other components to use
export const MOUSE_POSITION_UPDATE = MOUSE_POSITION_EVENT;