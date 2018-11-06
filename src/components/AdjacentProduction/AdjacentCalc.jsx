import React, {Component} from 'react';
import classNames from 'classnames';
import {matrix, findMaxAdjacent, getRandomValue} from './helper';

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

  static getInitialState(config) {
    const initialState = {
      validation: {},
      values: {},
      data: matrix,
      result: findMaxAdjacent(matrix, config.find(item => item.id === 'limit').defaultValue)
    };
    config.forEach(item => {
      initialState.validation[item.id] = false;
      initialState.values[item.id] = item.defaultValue;
    });
    return initialState;
  }

  constructor(props) {
    super(props);

    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.regenerate = this.regenerate.bind(this);
    this.defaultLimit = 20;
    this.config = [
      {
        id: 'size',
        defaultValue: this.defaultLimit,
        onChange: this.handleChangeSize,
        getLimitRule: () => this.defaultLimit
      },
      {
        id: 'limit',
        defaultValue: 4,
        onChange: this.handleLimitChange,
        getLimitRule: () => this.state.size
      }
    ];
    this.state = AdjacentCalc.getInitialState(this.config);
  }

  handleLimitChange({target: {value}}) {
    const isLimitInvalid = +value > this.state.size;

    if (isLimitInvalid) {
      this.setState(({validation}) => ({
        validation: {...validation, limit: isLimitInvalid},
        limit: value
      }));
    } else {
      this.setState(({validation}) => ({
        validation: {...validation, limit: isLimitInvalid},
        limit: value,
        result: value
          ? findMaxAdjacent(this.state.data, +value)
          : {indexes: []}
      }));
    }
  }

  handleChangeSize({target: {value}}) {
    const isSizeInvalid = +value > this.sizeLimit;
    if (isSizeInvalid) {
      this.setState(({validation}) => ({
        validation: {...validation, size: isSizeInvalid},
        size: value
      }));
    } else {
      const data = AdjacentCalc.populateData(+value);
      this.setState(({validation}) => ({
        validation: {...validation, size: isSizeInvalid},
        size: value,
        data,
        result: findMaxAdjacent(data, +this.state.limit)
      }));
    }
  }

  isCellActive(rowIndex, cellIndex) {
    return this.state.result.indexes.find(({x, y}) => rowIndex === x && cellIndex === y);
  }

  regenerate() {
    const data = AdjacentCalc.populateData(+this.state.size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +this.state.limit)
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
          {this.config.map(({id, onChange, getLimitRule}) => {
            return (
              <div
                className="control"
                key={id}
              >
                <label htmlFor={id}>{id}</label>
                <div className="input-wrapper">
                  <input
                    id={id}
                    type="number"
                    className={classNames({'has-error': this.state.validation[id]})}
                    onChange={onChange}
                    value={this.state[id]}
                  />
                  {this.state.validation[id] && <div className="error"> {`can't be more than ${getLimitRule()}`}</div>}
                </div>
              </div>
            );
          })}
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
