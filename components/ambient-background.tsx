'use client'
import { motion } from 'motion/react'

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            {/* Primary blue wash — drifts slowly across the whole viewport */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(37,99,235,0.45) 0%, rgba(30,64,175,0.10) 30%, transparent 60%)',
                        'radial-gradient(ellipse 100% 80% at 42% 35%, rgba(59,130,246,0.40) 0%, rgba(30,64,175,0.08) 30%, transparent 60%)',
                        'radial-gradient(ellipse 100% 80% at 58% 15%, rgba(37,99,235,0.50) 0%, rgba(30,64,175,0.12) 30%, transparent 60%)',
                        'radial-gradient(ellipse 100% 80% at 45% 28%, rgba(59,130,246,0.42) 0%, rgba(30,64,175,0.09) 30%, transparent 60%)',
                        'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(37,99,235,0.45) 0%, rgba(30,64,175,0.10) 30%, transparent 60%)',
                    ],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Indigo accent — bottom right, slower drift */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(ellipse 70% 60% at 80% 70%, rgba(99,102,241,0.20) 0%, transparent 50%)',
                        'radial-gradient(ellipse 70% 60% at 75% 60%, rgba(79,70,229,0.25) 0%, transparent 50%)',
                        'radial-gradient(ellipse 70% 60% at 85% 75%, rgba(99,102,241,0.18) 0%, transparent 50%)',
                        'radial-gradient(ellipse 70% 60% at 80% 70%, rgba(99,102,241,0.20) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-blue-500/[0.15] to-transparent" />
        </div>
    )
}
