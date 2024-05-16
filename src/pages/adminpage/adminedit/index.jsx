import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Spin from "../../../components/Spinner";
import Spinner from "react-bootstrap/Spinner";
import { Outlet } from "react-router-dom";
import CoinNav from "../../../components/coinnav";

import { Form, Input, InputNumber, Button } from "antd";

const { Item } = Form;

const AdminEditUser = () => {
  const [form] = Form.useForm();

  
  const [busy, setBusy] = useState(true);
  const [user, setUser] = useState([]);
  const [noEdit, setNoEdit] = useState(true);
  const [ref, setRef] = useState([]);
  const [refs, setRefs] = useState([]);

  const { admin } = useSelector((state) => state.admin);
  const token = admin.token;
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/${params.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setUser(res.data);
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
  }, [token, params.userId]);

  useEffect(() => {
    form.setFieldsValue({
      referralEarnings: user?.referralEarnings,
      verified: user?.verified,
      status: user?.status,
      active: user?.active === false ? "false" : "true",
      withdrawnbalance : user?.withdrawnbalance ? user?.withdrawnbalance : 0,
      transferredbalance : user?.transferredbalance ? user?.transferredbalance : 0,
    });
  }, [
    form,
    user?.referralEarnings,
    user?.verified,
    user?.status,
    user?.active,
    user?.withdrawnbalance,
    user?.transferredbalance
  ]);

  const onFinish = async (values) => {
    const proceed = window.confirm(
      "Are you sure you want to update this user? Click OK to proceed"
    );
    if (proceed) {
      let { active } = values;
      if (active) {
        switch (active?.toLowerCase()?.trim()) {
          case "true":
          case "yes":
          case "1":
            active = true;
            break;
          case "false":
          case "no":
          case "0":
          case null:
          case undefined:
            active = false;
            break;
          default:
            return JSON.parse(active);
        }

        let newValues = { ...values, active };
        setBusy(true);
        try {
          await axios.patch(
            process.env.REACT_APP_BASE_URI + `/admin/${params.userId}`,
            newValues,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setBusy(false);
          toast.success("User updated successfully");
          setNoEdit(true);
        } catch (error) {
          if (error?.response?.data) {
            const { data } = error.response;
            if (!data.success) {
              toast.error(data.msg);
            }
            setBusy(false);
            return console.log(error.response.data);
          }
          console.log(error);
          setBusy(false);
        }
        setBusy(false);
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    const getRef = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/referrals/${params.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setRef(res.data);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            console.log(data.msg);
          }
          return console.log(error.response.data);
        }
        console.log(error);
      }
      setBusy(false);
    };
    getRef();
  }, [token, params.userId]);

  useEffect(() => {
    const getRefs = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/admin/referral-names/${params.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRefs(res.data);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            console.log(data.msg);
          }
          return console.log(error.response.data);
        }
        console.log(error);
      }
    };
    getRefs();
  }, [token, params.userId]);

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-edit-cont">
      <div className="account-referral admin-ref-con">
        <h5>Referral Information</h5>
        <div>
          <p>People referred({ref.length})</p>
        </div>
        <div>
          <h6 className="refs-list">Referral List</h6>
          {refs?.map((item, index) => (
            <p className="refs-item" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="account-referral-3">
          <p className="refs-earning">
            Referral Earnings=
            <span className="referral-balance">
              ${user?.referralEarnings}
            </span>
          </p>
        </div>
      </div>
      <Form
        form={form}
        name="edituser"
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Item
          className="edit-form-item"
          label="Referral Earnings:"
          name="referralEarnings"
        >
          <InputNumber
            className="edit-form-input edit-form-amount"
            readOnly={noEdit}
          />
        </Item>
        <Item
          className="edit-form-item"
          label="Withdrawn Amount:"
          name="withdrawnbalance"
        >
          <InputNumber
            className="edit-form-input edit-form-amount"
            readOnly={noEdit}
          />
        </Item>
        <Item
          className="edit-form-item"
          name="verified"
          label=" Verification Status:"
        >
          <Input className="edit-form-input" readOnly={noEdit} />
        </Item>
        <Item className="edit-form-item" label=" Email Verified" name="active">
          <Input className="edit-form-input" readOnly={noEdit} />
        </Item>
        <Item className="edit-form-item" label="Account Status:" name="status">
          <Input className="edit-form-input" readOnly={noEdit} />
        </Item>
        {noEdit && (
          <Item
            shouldUpdate
            className="edit-form-item"
            wrapperCol={{
              span: 24,
            }}
          >
            <Button
              className="edit-form-input edit-form-button"
              onClick={() => setNoEdit(false)}
            >
              Edit User
            </Button>
          </Item>
        )}

        {!noEdit && (
          <Item
            shouldUpdate
            className="edit-form-item"
            wrapperCol={{
              span: 24,
            }}
          >
            {() => (
              <Button
                className="edit-form-input edit-form-button"
                htmlType="submit"
                disabled={
                  busy ||
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
                &nbsp; Submit
              </Button>
            )}
          </Item>
        )}
      </Form>
      <div>
        <CoinNav user={user} />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminEditUser;
