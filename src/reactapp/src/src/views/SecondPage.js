import { Card} from 'reactstrap'
import DataTable from "react-data-table-component";
import data from "./datatables/movies";
import React from 'react';
import styled, { keyframes } from 'styled-components';


const columns = [
  {
    id: 1,
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Runtime (m)",
    selector: (row) => row.runtime,
    sortable: true,
    right: true,
    reorder: true
  }
];

const rotate360 = keyframes`
 from {
   transform: rotate(0deg);
 }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	margin: 16px;
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 80px;
	height: 80px;
	border-radius: 50%;
`;

const customStyles = {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
};

const CustomLoader = () => (
  	<div style={{ padding: '24px' }}>
  		<Spinner />
  		<div>Fancy Loader...</div>
  	</div>
  );

const SecondPage = () => {

  const [pending, setPending] = React.useState(true);
	const [rows, setRows] = React.useState([]);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(data);
			setPending(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);

  return (
    <Card>
      <DataTable
          title="Movies"
          columns={columns}
          data={rows}
          defaultSortFieldId={1}
          progressPending={pending}
			    progressComponent={<CustomLoader />}
          pagination
          customStyles={customStyles}
        />
    </Card>
  )
}

export default SecondPage
