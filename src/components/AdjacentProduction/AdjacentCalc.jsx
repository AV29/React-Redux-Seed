import React, {Component} from 'react';
import classNames from 'classnames';
import {matrix, findMaxAdjacent, getRandomValue} from './helper';

class AdjacentCalc extends Component {

  constructor(props) {
    super(props);

    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.sizeLimit = 20;
    this.defaultLimit = 4;
    this.state = {
      isLimitInvalid: false,
      isSizeInvalid: false,
      limit: this.defaultLimit,
      size: 20,
      data: matrix,
      result: findMaxAdjacent(matrix, this.defaultLimit)
    };
  }

  componentDidUpdate(_, prevState) {
    if (this.state.size !== prevState.size) {
      this.updateState();
    }
  }

  populateData() {
    const data = [];
    const size = +this.state.size;
    if (!size) return data;
    for (let i = 0; i < size; i += 1) {
      data.push([]);
      for (let j = 0; j < size; j += 1) {
        data[i][j] = getRandomValue(1, 100);
      }
    }
    return data;
  }

  updateState() {
    const data = this.populateData();
    this.setState({
      data,
      result: findMaxAdjacent(data, +this.state.limit)
    });
  }

  handleLimitChange({target: {value}}) {
    const isLimitInvalid = +value > this.state.size;
    isLimitInvalid ? this.setState({
      isLimitInvalid,
      limit: value
    }) : this.setState({
      isLimitInvalid,
      limit: value,
      result: value
        ? findMaxAdjacent(this.state.data, +value)
        : {indexes: []}
    });
  }

  handleChangeSize({target: {value}}) {
    const isSizeInvalid = +value > this.sizeLimit;
    isSizeInvalid ? this.setState({
      isSizeInvalid
    }) : this.setState({
      isSizeInvalid,
      size: value
    });
  }

  defineIfCellIsActive(rowInd, cellInd) {
    return this.state.result.indexes.find(({x, y}) => rowInd === x && cellInd === y);
  }

  getData() {
    return this.state.data.map((row, rowIndex) => (
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
          <div className="control">
            <label htmlFor="limit">Limit</label>
            <div className="input-wrapper">
              <input
                id="limit"
                type="number"
                className={classNames({'has-error': this.state.isLimitInvalid})}
                onChange={this.handleLimitChange}
                value={this.state.limit}
              />
              {this.state.isLimitInvalid && <div className="error"> {`can't be more than ${this.state.size}`}</div>}
            </div>
          </div>
          <div className="control">
            <label htmlFor="size">Size</label>
            <input
              id="size"
              type="number"
              className={classNames({'has-error': this.state.isSizeInvalid})}
              onChange={this.handleChangeSize}
              value={this.state.size}
            />
            {this.state.isSizeInvalid && <div className="error"> {`can't be more than ${this.sizeLimit}`}</div>}
          </div>
          <div className="control">
            <label>Result: </label>
            <span>{this.state.result.res}</span>
          </div>
        </div>
        <div className="numbers-wrapper">
          {this.getData()}
        </div>
      </div>
    );
  }
}

export default AdjacentCalc;
