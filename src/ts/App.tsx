import React, { Component } from "react";
import Section from "./Section";
import Wave from "./Wave";
import "../styles/App.scss";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Section color="black">
                    # Cutewarriorlover{}
                    ## *That* UI Guy
                </Section>

                <Wave from="black" to="#0066ff" />

                <Section color="#0066FF">
                    # Hi!{}
                    My name is Cutewarriorlover, and I am
                    {(new Date().getFullYear() - 2008).toString()} years old. I
                    am a **UI** designer, and I specialize in Desktop and Web.
                </Section>

                <Wave from="#0066ff" to="#cc1133" />

                <Section color="#cc1133">
                    # W.I.P.{}

                    Sorry, this is still Work In Progress. Check back soon!
                </Section>
            </div>
        );
    }
}
