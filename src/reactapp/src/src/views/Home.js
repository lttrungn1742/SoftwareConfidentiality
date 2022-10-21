import { useSkin } from '@hooks/useSkin'
import { useDispatch } from 'react-redux'
import { Row, Col, CardTitle, Form, Label, Input, Button } from 'reactstrap'
import React, {useState, useEffect} from 'react'
import '@styles/base/pages/page-auth.scss'
import endpoint from './endpoint'
import { handleLogout } from '@store/actions/auth'

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
     await fetch(`${endpoint}/api/getProfile`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': JSON.parse(localStorage.getItem('userData')).accessToken
          }
        })
        .then((response) => response.json())
        .then((data) => {
     
            console.log(data)
            setPerson(data[0]);
            setName(data[0].name);
            setAddress(data[0].address);
            setNPhone(data[0].numberPhone);
            setIndentity(data[0].identiyCard);
      
        })
        .catch((error) => {
          console.error('Error:', error);
          // dispatch(handleLogout());
          // window.location.reload()
        });
      
      
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
