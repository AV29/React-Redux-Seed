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

    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.recalculate = this.recalculate.bind(this);
    this.regenerate = this.regenerate.bind(this);

    this.defaultLimit = 4;
    this.defaultSize = 20;

    this.state = AdjacentCalc.getInitialState(this.defaultLimit, this.defaultSize);
  }

  handleChangeLimit({target: {value}}) {
    this.handleValidate({size: this.state.values.size, limit: +value}, this.recalculate);
  }

  handleChangeSize({target: {value}}) {
    this.handleValidate({size: +value, limit: this.state.values.limit}, this.regenerate);
  }

  handleValidate({size, limit}, callback) {
    let isSizeInvalid = false;
    let isLimitInvalid = false;
    if (size > this.defaultSize || size < limit) {
      isSizeInvalid = true;
    }
    if (limit > size) {
      isLimitInvalid = true;
    }

    this.setState(({validation}) => ({
      validation: {size: isSizeInvalid, limit: isLimitInvalid},
      values: {size, limit}
    }), isSizeInvalid || isLimitInvalid ? null : callback);
  }

  recalculate() {
    this.setState(({values: {limit}, data}) => ({
      result: findMaxAdjacent(data, +limit)
    }));
  }

  regenerate() {
    const data = AdjacentCalc.populateData(+this.state.values.size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +this.state.values.limit)
    });
  }

  isTargetCell(rowIndex, cellIndex) {
    return this.state.result.indexes.find(({x, y}) => rowIndex === x && cellIndex === y);
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
                {active: this.isTargetCell(rowIndex, cellIndex)}
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
              {
                this.state.validation.size &&
                <div className="error">
                  {`should be in range of ${this.state.values.limit} - ${this.defaultSize}`}
                </div>
              }
            </div>
          </div>
          <div className="control">
            <label htmlFor="limit">limit</label>
            <div className="input-wrapper">
              <input
                id="limit"
                type="number"
                className={classNames({'has-error': this.state.validation.limit})}
                onChange={this.handleChangeLimit}
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
