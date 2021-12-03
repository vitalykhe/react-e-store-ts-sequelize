import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Context } from "../index";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { AuthTokenBody, AxiosCustomError } from "../utils/types";


interface IProps { }

/**
 * @author
 * @function @Auth
 **/

export const Auth: FC<IProps> = observer((props) => {
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE ? true : false
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function isAxiosError(e: Error | AxiosCustomError): boolean {
    return (e as AxiosCustomError).request !== undefined 
    && (e as AxiosCustomError).response !== undefined;
  }

  const signOrRegister = async () => {
    try {
      let authResponse: AuthTokenBody
      if(isLogin) {
        authResponse = await login( email, password )
      } else {
        authResponse = await registration( email, password )
      }
      user?.setUser(authResponse)
      user?.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch (error) {
      if (error instanceof Error) {
        if(isAxiosError(error)){
          let axiosError = error as AxiosCustomError
          alert(axiosError.response?.data.message)
        }
      }
    }
  }

  return (
    <Container className="d-flex justify-content-center flex-center">
      <Card
        style={{ width: 600 }}
        className="p-5 mt-5"
      >
        <h2>{isLogin ? 'Authorization' : 'Sign up'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
          <Form.Control className="mt-3" type={'password'} placeholder={isLogin ? "Enter your password" : "Create a password"} value={password} onChange={e => setPassword(e.target.value)}/>
          {isLogin ?
            <div className="p-1 mt-2">Dont't have an account? <NavLink to={REGISTRATION_ROUTE}>Create account</NavLink></div>
            :
            <div className="p-1 mt-2">Already have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink></div>
          }
          <Button className="mt-3 align-self-end"
            onClick={() => signOrRegister()}
          >{isLogin ? 'Login' : 'Sign up'}</Button>
        </Form>
      </Card>
    </Container>
  );
}
)

