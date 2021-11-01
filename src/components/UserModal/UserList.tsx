import { ReactElement, forwardRef, useImperativeHandle, useState, useCallback, useEffect, useMemo } from "react"
import { Modal, Table, Button, Space, Tooltip, message, Popconfirm } from 'antd'
import useModels from "hooks/useModels";
import useErrorCatcher from "hooks/useErrorCatcher";
import { ICollectionResult } from "@edgarjeremy/sirius.adapter/dist/libs/Utility";
import { ColumnsType } from "antd/lib/table";
import ModelInstance from "@edgarjeremy/sirius.adapter/dist/libs/ModelInstance";
import { DeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import AddUser, { userForm } from "./AddUser";

export interface forwardRefInterface {
  toggleModal: (state: boolean) => void;
}

const UserList = forwardRef<forwardRefInterface, {}>((props, ref): ReactElement => {
  const [modal, toggleModal] = useState<boolean>(false);
  const [addUser, toggleAddUser] = useState<boolean>(false);
  const [users, setUsers] = useState<ICollectionResult>({ rows: [], count: 0 });
  const [loading, toggleLoading] = useState<boolean>(true);
  const { models: { User } } = useModels();
  const { errorCatch } = useErrorCatcher();

  const getUsers = useCallback(() => {
    toggleLoading(true);
    User.collection({
      attributes: ['name', 'username', 'type'],
    }).then(resp => {
      toggleLoading(false);
      setUsers(resp);
    }).catch(errorCatch);
  }, [User, errorCatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const createUser = useCallback((val: userForm, cb: () => void) => {
    User.create(val).then(resp => {
      message.success(`Pengguna ${resp.name} berhasil dibuat`);
      cb();
      toggleAddUser(false);
      getUsers();
    }).catch(errorCatch);
  }, [User, getUsers, errorCatch])

  useImperativeHandle<forwardRefInterface, any>(ref, () => ({
    toggleModal
  }));

  const deleteUser = useCallback((user: ModelInstance) => {
    user.delete().then(resp => {
      message.success(`Pengguna ${resp.name} berhasil dihapus`);
      getUsers();
    }).catch(errorCatch);
  }, [getUsers, errorCatch])

  const columns: ColumnsType<ModelInstance> = useMemo<ColumnsType<ModelInstance>>(() => ([
    {
      title: 'Nama',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: 'Username',
      key: 'username',
      dataIndex: 'username'
    },
    {
      title: 'Tipe',
      key: 'type',
      dataIndex: 'type',
      render: (text) => text === 'lecturer' ? "Dosen" : "Mahasiswa"
    },
    {
      title: 'Hapus',
      key: 'action',
      render: (row: ModelInstance) => (
        <Space>
          <Tooltip title={`Hapus ${row.name}?`}>
            <Popconfirm title={`Apakah Anda ingin menghapus ${row.name}?`} okText="Hapus" cancelText="Batal" onConfirm={() => deleteUser(row)}>
            <Button icon={<DeleteOutlined />} size="small" danger type="primary" />
              </Popconfirm>
          </Tooltip>
        </Space>
      )
    },
  ]), [deleteUser]);

  return (
    <Modal footer={null} width={'60%'} title="Pengguna" visible={modal} onCancel={() => toggleModal(false)}>
      <Button onClick={() => toggleAddUser(true)} icon={<UserAddOutlined />}>Tambah Pengguna</Button>
      <Table
        dataSource={users.rows}
        loading={loading}
        pagination={false}
        bordered
        style={{ marginTop: 12 }}
        columns={columns}
        rowKey={item => `${item.id}`}
      />
      <AddUser onSubmit={createUser} onCancel={() => toggleAddUser(false)} visible={addUser} />
    </Modal>
  )
})

export default UserList
