import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap"; // Import additional Bootstrap components
import signupImage from "../../../assets/signup.jpg";
import "./styles.scss";
import OTPInput from "../../OTPInput";
import Stepper from "./stepper";

function SignUp() {
  return (
    <div className="sign-up">
      <Container>
        <Row>
          {/* left column with image */}
          <Col>
            <img src={signupImage} alt="Image 2" />
          </Col>

          {/* Right Column with Signup Form */}
          <Col>
            <Stepper />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
