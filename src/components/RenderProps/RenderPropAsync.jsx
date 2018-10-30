import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RenderPropAsync extends Component {

  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);
    this.setLoaded = this.setLoaded.bind(this);
    this.latency = props.latency;

    this.state = {
      loading: false,
      data: null
    };
  }

  componentDidMount() {
    this.setLoading();
    setTimeout(this.setLoaded, this.latency);
  }

  setLoading() {
    this.setState({loading: true});

  }

  setLoaded() {
    this.setState({loading: false, data: {name: 'Anton'}});
  }

  render() {
    return this.props.children({data: {...this.state.data}, loading: this.state.loading});
  }
}

RenderPropAsync.defaultProps = {
  latency: 1000
};

RenderPropAsync.propTypes = {
  children: PropTypes.func,
  latency: PropTypes.number
};

export default RenderPropAsync;

