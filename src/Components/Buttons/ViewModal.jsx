import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useAppContext } from "../../AppContext";
const ViewModal = ({id}) => {

    const [isOpen, setIsOpen] = useState(false);

    const [modalData, setModalData] = useState(false);

    const { tableData } = useAppContext();

    const handleOpenModal = () => {
        setIsOpen(true);

        const viewData  = tableData.filter((item) => item.id === id)

        setModalData(viewData);

      };


      

  return (
    <div className="inline-flex rounded-lg border border-gray-100">
      <button 
      
      onClick={handleOpenModal}

      className="inline-flex items-center rounded-md px-4 bg-secondary py-2 text-sm text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        View
      </button>
      {isOpen && <Modal setIsOpen = {setIsOpen} modalData={modalData}></Modal>}
    </div>
    
  );
};

export default ViewModal;
