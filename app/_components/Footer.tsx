"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-border py-6 pl-7 md:pl-23"
    >
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Miguel Collaço. All rights reserved.
      </p>
    </motion.footer>
  );
}
