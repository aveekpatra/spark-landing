'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export default function Reveal({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}
