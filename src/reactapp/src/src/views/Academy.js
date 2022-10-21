import { Card} from 'reactstrap'
import DataTable from "react-data-table-component";
import React, { useEffect } from 'react';
import endpoint from './endpoint'
import { handleLogout } from '@store/actions/auth'
import { useDispatch } from 'react-redux'

const columns = [
  {
    id: 1,
    name: "Student's ID",
    selector: (row) => row.idStudent,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Student's name",
    selector: (row) => row.nameStudent,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 2,
    name: "Subject's ID",
    selector: (row) => row.idSubject,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 2,
    name: "Subject's name",
    selector: (row) => row.nameSubject,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 2,
    name: "Subject's name",
    selector: (row) => row.nameSubject,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 2,
    name: "Semester",
    selector: (row) => row.time,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 2,
    name: "Score",
    selector: (row) => row.score,
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
  const dispatch = useDispatch()
	const [rows, setRows] = React.useState([]);


  const fetchGet = async () => {
    const response = await fetch(
        `${endpoint}/api/getAcademy`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': JSON.parse(localStorage.getItem('userData')).accessToken
          }
        }
      );
     const data = await response.json();
     console.log(data)
     if ('error' in data){
        dispatch(handleLogout())
        window.location.href = '/'
    }
    else {
      setRows(data);
    }
     
    };

  useEffect(() => {
      fetchGet()
  }, []);

  return (
    <Card>
      <DataTable
          title="Academy"
          columns={columns}
          data={rows}
          pagination
          conditionalRowStyles={conditionalRowStyles}
        />
    </Card>
  )
}

export default SecondPage
