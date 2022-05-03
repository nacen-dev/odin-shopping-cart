import React from "react";
import { MdClose } from "react-icons/md";
import { IModal, Modal } from "../Modal/Modal";
import styles from "./SideDrawer.module.css"

interface Props extends IModal {}

const SideDrawer = ({ onClose, open, className, children }: Props) => {
  return (
    <Modal
      onClose={onClose}
      open={open}
      className={`right-0 top-0 h-full overflow-y-scroll w-[300px] p-4 rounded-none flex flex-col
       ${styles.sideDrawer} ${className}`}
    >
        <button
          className="flex items-center text-xl self-end mb-4"
          onClick={onClose}
        >
          Close
          <MdClose />
        </button>
      {children}
    </Modal>
  );
};

export { SideDrawer };
