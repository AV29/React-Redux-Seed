import React from 'react';
import {I18n} from 'react-redux-i18n';

function About() {
  return (
    <div className="about">
      <h1>{I18n.t('about.title')}</h1>
    </div>
  );
}

About.propTypes = {};


export default About;

