const TableHeader = ({ header }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {header?.map((item , index) => {
          return (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              key={index}
            >
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
