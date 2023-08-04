// App.js
import React from "react";
import Table from "./Components/Table/Table";
import { AppProvider } from "./AppContext";

const App = () => {
  return (
    <AppProvider>
    <div className="overflow-x-auto ">
      <Table />
    </div>
    </AppProvider>
  );
};

export default App;
