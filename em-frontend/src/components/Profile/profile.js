import React from "react";
import { Container, Tabs, Tab, Button } from "react-bootstrap";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/AuthActions";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <div className="custom-tabs-container">
      <Container>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3 custom-tabs"
        >
          <Tab eventKey="home" title="Home">
            <div>
              {/* <h1>Logout</h1> */}
              <Button
                //
                size="sm"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Logout
              </Button>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab 2 Content
          </Tab>
          <Tab eventKey="contact" title="Contact">
            Tab 3 Content
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Profile;
