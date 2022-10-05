import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const onFinish = (values) => {
    console.log('Received values of the form', values);

  }

  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'>Login</h1>
        <Form layout= 'vertical' onFinish={onFinish}>


          <Form.Item label= 'Email' name= 'email'>
            <Input placeholder= 'Email' />
          </Form.Item>  

          <Form.Item label= 'Password' name= 'password'>
            <Input placeholder= 'Password' type= 'password' />
          </Form.Item>  

          <Button className='primary-button my-3' htmlType= 'submit'>
            Login
          </Button>

          <Link to= '/register' className='anchor'>
            Click here for Sign Up 
          </Link>

        </Form>

      </div>
    </div>
  )
}

export default Login