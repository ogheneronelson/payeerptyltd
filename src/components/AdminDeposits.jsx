import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";

const AdminDeposits = ({ depositData }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th className="invest-head">S/N</th>
          <th className="invest-head">Email</th>
          <th className="invest-head">Coin</th>
          <th className="invest-head">Amount</th>
          <th className="invest-head">Plan</th>
          <th className="invest-head">Status</th>
          <th className="invest-head">Reference</th>
          <th className="invest-head">Date</th>
          <th className="invest-head">Maturity</th>
        </tr>
      </thead>
      <tbody>
        {depositData?.map((deposit, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{deposit?.email}</td>
            <td style={{textTransform: "capitalize"}}>{deposit?.coin}</td>
            <td> ${deposit?.amount}</td>
            <td style={{textTransform: "capitalize"}}>{deposit?.plan}</td>
            <td>{deposit?.status}</td>
            <td style={{textTransform: "uppercase"}}>{deposit?.reference}</td>
            <td>{moment(deposit?.createdAt).format("YYYY/MM/DD HH:MM:SS")}</td>
            <td>
              {moment(deposit?.maturitytime).format("YYYY/MM/DD HH:MM:SS")}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminDeposits;
