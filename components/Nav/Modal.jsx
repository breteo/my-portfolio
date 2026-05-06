import { useEffect } from "react";
import { PropTypes } from "prop-types";

export default function Modal({ showMenu, children }) {
  useEffect(() => {
    // Prevent scrolling
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to restore original state
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);
  if (!showMenu) return null;
  return <>{children}</>;
}

Modal.propTypes = {
  showMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
