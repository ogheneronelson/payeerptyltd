import React from 'react'
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const AdminRecords = ({users}) => {
  return (
    <Table striped bordered hover responsive className="admin-dash-table">
    <thead>
      <tr>
        <th className="invest-head">S/N</th>
        <th className="invest-head">Name</th>
        <th className="invest-head">Email</th>
        <th className="invest-head">Phone</th>
        <th className="invest-head">Country</th>
        <th className="invest-head">Occupation</th>
        <th className="invest-head"></th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td className='admin-user-name'>
            {user?.firstname} {user?.lastname}
          </td>
          <td>{user?.email}</td>
          <td>{user?.phone}</td>
          <td>{user?.country}</td>
          <td>{user?.occupation}</td>
          <td>
            <Link
              className="admin-dash-table-link"
              to={`/admin/user/${user?._id}`}
            >
              View User
            </Link>
          </td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </Table>
  )
}

export default AdminRecords