import React, {Component} from 'react';
import {I18n} from 'react-redux-i18n';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import routesConfiguration from '../../routing/routesConfiguration';
import Icon from '../common/icon/Icon';
import {push} from 'connected-react-router';

import RenderPropContainer from '../RenderProps/RenderPropContainer';

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
    this.props.dispatch(push(path));
  }

  handleChangeRenderPropContainerData(value) {
    console.log(value);
    this.setState({sharedData: value});
  }

  render() {
    return (
      <div className="application-content-wrapper">
        <h1>{I18n.t('main.title')}</h1>
        <div className="application-body-wrapper">
          <RenderPropContainer
            sharedData={this.state.sharedData}
            onNotifyParent={this.handleChangeRenderPropContainerData}
          />
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

