import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap"; // Import additional Bootstrap components
import signupImage from "../../../assets/signup.jpg";
import "./styles.scss";
import OTPInput from "../../OTPInput";

function SignUp() {
  const containerStyle = {
    margin: "20px",
    height: "70vh",
    // height: "calc(100vh - 40px)",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    maxHeight: "100%", // Set the maximum height to 100% to fit the image within the container
    // borderRadius: "20px", // Make the image circular by setting a 50% border radius
    // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add a 3D effect with a box shadow
  };

  const handleOTPChange = (otp) => {
    console.log("OTP:", otp);
    // You can perform any further actions with the OTP here
  };

  return (
    <div className="sign-up">
      <Container>
        <Row>
          <Col>
            <img src={signupImage} alt="Image 2" style={imageStyle} />
          </Col>

          {/* Right Column with Signup Form */}
          <Col>
            <Form>
              {/* Email Field */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              {/* Name Field */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/* Confirm Password Field */}
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              {/* Phone Number Field */}
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <OTPInput onChange={handleOTPChange} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
