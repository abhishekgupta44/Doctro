import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const onFinish = (values) => {
    console.log('Received values of the form', values);

  }

  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'>Sign Up</h1>
        <Form layout= 'vertical' onFinish={onFinish}>

          <Form.Item label= 'Name' name= 'name'>
            <Input placeholder= 'Name' />
          </Form.Item>  

          <Form.Item label= 'Email' name= 'email'>
            <Input placeholder= 'Email' />
          </Form.Item>  

          <Form.Item label= 'Password' name= 'password'>
            <Input placeholder= 'Password' type= 'password' />
          </Form.Item>  

          <Button className='primary-button my-3' htmlType= 'submit'>
            Sign Up
          </Button>

          <Link to= '/login' className='anchor'>
            Click here for Login 
          </Link>

          

        </Form>

      </div>

    </div>
  )
}

export default Register