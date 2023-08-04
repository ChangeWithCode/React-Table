import Status from "./Status";
import TableActions from "./TableActions";
import ViewModal from "../Buttons/ViewModal";
import { useAppContext } from "../../AppContext";
const TableRow = () => {
  const { setTableData , tableData } = useAppContext();


  const handleDelete = (id) => {
    // Filter out the row to delete from the tableData array
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
   
  };


  return (
    <>
      {tableData?.map((obj) => {
        return (
          <tr key={obj.id} className="bg-primary">
            <td className="px-6 py-4 whitespace-nowrap ">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src={obj.avatar} />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-font-tableRow">
                    {obj.name}
                  </div>
                  <div className="text-sm text-font-tableRow">{obj.email}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-font-tableRow">{obj.position}</div>
              <div className="text-sm text-font-tableRow">{obj.department}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Status status={obj.status}></Status>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-font-tableRow">
              {obj.role}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-font-tableRow">
              {obj.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
            <ViewModal id = {obj.id}></ViewModal>
            </td>
            
            <TableActions onDelete={handleDelete} id = {obj.id} ></TableActions>
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
