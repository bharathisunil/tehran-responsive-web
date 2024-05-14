import React from 'react'
import "./contact.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Contact = () => {
    return (
        <section className="home-contact-sec py-5">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <h2 className="text-center pb-5">Contact Info</h2>
                <div className="map mb-4">
                    {/* <iframe src=”https://www.google.com/maps/embed?pb=!…” width=”600″ height=”450″ frameborder=”0″ style=”border:0″ allowfullscreen></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4099074724772!2d-81.26533882383613!3d28.617474384763067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76f2f58f808f1%3A0x76e03ba8126e5bfb!2s5420%20Deep%20Lake%20Rd%20Suite%201088%2C%20Oviedo%2C%20FL%2032765%2C%20USA!5e0!3m2!1sen!2sin!4v1715665187681!5m2!1sen!2sin"
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map mb-4" />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="lable">Hours of Operations:</div>
                        <div className="value">2 PM to 3 AM Daily</div>
                    </div>
                    <div className="col-md-3">
                        <div className="lable">Located:</div>
                        <div className="value">123 W 45th Newyork</div>
                    </div>
                    <div className="col-md-3">
                        <div className="lable">Phone:</div>
                        <div className="value">(+1) (404) 7236 423</div>
                    </div>
                    <div className="col-md-3">
                        <div className="lable">Follow Us:</div>
                        <div className="value">@tehranlounge</div>
                    </div>
                </div>
                <hr className="mt-5"></hr>
            </Container>
        </section>
    )
}
export default Contact