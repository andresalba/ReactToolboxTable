import './App.css';
import DataTable from 'react-data-table-component';
import mock from './MOCK_DATA.json';

const data = mock; //MOCK_DATA.json source: https://www.mockaroo.com/

const columns = [
  {
    name: "first_name",
    selector: row => row.first_name
  },
  {
    name: "last_name",
    selector: row => row.last_name
  },
  {
    name: "email",
    selector: row => row.email
  },
  {
    name: "gender",
    selector: row => row.gender
  },
  {
    name: "ip_address",
    selector: row => row.ip_address
  }
] 

function App() {
  return (
    <div className="App">
      <h1>React Data Table Component</h1>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default App;
