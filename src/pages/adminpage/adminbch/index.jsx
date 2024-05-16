import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { Form, Input, InputNumber, Button } from "antd";
import Spin from "../../../components/Spinner";
import Spinner from "react-bootstrap/Spinner";

const { Item } = Form;

const BCH = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(true);
  const [user, setUser] = useState([]);
  const [noEdit, setNoEdit] = useState(true);

  const { admin } = useSelector((state) => state.admin);

  const params = useParams();
  const token = admin.token;

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

  const { BCH } = user;

  useEffect(() => {
    form.setFieldsValue({
      deposit: BCH?.deposit,
      pending: BCH?.pending,
      bonus: BCH?.bonus,
      profit: BCH?.profit,
      walletAddress: BCH?.walletAddress,
      walletImg: BCH?.walletImg,
    });
  }, [
    form,
    BCH?.deposit,
    BCH?.pending,
    BCH?.bonus,
    BCH?.profit,
    BCH?.walletAddress,
    BCH?.walletImg,
  ]);

  const onFinish = async (values) => {
    const { walletAddress, walletImg, deposit, pending, bonus, profit } =
      values;
    const proceed = window.confirm(
      "Are you sure you want to update this user? Click OK to proceed"
    );
    if (proceed) {
      setBusy(true);
      try {
        await axios.patch(
          process.env.REACT_APP_BASE_URI + `/admin/${params.userId}`,
          {
            BCH: { walletAddress, walletImg, deposit, pending, bonus, profit },
          },
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
    } else {
      return null;
    }
  };

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-btc-cont">
      <Form
        form={form}
        name="btc"
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Item
          className="edit-form-item"
          name="walletAddress"
          label=" Wallet Addresss:"
        >
          <Input className="edit-form-input" readOnly={noEdit} />
        </Item>
        <Item
          className="edit-form-item"
          label=" Wallet Image:"
          name="walletImg"
        >
          <Input className="edit-form-input" readOnly={noEdit} />
        </Item>
        <Item
          className="edit-form-item"
          label="Deposited Amount:"
          name="deposit"
        >
          <InputNumber
            className="edit-form-input edit-form-amount"
            readOnly={noEdit}
          />
        </Item>
        <Item
          className="edit-form-item"
          label="Pending Balance:"
          name="pending"
        >
          <InputNumber
            className="edit-form-input edit-form-amount"
            readOnly={noEdit}
          />
        </Item>
        <Item className="edit-form-item" label="Bonus Balance:" name="bonus">
          <InputNumber
            className="edit-form-input edit-form-amount"
            readOnly={noEdit}
          />
        </Item>
        <Item className="edit-form-item" label="Profit:" name="profit">
          <InputNumber
            className="edit-form-input edit-form-amount"
            readOnly={noEdit}
          />
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
    </div>
  );
};

export default BCH;
