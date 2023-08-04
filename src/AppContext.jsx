import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      position: "Regional Paradigm Technician",
      department: "Fe Lead",
      status: "Active",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      position: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Disabled",
      role: "User",
    },
    {
        id: 3,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Disabled",
        role: "User",
      },
      {
        id: 4,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "User",
      },
      {
        id: 5,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Disabled",
        role: "User",
      },
      {
        id: 6,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "User",
      },
      {
        id: 7,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Disabled",
        role: "User",
      },
      {
        id: 8,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Disabled",
        role: "User",
      },
      {
        id: 9,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "User",
      },
      {
        id: 10,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Disabled",
        role: "User",
      },
      {
        id: 11,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        position: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "User",
      },
  ]);

 

  return (
    <AppContext.Provider value={{ tableData, setTableData }}>
      {children}
    </AppContext.Provider>
  );
};
