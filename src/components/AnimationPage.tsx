import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0.61, 1, 0.88, 1],
		},
	},
};

const AnimationPage = ({ children }: { children: ReactNode }): JSX.Element => (
	<AnimatePresence>
		<motion.div initial="initial" animate="enter" variants={variants}>
			{children}
		</motion.div>
	</AnimatePresence>
);

export default AnimationPage;
