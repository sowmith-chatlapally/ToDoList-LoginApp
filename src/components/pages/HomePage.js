import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, isFetching, logout }) => (
  <div>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Welcome
        </Header>

        {isAuthenticated ? (
          <Button
            primary
            onClick={() =>
              logout({
                email: localStorage.testEmail,
                token: localStorage.testToken
              })
            }
          >
            Logout
          </Button>
        ) : (
          <div>
            <Button
              primary
              disabled={isFetching}
              loading={isFetching}
              as={Link}
              to="/login"
            >
              Go to Login
            </Button>
          </div>
        )}
      </Grid.Column>
    </Grid>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.userReducer.token,
  isFetching: state.userReducer.isFetching
});

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
