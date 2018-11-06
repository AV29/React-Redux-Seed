import React, {Component} from 'react';
import classNames from 'classnames';
import {findMaxAdjacent, getRandomValue} from './utilities';

class AdjacentCalc extends Component {
  static populateData(size) {
    const data = [];
    if (!size) return [[]];
    for (let i = 0; i < size; i += 1) {
      data.push([]);
      for (let j = 0; j < size; j += 1) {
        data[i][j] = getRandomValue(1, 100);
      }
    }
    return data;
  }

  static getInitialState(limit, size) {
    const data = AdjacentCalc.populateData(size);
    return {
      validation: {
        size: false,
        limit: false
      },
      values: {
        size,
        limit
      },
      data,
      result: findMaxAdjacent(data, limit)
    };
  }

  constructor(props) {
    super(props);

    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.regenerate = this.regenerate.bind(this);
    this.defaultLimit = 4;
    this.defaultSize = 20;
    this.state = AdjacentCalc.getInitialState(this.defaultLimit, this.defaultSize);
  }

  handleLimitChange({target: {value}}) {
    const isLimitInvalid = +value > this.state.values.size;

    if (isLimitInvalid) {
      this.setState(({validation, values}) => ({
        validation: {...validation, limit: isLimitInvalid},
        values: {...values, limit: value},
        limit: value
      }));
    } else {
      this.setState(({validation, values}) => ({
        validation: {...validation, limit: isLimitInvalid},
        values: {...values, limit: value},
        result: value
          ? findMaxAdjacent(this.state.data, +value)
          : {indexes: []}
      }));
    }
  }

  handleChangeSize({target: {value}}) {
    const isSizeInvalid = +value > this.defaultSize;
    if (isSizeInvalid) {
      this.setState(({validation, values}) => ({
        validation: {...validation, size: isSizeInvalid},
        values: {...values, size: value}
      }));
    } else {
      const data = AdjacentCalc.populateData(+value);
      this.setState(({validation, values}) => ({
        validation: {...validation, size: isSizeInvalid},
        values: {...values, size: value},
        data,
        result: findMaxAdjacent(data, +this.state.values.limit)
      }));
    }
  }

  isCellActive(rowIndex, cellIndex) {
    return this.state.result.indexes.find(({x, y}) => rowIndex === x && cellIndex === y);
  }

  regenerate() {
    const data = AdjacentCalc.populateData(+this.state.values.size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +this.state.values.limit)
    });
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
                {active: this.isCellActive(rowIndex, cellIndex)}
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
          <button
            className="regenerate-button"
            onClick={this.regenerate}
          >
            Regenerate Data
          </button>
          <div className="control">
            <label htmlFor="size">size</label>
            <div className="input-wrapper">
              <input
                id="size"
                type="number"
                className={classNames({'has-error': this.state.validation.size})}
                onChange={this.handleChangeSize}
                value={this.state.values.size}
              />
              {this.state.validation.size && <div className="error"> {`can't be more than ${this.defaultSize}`}</div>}
            </div>
          </div>
          <div className="control">
            <label htmlFor="limit">limit</label>
            <div className="input-wrapper">
              <input
                id="limit"
                type="number"
                className={classNames({'has-error': this.state.validation.limit})}
                onChange={this.handleLimitChange}
                value={this.state.values.limit}
              />
              {
                this.state.validation.limit &&
                <div className="error">
                  {`can't be more than ${this.state.values.size}`}
                </div>
              }
            </div>
          </div>
          <div className="result">
            Result: {this.state.result.res}
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
