import React from 'react'
import '../style/contact.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import { Form } from 'semantic-ui-react'

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-top-header">
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={250}><h1>Hawaii International Environmental Services</h1></ScrollAnimation>
      </div>
      <div className="contact-main-content">
        <div className="contact-form">
          <h2>Contact us!</h2>
          <p>Send us your request or any questions you may have, and we will get back to you as soon as possible.</p>
          <Form>
            <Form.Group>
              <Form.Input width={14} fluid label='Your name' placeholder='First and Last Name...' />
            </Form.Group>

            <Form.Group>
              <Form.Input width={14} fluid label='Your email' placeholder='Email Address...' />
            </Form.Group>

            <Form.Group>
              <Form.Input width={14} fluid label='Your phone number' placeholder='Phone Number...' />
            </Form.Group>

            <Form.Group>
              <Form.Input width={14} fluid label='Subject matter and location' placeholder='What is this about?' />
            </Form.Group>

            <Form.Group>
              <Form.TextArea width={14} label='Your request' placeholder='Explain your request or question in detail' />
            </Form.Group>

            <Form.Button>Submit</Form.Button>
          </Form>
        </div>

        <div className="contact-sidebar">
          <div className="contact-office">
            <h2>Hawaii Main Office</h2>
            <p>70 Kihapai St. Kailua, Hawaii 96734</p>
            <p><strong>Phone:</strong> 808-263-4787</p>
            <p><strong>Fax:</strong> 808-263-4787</p>
            <p>HIES-Hawaii@hiesinc.com</p>
          </div>

          <div className="contact-office">
            <h2>Guam Office</h2>
            <p>101 Chalan Santo Papa #101 Hagatña Guam, 96910</p>
            <p><strong>Phone:</strong> 671-472-0525</p>
            <p><strong>Fax:</strong> 671-477-7311</p>
            <p>HIES-Hawaii@hiesinc.com</p>
          </div>

          <div className="contact-office">
            <h2>Tokyo, Japan Office</h2>
            <p>1-18-10 Kokan Dori, Kawasaki-Ku, Kawasaki, Japan 210-0852</p>
            <p><strong>Phone:</strong> 044-328-7473</p>
            <p><strong>Fax:</strong> 044-333-7368</p>
            <p>HIES-Japan@hiesinc.co.jp</p>
          </div>

          <div className="contact-office">
            <h2>Colorado Office</h2>
            <p>9597 Huggins Ct. Parker, Colorado 80134</p>
            <p><strong>Phone:</strong> 303-840-7973</p>
            <p><strong>Fax:</strong> 303-840-7967</p>
            <p>HIES-Colorado@hiesinc.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}