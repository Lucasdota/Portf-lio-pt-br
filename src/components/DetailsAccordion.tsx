import { motion } from "framer-motion";

type Props = {
  id: number;
  isExpanded: boolean;
  toggleAccordion: (id: number) => void;
  details: string[]
};

const DetailsAccordion = ({
  id,
  isExpanded,
  toggleAccordion,
  details
}: Props) => {
  return (
    <>
      <button
        aria-label="expand details"
        role="accordion"
        aria-expanded={isExpanded}
        onClick={() => toggleAccordion(id)}
        className={`grow outline-none transition duration-400 ease-in flex justify-start items-center leading-6 sm:whitespace-normal
				 dark:text-stone-400 text-stone-600 text-[0.93rem]`}
      >
        mais detalhes
        <p className={`ml-1 ${isExpanded ? "" : null}`}>
          {isExpanded ? "-" : "+"}
        </p>
      </button>
      {isExpanded && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <ul
            className={`font-[350] whitespace-normal text-[0.93rem] text-neutral-600 dark:text-green-400 mx-4 space-y-1.5`}
          >
            {details.map((item, index) => {
              return (
                <li key={"details" + index}>
                  <p className="text-thin leading-5 text-neutral-700 dark:text-neutral-100">
                    .{item}
                  </p>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default DetailsAccordion;
