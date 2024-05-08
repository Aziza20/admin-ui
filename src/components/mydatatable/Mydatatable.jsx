import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, Name: "Rinso" },
  { id: 2, Name: "Pepsodent" },
  { id: 3, Name: "So Klin" },
  { id: 4, Name: "Formula" },
  { id: 5, Name: "Ponds" },
  { id: 6, Name: "Milo" },
  { id: 7, Name: "Dancow" },
  { id: 8, Name: "SilverQueen" },
  { id: 9, Name: "Dairy Milk" },
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