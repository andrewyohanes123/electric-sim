import useAuth from "hooks/useAuth"
import { FC, ReactElement } from "react"
import { Redirect } from "react-router";
import Layout from './Layout'

const HomePage: FC = (): ReactElement => {
  const { login } = useAuth();
  return (
    login ?
      <Layout />
      :
      <Redirect to="/" />
  )
}

export default HomePage
