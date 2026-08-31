import {
    motion,
    useMotionValue,
    useSpring,
    useTransform
} from "motion/react";

import {
    useMemo,
    useRef
} from "react";
import "./Dock.css";

/* DOCK ITEM */
function DockItem({
    children,
    className = "",
    onClick,
    mouseX,
    spring,
    distance,
    magnification,
    baseItemSize,
    label,
    active
}) {
    const ref = useRef(null);

    const mouseDistance = useTransform(
        mouseX,
        (value) => {
            const rect =
                ref.current?.getBoundingClientRect() ?? {
                    x: 0,
                    width: baseItemSize
                };

            return (
                value -
                rect.x -
                rect.width / 2
            );
        }
    );

    const targetScale = useTransform(
        mouseDistance,
        [
            -distance,
            0,
            distance
        ],
        [
            1,
            magnification,
            1
        ]
    );

    const scale = useSpring(
        targetScale,
        spring
    );

    const targetY = useTransform(
        mouseDistance,
        [
            -distance,
            0,
            distance
        ],
        [
            0,
            -2,
            0
        ]
    );

    const y = useSpring(
        targetY,
        spring
    );

    const handleKeyDown = (e) => {
        if (
            e.key === "Enter" ||
            e.key === " "
        ) {
            e.preventDefault();
            onClick?.();
        }
    };

    return (
        <motion.button
            ref={ref}
            type="button"
            style={{
                scale,
                y
            }}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            className={`
                dock-item
                ${active ? "active" : ""}
                ${className}
            `}
            aria-label={label}
        >
            {children}
        </motion.button>
    );
}

/* MAIN DOCK */
export default function Dock({
    items,
    className = "",
    spring = {
        mass: 0.15,
        stiffness: 180,
        damping: 18
    },
    magnification = 1.07,
    distance = 110,
    panelHeight = 58,
    dockHeight = 78,
    baseItemSize = 70
}) {
    const mouseX =
        useMotionValue(Infinity);

    const isHovered =
        useMotionValue(0);

    const maxHeight = useMemo(
        () =>
            Math.max(
                dockHeight,
                panelHeight + 20
            ),
        [
            dockHeight,
            panelHeight
        ]
    );

    const heightRow = useTransform(
        isHovered,
        [0, 1],
        [
            panelHeight,
            maxHeight
        ]
    );

    const height = useSpring(
        heightRow,
        spring
    );

    return (
        <motion.div
            style={{ height }}
            className="dock-outer"
        >
            <motion.div
                onMouseMove={(e) => {
                    isHovered.set(1);
                    mouseX.set(
                        e.clientX
                    );
                }}
                onMouseLeave={() => {
                    isHovered.set(0);
                    mouseX.set(
                        Infinity
                    );
                }}
                className={`
                    dock-panel
                    ${className}
                `}
                style={{
                    height: panelHeight
                }}
                role="toolbar"
                aria-label="Portfolio navigation"
            >
                {items.map((item) => (
                    <DockItem
                        key={item.path}

                        onClick={
                            item.onClick
                        }

                        active={
                            item.active
                        }

                        mouseX={
                            mouseX
                        }

                        spring={
                            spring
                        }

                        distance={
                            distance
                        }

                        magnification={
                            magnification
                        }

                        baseItemSize={
                            baseItemSize
                        }

                        label={
                            item.label
                        }
                    >
                        <span className="dock-text">
                            {item.label}
                        </span>
                    </DockItem>
                ))}
            </motion.div>
        </motion.div>
    );
}