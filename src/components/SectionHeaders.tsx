import { motion } from "framer-motion";

interface SectionHead {
  topheader: string;
  bottomheader?: string;
}

const SectionHeaders = ({ topheader, bottomheader }: SectionHead) => {
  return (
    <div className="flex justify-center items-center flex-col py-2 uppercase lg:lowercase">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="lg:translate-x-4 lg:text-3xl text-2xl font-bold"
      >
        {topheader}
      </motion.div>

      {bottomheader && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center lg:text-3xl text-2xl font-medium font-mono"
        >
          {bottomheader}
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeaders;
