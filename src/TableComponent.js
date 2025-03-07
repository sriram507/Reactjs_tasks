import React from "react";

const TableComponent = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>28</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
