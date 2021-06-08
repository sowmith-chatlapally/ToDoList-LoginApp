import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import TodoList from '../TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// const [searchTerm, setSearchTerm] = useState([]);

// const searchHandler = () => {

// }
const DashboardPage = ({ isAuthenticated, userEmail, logout }) => (
    
  
  <div>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: "md" }}>
      <div className="app">
      <div className = "container">
           <div>
              <TodoList/>
           </div>
      </div>
    </div> 
      </Grid.Column>
    </Grid>
  </div>
);

DashboardPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
const mapStateToProps = state =>
  !!state.userReducer.token
    ? {
        isAuthenticated: !!state.userReducer.token,
        userEmail: state.userReducer.email
      }
    : { isAuthenticated: false, userEmail: "" };

export default connect(mapStateToProps, { logout: actions.logout })(
  DashboardPage
);


