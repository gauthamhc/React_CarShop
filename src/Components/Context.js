import React, { createContext } from "react";

export default DataContext = createContext();

const Context = () => {
  return (
    <DataContext.provider>
      <h2>Hello</h2>
    </DataContext.provider>
  );
};
