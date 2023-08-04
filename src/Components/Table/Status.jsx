const Status = ({ status }) => {
  return (
    <>
      {status === "Active" ? (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {status}
        </span>
      ) : (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black">
          {status}
        </span>
      )}
    </>
  );
};

export default Status;
