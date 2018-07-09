import React, {Component} from 'react';
import {I18n} from 'react-redux-i18n';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import routesConfiguration from '../../routing/routesConfiguration';
import Icon from '../common/icon/Icon';
import {push} from 'connected-react-router';

class App extends Component {

  constructor(props) {
    super(props);

    this.gotoAbout = this.gotoAbout.bind(this);
  }

  gotoAbout() {
    this.redirect(routesConfiguration.about.path);
  }

  redirect(path) {
    this.props.dispatch(push(path));
  }

  render() {
    return (
      <div className="application-content-wrapper">
        <h1>{I18n.t('main.title')}</h1>
        <div className="test-icon">
          <h2>{I18n.t('main.clickMessage')}</h2>
          <Icon
            icon="spinner"
            color="tomato"
            width={50}
            height={50}
            onClick={this.gotoAbout}
          />
        </div>
        <div className="application-body-wrapper"/>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func
};


export default connect()(App);

