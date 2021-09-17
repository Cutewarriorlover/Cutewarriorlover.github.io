import React, { Component } from "react";

interface IWave {
    from: string;
    to: string;
}

export default class Wave extends Component<IWave, object> {
    render() {
        return (
            <div className="wave" style={{ backgroundColor: this.props.from }}>
                <svg
                    viewBox="0 0 900 300"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <path
                        d="M0 113L50 114.8C100 116.7 200 120.3 300 135C400 149.7 500 175.3 600 189.2C700 203 800 205 850 206L900 207L900 301L850 301C800 301 700 301 600 301C500 301 400 301 300 301C200 301 100 301 50 301L0 301Z"
                        fill={this.props.to}
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                    ></path>
                </svg>
            </div>
        );
    }
}
