import { Card} from 'reactstrap'
import DataTable from "react-data-table-component";
import React, { useEffect } from 'react';



const columns = [
  {
    id: 1,
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Code",
    selector: (row) => row.code,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    right: true,
    reorder: true
  }
];



const conditionalRowStyles = [
  {
    when: row => row.calories < 300,
    style: {
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  // You can also pass a callback to style for additional customization
  {
    when: row => row.calories < 400,
    style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
  },
];


const SecondPage = () => {

	const [rows, setRows] = React.useState([]);


  const fetchGet = async () => {
    const response = await fetch(
        "http://10.10.10.10/api/getSubject"
      );
     const data = await response.json();
     console.log(data)
     setRows(data);
    };

  useEffect(() => {
      fetchGet()
  }, []);

  return (
    <Card>
      <DataTable
          title="Subjects"
          columns={columns}
          data={rows}
          pagination
          conditionalRowStyles={conditionalRowStyles}
        />
    </Card>
  )
}

export default SecondPage
