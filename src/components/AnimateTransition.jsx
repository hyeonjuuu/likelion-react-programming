import { motion, AnimatePresence } from 'framer-motion';
import { node } from 'prop-types';
import { useLocation } from 'react-router-dom';

function AnimateTransition({ children }) {
  // 장면 전환
  const location = useLocation();
  return (
    // 이 값으로 애니메이션을 제어할 수 있다.
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.4,
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

AnimateTransition.propTypes = {
  children: node.isRequired,
};

export default AnimateTransition;
