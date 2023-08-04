const Modal = ({ setIsOpen, modalData }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
            <h3
              className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
              id="modal-title"
            >
              View Your Data
            </h3>
            <div class="flex">
              <div class="p-2 w-full">
                {modalData.map((item) => {
                  return Object.keys(item).map((key) => {
                    if (key !== "id" && key !== "avatar") {
                      return (
                        <div class="bg-gray-100 rounded flex p-4 mb-4 items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span class="font-medium">{`${key}: ${item[key]}`}</span>
                        </div>
                      );
                    }
                  });
                })}
              </div>
            </div>
              <div class="sm:flex sm:items-center ">
                <button class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                
                onClick={() => setIsOpen(false)}
                
                >
                  Close
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
