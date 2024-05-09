import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 }
];

const rows = [
  { id: 1, name: "Coffe" },
  { id: 2, name: "Non Coffe" },
  { id: 3, name: "Cake"},
  { id: 4, name: "Pastry"},
  { id: 5, name: "Cookie"},
  { id: 6, name: "Matcha",},
  { id: 7, name: "Expresso"},
  { id: 8, name: "Thai Tea"},
  { id: 9, name: "Astor"},
  { id: 10, name: "Americano"},
];

const actionColumn = [
];

const Mydatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>

      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;