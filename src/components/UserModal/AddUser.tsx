import { FC, ReactElement, useCallback, useState } from "react"
import { Modal, Input, Radio, Form, Button } from 'antd'
import { LoadingOutlined } from "@ant-design/icons";

export type userForm = {
  name: string;
  username: string;
  password: string;
  type: string;
}

interface props {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (val: userForm, cb: () => void) => void;
}

const { Item, useForm } = Form;

const AddUser: FC<props> = ({ visible, onCancel, onSubmit }): ReactElement => {
  const [form] = useForm();
  const [loading, toggleLoading] = useState<boolean>(false);

  const resetForm = useCallback(() => {
    toggleLoading(false);
    form.resetFields(['name', 'username', 'password', 'type']);
  }, [form]);

  const onFinish = useCallback((val: userForm) => {
    toggleLoading(true);
    onSubmit(val, resetForm);
  }, [resetForm, onSubmit])

  return (
    <Modal title="Tambah Pengguna" visible={visible} onCancel={onCancel} afterClose={resetForm} footer={null}>
      <Form onFinish={onFinish} layout="vertical" form={form}>
        <Item label="Nama" name="name" rules={[{ required: true, message: "Masukkan Nama" }]}>
          <Input prefix={loading && <LoadingOutlined spin />} placeholder="Nama" />
        </Item>
        <Item label="Username" name="username" rules={[{ required: true, message: "Masukkan Username" }]}>
          <Input prefix={loading && <LoadingOutlined spin />} placeholder="Username" />
        </Item>
        <Item label="Password" name="password" rules={[{ required: true, message: "Masukkan Password" }]}>
          <Input.Password prefix={loading && <LoadingOutlined spin />} placeholder="Password" />
        </Item>
        <Item label="Tipe" name="type" rules={[{ required: true, message: "Pilih tipe" }]}>
          <Radio.Group>
            <Radio value="lecturer">Dosen</Radio>
            <Radio value="student">Mahasiswa</Radio>
          </Radio.Group>
        </Item>
        <Item>
          <Button htmlType="submit" loading={loading}>Tambah pengguna</Button>
        </Item>
      </Form>
    </Modal>
  )
}

export default AddUser
