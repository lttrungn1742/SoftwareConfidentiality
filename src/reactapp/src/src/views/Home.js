// import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

// import React, { useEffect } from 'react';
// import endpoint from './endpoint'
// import InputPasswordToggle from '@components/input-password-toggle'
// import '@styles/base/pages/page-auth.scss'

// const Home = () => {
//   const login = (e) => {
//     e.preventDefault()  
//     fetch(`${endpoint}/api/login`, {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       },
//       body: JSON.stringify({
//         'username': username,
//         'password': password
//       }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.isSuccess){
//         dispatch(handleLogin(data))
//         window.location.reload()
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   }

//   const [person, setPerson] = React.useState({});
//   const fetchGet = async () => {
//     const response = await fetch(
//         `${endpoint}/api/getProfile`, {
//           method: 'POST', 
//           headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userData')).accessToken}`
//           },
//           body: JSON.stringify({
//             'username': JSON.parse(localStorage.getItem('userData')).username
//           }),
//         }
        
//       );
//      const data = await response.json();
//      console.log(data[0])
//      setPerson(data[0]);
//     };

//   useEffect(() => {
//       fetchGet()
//   }, []);

//   return (
//     <div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Thong Tin Ca Nhan</CardTitle>
//         </CardHeader>
//         <CardBody>
//           <CardText>
//             <Form>

//             </Form>
//           </CardText>
         
//         </CardBody>
//       </Card>

//     </div>
//   )
// }

// export default Home


import { useSkin } from '@hooks/useSkin'
import { handleLogin } from '@store/actions/auth'
import { useDispatch } from 'react-redux'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import React, {useState, useEffect} from 'react'
import '@styles/base/pages/page-auth.scss'
import endpoint from './endpoint'


const Home = () => {
  const [skin, setSkin] = useSkin()
  const [name, setName] = useState('')

  const [address, setAddress] = useState('')
  const [indentity, setIndentity] = useState('')
  const [nPhone, setNPhone] = useState('')
  const dispatch = useDispatch()


  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  source = require(`@src/assets/images/pages/${illustration}`).default

  const update = (e) => {
    e.preventDefault()  
    fetch(`${endpoint}/api/updateProfile`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('userData')).accessToken
      },
      body: JSON.stringify({
        'name': name,
        'address': address,
        'indentity': indentity,
        'numberPhone': nPhone
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const [person, setPerson] = React.useState({});
  const fetchGet = async () => {
    const response = await fetch(
        `${endpoint}/api/getProfile`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': JSON.parse(localStorage.getItem('userData')).accessToken
          },
          body: JSON.stringify({
            'username': JSON.parse(localStorage.getItem('userData')).username
          }),
        }
        
      );
      const data = await response.json();
      console.log(data[0])
      setPerson(data[0]);
      setName(data[0].name);
      setAddress(data[0].address);
      setNPhone(data[0].numberPhone);
      setIndentity(data[0].identiyCard);
    };

  useEffect(() => {
      fetchGet()
  }, []);

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        
        <Col className='d-flex   px-2 p-lg-5' lg='10' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
             Thong Tin Ca Nhan
            </CardTitle>
            
            <Form className='auth-login-form mt-2' onSubmit={e => update(e)}>
              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ma Sinh Vien
                  </Label>
                </Col>
                <Col>
                  <Input type='text' value={person.id} />
                </Col>
              </Row>
                
              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ho Ten
                  </Label>
                </Col>
                <Col>
                  {/* <Input type='text'   value={person.name}  onChange={e => setName(e.target.value)} autoFocus/>
                   */}
                      <Input type='text' id='login-email' value={name} placeholder='username' onChange={e => setName(e.target.value)} autoFocus />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ma Lop
                  </Label>
                </Col>
                <Col>
                  <Input type='text' value={person.idClass} />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ten Lop
                  </Label>
                </Col>
                <Col>
                  <Input type='text' value={person.nameClass} />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ma Khoa
                  </Label>
                </Col>
                <Col>
                  <Input type='text' value={person.idFaculty} />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ten Khoa
                  </Label>
                </Col>
                <Col>
                  <Input type='text' value={person.nameFaculty} />
                </Col>
              </Row>
            
              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Ngay Sinh
                  </Label>
                </Col>
                <Col>
                  <Input type='text'   value={person.birthd} />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    So Dien Thoai
                  </Label>
                </Col>
                <Col>
                  <Input type='text'   value={nPhone} onChange={e => setNPhone(e.target.value)} />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Dia Chi
                  </Label>
                </Col>
                <Col>
                  <Input type='text'   value={address} onChange={e => setAddress(e.target.value)} />
                </Col>
              </Row>

              <Row>
                <Col lg='2' sm='12'>
                  <Label className='form-label font-weight-bold' >
                    Chung Minh Nhan Dan
                  </Label>
                </Col>
                <Col>
                  <Input type='text'   value={indentity} onChange={e => setIndentity(e.target.value)} />
                </Col>
              </Row>


              <Row>
                <Col lg='4' sm='12'>
                  <Button.Ripple type='submit' color='primary' block>
                  Cap Nhat Thong Tin
                </Button.Ripple>
                </Col>
               
              </Row>
              
            </Form>
            
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Home
