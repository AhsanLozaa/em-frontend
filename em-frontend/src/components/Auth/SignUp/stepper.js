import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaStore,
  FaShoppingBag,
  FaBuilding,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaLock,
  FaPhoneAlt,
  FaStreetView,
  FaCity,
  FaFlagCheckered,
  FaCodeBranch,
  FaFlag,
} from "react-icons/fa";
import { signUp } from "../../../api/AuthRequests";

const SignUpForm = ({
  step,
  formData,
  handleChange,
  handleViewChange,
  selectedView,
}) => {
  return (
    <>
      {step === 1 && (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="minimal-label">Email address</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="minimal-label">Name</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="minimal-label">Password</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label className="minimal-label">Confirm Password</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label className="minimal-label">Phone Number</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaPhoneAlt />
              </span>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
        </Form.Group>
      )}
      {step === 2 && (
        <>
          <div style={{ marginBottom: "20px" }}>
            <Button
              size="sm"
              variant={
                selectedView === "seller" ? "primary" : "outline-primary"
              }
              className="me-2"
              onClick={() => handleViewChange("seller")}
            >
              <FaStore style={{ marginRight: "0.5rem" }} />
              Seller
            </Button>
            <Button
              size="sm"
              variant={selectedView === "buyer" ? "primary" : "outline-primary"}
              onClick={() => handleViewChange("buyer")}
            >
              <FaShoppingBag style={{ marginRight: "0.5rem" }} />
              Buyer
            </Button>
          </div>
          {selectedView === "seller" && (
            <>
              <Form>
                <Form.Group className="mb-3" controlId="fromDescription">
                  <Form.Group className="mb-3" controlId="fromDescription">
                    <Form.Label className="minimal-label">
                      Business Name
                    </Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaBuilding />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Enter your business name"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fromDescription">
                    <Form.Label className="minimal-label">
                      Description
                    </Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaInfoCircle />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Enter your business description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                </Form.Group>
              </Form>
            </>
          )}

          {selectedView === "buyer" && <></>}
        </>
      )}
      {step === 3 && (
        <Form>
          <Form.Group className="mb-3" controlId="street">
            <Form.Label className="minimal-label">Street</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaStreetView />
              </span>
              <Form.Control
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label className="minimal-label">City</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaCity />
              </span>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="state">
            <Form.Label className="minimal-label">State</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaFlagCheckered />
              </span>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="zipCode">
            <Form.Label className="minimal-label">Zip Code</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaCodeBranch />
              </span>
              <Form.Control
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="country">
            <Form.Label className="minimal-label">Country</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaFlag />
              </span>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>
        </Form>
      )}
    </>
  );
};

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    // buyer
    description: "",
    businessName: "",
    // seller
    // seller data comes here
    // address
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    //
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Validate and limit phone number input to 9 digits
    if (name === "phoneNumber" && value.length > 10) {
      return;
    }

    // Validate that only digits are allowed
    if (name === "phoneNumber") {
      if (!/^[0-9]*$/.test(value)) {
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // For the seller and buyer views
  const [selectedView, setSelectedView] = useState("seller");

  const handleViewChange = (view) => {
    setSelectedView(view);
    setFormData((prevData) => ({
      ...prevData,
      role: view,
    }));
  };

  const [isSignupView, setIsSignupView] = useState(true);
  //

  return (
    <div>
      <Container>
        {isSignupView && (
          <>
            <Row className="justify-content-center">
              <Col md={12}>
                <Row className="justify-content-center my-4">
                  <Col md={12} className="text-center">
                    {step === 1 && (
                      <div>
                        <h4 style={{ color: "grey" }}>
                          Welcome! Create your account
                          <span
                            style={{
                              display: "block",
                              marginTop: "3px",
                              fontSize: "14px",
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                          >
                            <i
                              className="fas fa-sign-in-alt"
                              style={{ marginRight: "5px" }}
                            ></i>
                            <span
                              style={{
                                color: "#63B3ED",
                                textDecoration: "inherit",
                              }}
                              onClick={() => {
                                setIsSignupView(false);
                              }}
                            >
                              Already have an account? Login here.
                            </span>
                          </span>
                        </h4>
                        {/* Rest of your registration form */}
                      </div>
                    )}
                    {step === 2 && (
                      <div>
                        <h4
                          style={{
                            color:
                              selectedView === "seller" ? "#FF6B6B" : "#63B3ED",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {selectedView === "seller"
                            ? "Become a Seller"
                            : "Become a Buyer"}
                        </h4>
                        <p
                          style={{
                            color: "#777",
                            fontSize: "1rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {selectedView === "seller"
                            ? "Start selling your products and reach a wider audience."
                            : "Discover a wide range of products and shop with us !"}
                        </p>
                      </div>
                    )}

                    {step === 3 && (
                      <h4 style={{ color: "#63B3ED" }}>Provide Your Address</h4>
                    )}
                  </Col>
                </Row>
                <Row>
                  <SignUpForm
                    step={step}
                    formData={formData}
                    handleChange={handleChange}
                    handleViewChange={handleViewChange}
                    selectedView={selectedView}
                  />
                </Row>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={step === 1}
                >
                  Previous
                </Button>{" "}
                {step !== 3 && (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={handleNext}
                    disabled={step === 3}
                  >
                    Next
                  </Button>
                )}
                {step === 3 && (
                  <Button
                    disabled={isLoading}
                    size="sm"
                    variant="primary"
                    onClick={async () => {
                      setIsLoading(true);
                      try {
                        const response = await signUp(formData);
                        toast.success("Signup successfull", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 1000,
                        });
                        debugger;
                      } catch (error) {
                        toast.error("Failed to signup", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 3000,
                        });
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                  >
                    SignUp
                  </Button>
                )}
              </Col>
            </Row>
          </>
        )}
        {!isSignupView && (
          <>
            <Row className="justify-content-center">
              <Col md={12}>
                <Row className="justify-content-center my-4">
                  <Col md={12} className="text-center">
                    {step === 1 && (
                      <div>
                        <h4 style={{ color: "grey" }}>
                          Login Here
                          <span
                            style={{
                              display: "block",
                              marginTop: "3px",
                              fontSize: "14px",
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                          >
                            <i
                              className="fas fa-sign-in-alt"
                              style={{ marginRight: "5px" }}
                            ></i>
                            <span
                              style={{
                                color: "#FF6B6B",
                                textDecoration: "inherit",
                              }}
                              onClick={() => {
                                setIsSignupView(true);
                              }}
                            >
                              Do not have an account? Signup here.
                            </span>
                          </span>
                        </h4>
                        {/* Rest of your registration form */}
                      </div>
                    )}
                  </Col>
                </Row>
                <Row>
                  <SignUpForm
                    step={step}
                    formData={formData}
                    handleChange={handleChange}
                    handleViewChange={handleViewChange}
                    selectedView={selectedView}
                  />
                </Row>

                <Button
                  disabled={isLoading}
                  size="sm"
                  variant="primary"
                  onClick={async () => {
                    setIsLoading(true);
                    try {
                      const response = await signUp(formData);
                      toast.success("Signup successfull", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                      });
                      debugger;
                    } catch (error) {
                      toast.error("Failed to signup", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                      });
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                >
                  LogIn
                </Button>
              </Col>
            </Row>
          </>
        )}
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Stepper;
