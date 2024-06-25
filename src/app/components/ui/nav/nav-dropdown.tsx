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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            stiffness: 10,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0 }}
          className="absolute top-6 z-10 w-56 bg-ion-bluelite divide-y divide-ion-blue rounded-lg shadow"
        >
          <ul className="py-2 text-left">{props.children}</ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
