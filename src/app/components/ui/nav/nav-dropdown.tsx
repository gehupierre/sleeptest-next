import { AnimatePresence, motion } from "framer-motion";

export function NavDropDownListItem({
  label = "",
  href = "",
  className = "",
  ...props
}) {
  return (
    <li>
      <a
        href={href}
        className={`block px-4 py-2 text-ion-blue hover:text-ion-green transition-colors delay-75 ${className}`}
        {...props}
      >
        {label}
      </a>
    </li>
  );
}

export function NavDropDown({ isOpened = false, ...props }) {
  return (
    <AnimatePresence>
      {isOpened ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{
            delay: 0.2,
            type: "spring",
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-7 z-10 w-56 bg-ion-bluelite divide-y divide-ion-blue rounded-lg shadow-md"
        >
          <ul className="py-2 text-left">{props.children}</ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
