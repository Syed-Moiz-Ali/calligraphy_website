import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function AnimateDiv({
    children,
    delay = 0, // Delay in ms for staggering
    className = "",
    type = "bounce", // Options: "bounce", "parallax", "pop", "spin"
    intensity = 1, // Multiplier for effect strength (0.5 to 2)
}) {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animate once
        threshold: 0.3, // Trigger when 30% visible
    });

    // AnimateDiv configs based on type
    const AnimateDivProps = {
        bounce: {
            from: { opacity: 0, transform: "translateY(50px) scale(0.95)" },
            to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.95)" },
            config: { mass: 1, tension: 200, friction: 20 }, // Springy bounce
        },
        parallax: {
            from: { opacity: 0, transform: "translateY(80px)" },
            to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(80px)" },
            config: { mass: 2, tension: 120, friction: 30 }, // Smooth glide
        },
        pop: {
            from: { opacity: 0, transform: "scale(0.8)" },
            to: { opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.8)" },
            config: { mass: 1, tension: 300, friction: 15 }, // Sharp pop
        },
        spin: {
            from: { opacity: 0, transform: "translateY(30px) rotate(10deg)" },
            to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0) rotate(0deg)" : "translateY(30px) rotate(10deg)" },
            config: { mass: 1, tension: 180, friction: 12 }, // Subtle spin
        },
    };

    const selectedAnimateDiv = AnimateDivProps[type] || AnimateDivProps.bounce; // Default to bounce

    const props = useSpring({
        ...selectedAnimateDiv,
        delay,
        transform: selectedAnimateDiv.to.transform.replace(
            /scale\((\d+\.?\d*)\)/,
            `scale(${parseFloat(selectedAnimateDiv.to.transform.match(/scale\((\d+\.?\d*)\)/)?.[1] || 1) * intensity})`
        ), // Adjust intensity
    });

    return (
        <animated.div ref={ref} style={props} className={className}>
            {children}
        </animated.div>
    );
}

export default AnimateDiv