import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class RenderPropInnerContainer extends PureComponent {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      value: ''
    };
  }

  componentDidUpdate(prevProps) {
    const {loading, data} = this.props;
    if (prevProps.loading !== loading && !loading && data) {
      this.handleInputChange(data.name);
    }
  }

  handleInputChange(value) {
    this.setState({value});
    this.props.onChange(value);
  }

  render() {
    return (
      <input
        onChange={({target: {value}}) => this.handleInputChange(value)}
        value={this.state.value}
        type="text"
      />
    );
  }
}

RenderPropInnerContainer.propTypes = {
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.object
};

export default RenderPropInnerContainer;

