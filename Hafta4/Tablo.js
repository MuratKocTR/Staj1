import { ReactDOM } from "react";
import React, { Component } from "react";
import { useTable } from "react-table";
import TextTr from "./TextTr";

const data = [
  { firstName: "Jane", lastName: "Doe", status: "OPEN" , id: "1" },
  { firstName: "John", lastName: "Smith", status: "CLOSE"  , id: "2" },
  { firstName: "John", lastName: "Walker", status: "OPEN" , id: "3" }
];
const columns = [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Status",
        accessor: "status"
      }
];

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

    const butFunction = (level , id) => {
      console.log(level)
      console.log(id)
    if (level === "OPEN") {
      return <button > CLOSE </button>;
    } else {
      return <button > OPEN </button>;
    }
  };
 
  return (
   
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
            <th>Action</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
              <td>{ butFunction(row.values.status, row.original.id) }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    
  );
};

export default class Tablo extends Component {
     render(){
  return (
    <div>
        <TextTr></TextTr>
      <Table columns={columns} data={data} />
    </div>
  );
  }
}
