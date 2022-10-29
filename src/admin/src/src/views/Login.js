import { useSkin } from '@hooks/useSkin'
import { handleLogin } from '@store/actions/auth'
import { useDispatch } from 'react-redux'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {useState} from 'react'
import '@styles/base/pages/page-auth.scss'
import endpoint from './endpoint'
import { Redirect, Route, useNavigate } from 'react-router-dom'
import { isUserLoggedIn } from '@utils'

const Login = () => {
  const [skin, setSkin] = useSkin()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const login = (e) => {
    e.preventDefault()  
    fetch(`${endpoint}/admin/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      }),
    })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      if (data.isSuccess){
        dispatch(handleLogin(data))
        window.location.href = '/'
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Admin UIS.PTITHCM! 👋
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => login(e)}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Username
                </Label>
                <Input type='text' id='login-email' placeholder='username' onChange={e => setUsername(e.target.value)} autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' onChange={e => setPassword(e.target.value)} />
              </FormGroup>
            
              <Button.Ripple type='submit' color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>
            
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
