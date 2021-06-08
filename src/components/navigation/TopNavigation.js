import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Menu, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth";


const TopNavigation = ({
  isAuthenticated,
  isFetching,
  pathname,
  login,
  logout
}) => (
  <div>
    {pathname !== "/login" ? (
      <Menu
        inverted
        style={{
          marginBottom: "1em"
        }}
      >
        {/* <Menu.Item as={Link} to="/">
          Home
        </Menu.Item> */}
        <Menu.Item disabled={!isAuthenticated} as={Link} to="/dashboard">
          Dashboard
        </Menu.Item>
        {isAuthenticated ? (
          <Menu.Menu position="right">           
          <button className = "logout-btn"
            onClick={() =>
              logout({
                email: localStorage.testEmail,
                token: localStorage.testToken
              })
            }
          >
            Logout
          </button>
        ) : (
          <span />
        )
          </Menu.Menu>
        ) : null}
      </Menu>
    ) : null}
  </div>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: !!state.userReducer.token,
  isFetching: state.userReducer.isFetching,
  pathname: ownProps.location.pathname
});

export default withRouter(
  connect(mapStateToProps, { login: actions.login, logout: actions.logout })(
    TopNavigation
  )
);
