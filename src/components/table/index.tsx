import * as React from "react";
// import { useTable, useSortBy } from "react-table";

export interface ITableProps {
  columns: any;
  data: any[];
  class: any;
}

const Table: React.FC<ITableProps> = (props: React.PropsWithChildren<ITableProps>) => {
  // const { columns, data } = props;
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
  //   {
  //     columns,
  //     data,
  //   },
  //   useSortBy
  // );

  return (
    // <table {...getTableProps()}>
    //   <thead>
    //     {headerGroups.map((headerGroup) => (
    //       <tr {...headerGroup.getHeaderGroupProps()}>
    //         {headerGroup.headers.map((column) => (
    //           <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody {...getTableBodyProps()}>
    //     {data.map((row, i) => {
    //       prepareRow(row);
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {row.cells.map((cell: any) => {
    //             return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
    //           })}
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
    <></>
  );
};

export default Table;
