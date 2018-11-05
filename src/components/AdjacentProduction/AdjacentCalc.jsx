import React, {Component} from 'react';
import classNames from 'classnames';
import {matrix, findMaxAdjacent} from './helper';

class AdjacentCalc extends Component {

  constructor(props) {
    super(props);

    this.handleLimitChange = this.handleLimitChange.bind(this);

    this.state = {
      invalid: false,
      limit: 4,
      result: {
        indexes: []
      }
    };
  }

  componentDidMount() {
    const result = findMaxAdjacent(matrix, this.state.limit);
    this.setState({result});
  }

  handleLimitChange({target: {value}}) {
    const invalid = parseInt(value) > matrix[0].length;
    invalid ? this.setState({
      invalid,
      limit: value
    }) : this.setState({
      invalid,
      limit: value,
      result: value
        ? findMaxAdjacent(matrix, parseInt(value))
        : {indexes: []}
    });
  }

  defineIfCellIsActive(rowInd, cellInd) {
    return this.state.result.indexes.find(({x, y}) => rowInd === x && cellInd === y);
  }

  getData(data) {
    return data.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="adjacent-calc-row"
      >
        {
          row.map((cell, cellIndex) => (
            <span
              key={cellIndex}
              className={classNames(
                'adjacent-calc-cell',
                {active: this.defineIfCellIsActive(rowIndex, cellIndex)}
              )}
            >
              {cell}
            </span>
          ))}
      </div>
    ));
  }

  render() {
    return (
      <div className="adjacent-calc-container">
        <div className="controls-block">
          <input
            type="text"
            onChange={this.handleLimitChange}
            value={this.state.limit}
          />
          {this.state.invalid && <span className="error">Limit is too big</span>}
        </div>
        {this.getData(matrix)}
      </div>
    );
  }
}

export default AdjacentCalc;
