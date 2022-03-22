import { useState, useEffect, useRef } from "react";

export const useModalClose = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const outside_modal = useRef();
  const handleModalClose = (e) => {
    if (outside_modal.current === e.target) {
      setModalOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleModalClose);
  }, [modalOpen]);

  return [modalOpen, setModalOpen, outside_modal];
};
