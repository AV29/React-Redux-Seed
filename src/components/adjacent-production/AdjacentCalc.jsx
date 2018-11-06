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
      isInvalid: false,
      size,
      limit,
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
    this.handleValidate(this.state.size, +value, this.recalculate);
  }

  handleChangeSize({target: {value}}) {
    this.handleValidate(+value, this.state.limit, this.regenerate);
  }

  handleValidate(size, limit, callback) {
    const isInvalid = size > this.defaultSize || size < limit;
    this.setState(() => ({
      isInvalid,
      size,
      limit
    }), isInvalid ? null : callback);
  }

  recalculate() {
    this.setState(({limit, data}) => ({
      result: findMaxAdjacent(data, +limit)
    }));
  }

  regenerate() {
    const {limit, size} = this.state;
    const data = AdjacentCalc.populateData(+size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +limit)
    });
  }

  isTargetCell(rowIndex, cellIndex) {
    return this.state.result.indexes.find(({x, y}) => rowIndex === x && cellIndex === y);
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
    const {data, isInvalid, size, limit, result: {res}} = this.state;
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
                className={classNames({'has-error': isInvalid})}
                onChange={this.handleChangeSize}
                value={size}
              />
              {
                isInvalid &&
                <div className="error">
                  {`should be in range of ${limit} - ${this.defaultSize}`}
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
                className={classNames({'has-error': isInvalid})}
                onChange={this.handleChangeLimit}
                value={limit}
              />
              {
                isInvalid &&
                <div className="error">
                  {`can't be more than ${size}`}
                </div>
              }
            </div>
          </div>
          <div className="result">
            Result: {res}
          </div>
        </div>
        <div className="numbers-wrapper">
          {this.getData(data)}
        </div>
      </div>
    );
  }
}

export default AdjacentCalc;
