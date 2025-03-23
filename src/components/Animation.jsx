import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

function AnimateDiv({
    children,
    delay = 0, // Delay in ms for staggering
    className = "",
    type = "bounce", // Options: "bounce", "parallax", "pop", "spin"
    intensity = 1, // Multiplier for effect strength (0.5 to 2)
}) {
    const variants = {
        fade: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay * 0.001 } }
        },
        parallax: {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: delay * 0.001 } }
        },
        slide: {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: delay * 0.001 } }
        }
      };
    
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={variants[type]}
          className={className}
        >
          {children}
        </motion.div>
      );
}

export default AnimateDiv


// const AnimateElement = ({ children, type = "fade", delay = 0, className = "" }) => {
//     const variants = {
//       fade: {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay * 0.001 } }
//       },
//       parallax: {
//         hidden: { opacity: 0, scale: 0.95 },
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: delay * 0.001 } }
//       },
//       slide: {
//         hidden: { opacity: 0, x: -30 },
//         visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: delay * 0.001 } }
//       }
//     };
  
//     return (
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         variants={variants[type]}
//         className={className}
//       >
//         {children}
//       </motion.div>
//     );
//   };