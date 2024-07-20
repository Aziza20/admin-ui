import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Mydatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "categories"), // Ganti 'categories' dengan nama koleksi Anda
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "categories", id)); // Ganti 'categories' dengan nama koleksi Anda
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


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

// eslint-disable-next-line no-unused-vars
const actionColumn = [
];

// eslint-disable-next-line no-unused-vars
const Mydatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>

      <DataGrid
        rows={rows}
        columns={columns.concat([
            {
              field: "action",
              headerName: "Action",
              width: 200,
              renderCell: (params) => {
                return (
                  <div className="cellAction">
                    <span
                      className="deleteButton"
                      data-testid="deleteButton"
                      onClick={() => handleDelete(params.row.id)}
                    >
                      Delete
                    </span>
                  </div>
                );
              },
            },
          ])}
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
}
export default Mydatatable;