'use client'
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DonationSections = () => {
    return (
        <div className="space-y-16">
            {/* Spendenbereich: Für den Verein */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 bg-white"
            >

                <Image
                    src="/vereinspende.jpg"
                    alt="Spenden für den Verein"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg"
                />
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">Spenden für den Verein</h3>
                    <p className="text-lg mb-6">
                        Unterstütze unseren Ringerverein und hilf uns, Trainingsausrüstung, Wettkampfvorbereitung und Nachwuchsförderung zu finanzieren.
                    </p>
                    <Link href="https://buy.stripe.com/test_4gw17j23c7yW9C85kk" passHref>
                        <Button
                            size="lg"
                            aria-label="Spenden für den Verein"
                            className="bg-lakers uppercase text-black hover:bg-yellow-300 transition-all duration-300 px-8 py-3 shadow-lg"
                        >
                            jetzt spenden
                        </Button>
                    </Link>
                </div>

            </motion.div>

            {/* Spendenbereich: Für soziale Projekte */}
            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12 bg-white"
            >
                {/* Hier wird im Desktop-Layout das Bild links und der Text rechts angezeigt */}
                <Image
                    src="/projektspende.jpg"
                    alt="Spenden für soziale Projekte"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg order-1 md:order-0"
                />
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">Spenden für soziale Projekte</h3>
                    <p className="text-lg mb-6">
                        Unterstütze auch unsere sozialen Projekte. Jeder Beitrag hilft dabei, junge Menschen zu fördern und soziale Initiativen voranzubringen.
                    </p>
                    <Link href="https://buy.stripe.com/test_dR6bLX7nwaL85lS8wx" passHref>
                        <Button
                            size="lg"
                            aria-label="Spenden für soziale Projekte"
                            className="bg-lakers text-black hover:bg-yellow-300 transition-all duration-300 px-8 py-3 shadow-lg uppercase "
                        >
                           jetzt spenden
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default DonationSections;
