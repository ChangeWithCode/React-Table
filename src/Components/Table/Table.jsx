import { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "../Table/TableBody";
const Table = () => {
  const tableHeader = [
    "name",
    "TITLE",
    "STATUS",
    "ROLE",
    "EMAIL",
    "View ALL",
    "ACTIONS",
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <TableHeader header={tableHeader}></TableHeader>
      <TableBody></TableBody>
    </table>
  );
};

export default Table;
