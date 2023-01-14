import React from 'react'
import { motion } from "framer-motion"

const Header = () => {
    return(
        <motion.div initial={{y:-250}} animate={{y:-10}} transition={{delay:0.2, type:'spring', stiffness: 120}}>
            <h1>Notas</h1>
        </motion.div>
    )
}

export default Header