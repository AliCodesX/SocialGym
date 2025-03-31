'use client';

import { motion } from "framer-motion";
import {Tarife} from "@/app/Components/Tarife";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3 } },
};




export default function Subscriptions() {

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className=" bg-background-100 p-8 flex flex-col items-center  " >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="max-w-6xl w-full max-h-2xl space-y-8 flex-grow">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">Wähle dein Tarif</h1>
                    <p className="text-default-500 text-lg">
                        Wähle den perfekten Tarif für deine Bedürfnisse
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}>
                    <Tarife />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
