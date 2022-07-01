import React, { useState } from 'react'
import { Modal, Input } from 'antd';
import CountryPhoneInput, { ConfigProvider, } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
const Contacts = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <div id='contact' className='contact'>
      <ModalPage visible={visible} setVisible={setVisible} />
      <div className="font_bold"> Contacts </div>
      <div className="text">
        Want to know more or just want to chat?
      </div>
      
      <button onClick={showModal}> Send message </button>
      <div className="links">
        <a href="#" target={'_blank'}> <i class="bi bi-linkedin"></i>  </a>
        <a href="#" target={'_blank'}> <i class="bi bi-instagram"></i>  </a>
        <a href="#" target={'_blank'}> <i class="bi bi-telegram"></i>  </a>
        <a href="#" target={'_blank'}> <i class="bi bi-youtube"></i> </a>
      </div>
    </div>
  )
}

export default Contacts



const ModalPage = ({ visible, setVisible }) => {

  const { TextArea } = Input;

  const [confirmLoading, setConfirmLoading] = useState(false);

  const [name, setName] = useState('')
  const [nameErrors, setNameErrors] = useState('')

  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState('')

  const [phone, setPhone] = useState({ short: 'uz' });
  const [phoneErrors, setPhoneErrors] = useState('');

  const [message, setMessage] = useState('');
  const [messageErrors, setMessageErrors] = useState('');



  const nameChange = (event) => {

    setName(event)
    if (event !== '') {
      setNameErrors('')
    } else {
      setNameErrors('error')
    }
  }
  const emailChange = (event) => {

    setEmail(event)
    if (event !== '') {
      setEmailErrors('')
    } else {
      setEmailErrors('error')
    }
  }
  const phoneChange = (event) => {

    setPhone(event)
    if (event !== '') {
      setPhoneErrors('')
    } else {
      setPhoneErrors('error')
    }
  }
  const messageChange = (event) => {

    setMessage(event)
    if (event !== '') {
      setMessageErrors('')
    } else {
      setMessageErrors('error')
    }
  }

  const handleOk = () => {
    console.log(phone);
    if (name === '') {
      setNameErrors('error')
    } if (email === '') {
      setEmailErrors('error')
    } if (!phone.phone) {
      setPhoneErrors('error')
    } if (message === '') {
      setMessageErrors('error')
    }
    else {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);

        setName('')
        setNameErrors('')

        setEmail('')
        setEmailErrors('')

        setPhone({ short: 'uz' })
        setPhoneErrors('')

        setMessage('')
        setMessageErrors('')

      }, 2000);
    }
  };

  const handleCancel = () => {

    setVisible(false);

    setName('')
    setNameErrors('')

    setEmail('')
    setEmailErrors('')

    setPhone({ short: 'uz' })
    setPhoneErrors('')

    setMessage('')
    setMessageErrors('')
  };


  return (
    <Modal
      title="Send Message"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <div className='form'>

        <Input type={'text'} status={nameErrors} value={name} onChange={(e) => nameChange(e.target.value)} placeholder="Your Name" />
        <Input type={'email'} status={emailErrors} value={email} onChange={(e) => emailChange(e.target.value)} placeholder="Your Email" />
        <ConfigProvider locale={en}>
          <CountryPhoneInput
            value={phone}
            status={phoneErrors}
            type={'number'}
            onChange={(v) => {
              phoneChange(v);
            }}
            className="phone_number"
          />
        </ConfigProvider>

        <TextArea ut status={messageErrors} value={message} onChange={(e) => messageChange(e.target.value)} type={'textarea'} placeholder="Your Message" />

      </div>
    </Modal>
  )
}