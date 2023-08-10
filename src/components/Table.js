import "./styling.css";

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((id, data) => {
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.operational}</td>//"create a conditional that will tell a user if a satellite is active or inactive based on its operational value."
        </tr>
        }
        )};
        </tbody>
      </table>
  );
};

export default Table;