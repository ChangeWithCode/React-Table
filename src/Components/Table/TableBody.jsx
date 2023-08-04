import TableRow from "./TableRow";
const TableBody = ({rowData , onDelete}) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <TableRow rowData = {rowData} onDelete={onDelete}></TableRow>
    </tbody>
  );
};

export default TableBody;
