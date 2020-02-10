import React from 'react';

import Form from "./components/form/form";
import Songs from "./components/songs/songs";

import './App.scss';

export default class App extends React.Component {
    state = {
        apiValue: '',
        dataJSON: [],
    };

    handleData = (data) => {
        this.setState({dataJSON: data});
    };


    render() {
        return (
            <section className="container">
                <div className="row">
                    <h1 className="h1">Searching for songs <br/> by artist and title</h1>
                    <hr/>
                </div>
                <div className="row">
                    <Form
                        handleData={this.handleData}
                    />
                </div>
                <div className="row">
                    {this.state.dataJSON.length > 0 ? (
                        <Songs
                            songs={this.state.dataJSON}
                        />
                    ) : ('')
                    }

                </div>
            </section>
        )
    }
}


