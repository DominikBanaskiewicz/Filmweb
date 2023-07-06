import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
export const InitialMoveContainer = ({ element, isInViewCheck }) => {
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInViewCheck);
    if (isInViewCheck) {
      mainControls.start('visible');
    }
    console.log(isInViewCheck);
  }, [isInViewCheck]);
  return (
    <motion.div
      whileInView="onscreen"
      variants={{
        hidden: { opacity: 0, x: 300 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {element}
    </motion.div>
  );
};
//proptypes do dopisania
