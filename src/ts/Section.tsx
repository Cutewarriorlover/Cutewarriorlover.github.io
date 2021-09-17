import React, { Children, Component } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/Section.scss";

interface IDescriptionProps {
    color: string;
    children: string | string[];
}

export default class Section extends Component<IDescriptionProps, object> {
    render() {
        if (typeof this.props.children === "string") {
        return (
            <div
                className="description"
                style={{ backgroundColor: this.props.color }}
            >
                <ReactMarkdown>{this.props.children}</ReactMarkdown>
            </div>
        );
        } else {
            console.log(this.props.children)
            return (<div
                className="description"
                style={{ backgroundColor: this.props.color }}
            >
                <ReactMarkdown>{this.props.children.join("\n")}</ReactMarkdown>
            </div>)
        }
    }
}
