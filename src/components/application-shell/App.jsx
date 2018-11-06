import React, {Component} from 'react';
import {I18n} from 'react-redux-i18n';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import routesConfiguration from '../../routing/routesConfiguration';

import AdjacentProduction from '../adjacent-production/AdjacentCalc';

class App extends Component {

  constructor(props) {
    super(props);

    this.gotoAbout = this.gotoAbout.bind(this);
    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);

    this.state = {
      sharedData: ''
    };
  }

  gotoAbout() {
    this.redirect(routesConfiguration.about.path);
  }

  redirect(path) {
    this.props.history.push(path);
  }

  handleChangeRenderPropContainerData(value) {
    console.log(value);
    this.setState({sharedData: value});
  }

  render() {
    return (
      <div className="application-content-wrapper">
        <div className="application-body-wrapper">
          <AdjacentProduction/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(App);

