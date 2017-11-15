import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from 'react-redux-i18n';

class NotFoundPage extends Component {

  componentDidMount() {
    const {redirectPath, history} = this.props;
    const action = redirectPath ?
      () => {history.push(redirectPath);} :
      () => {history.goBack();};
    setTimeout(action, 2000);
  }

  render() {
    return (
      <div className="not-found-page top-level-page">
        <div className="page-content">
          <h1>{I18n.t('common.errors.pageNotFound')}</h1>
          <h2>{I18n.t('common.errors.redirectText')}</h2>
        </div>
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  redirectPath: PropTypes.string
};

export default NotFoundPage;
