import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Spin from "../../../components/Spinner";
import { Form, Button, Input } from "antd";
import { BsSearch } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../../../components/pagination";
import AdminRecords from "../../../components/AdminRecords";

const { Item } = Form;

const Dashboard = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(true);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);

  const numberOfPages = Math.ceil(users.length / recordsPerPage);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onFinish = async () => {
    if (search) {
      const tag = search.toLowerCase();
      console.log(tag);
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/?tag=${tag}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setUsers(res.data);
        form.resetFields();
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }

          return console.log(error.response.data);
        }
        console.log(error);
      }
      setBusy(false);
    } else {
      return;
    }
  };

  const onFinishFailed = (error) => {
    console.log("Failed:", error);
  };

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(process.env.REACT_APP_BASE_URI + `/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBusy(false);
        setUsers(res.data);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }

          return console.log(error.response.data);
        }
        console.log(error);
      }
      setBusy(false);
    };
    fetchData();
  }, [token]);

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-dashboard">
      <h2>List of Users</h2>

      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="admin-search-form"
      >
        <Item className="admin-search-item">
          <Input
            onChange={onSearchChange}
            placeholder="search user by firstname, lastname, email or username"
          />
        </Item>
        <Item>
          <Button
            htmlType="submit"
            disabled={
              busy ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            {busy && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}{" "}
            &nbsp;
            <BsSearch />
          </Button>
        </Item>
      </Form>

      <AdminRecords users={currentRecords} />

      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
