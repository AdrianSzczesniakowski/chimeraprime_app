import React from "react";
import axios from "axios";

import Tabs from "../tabs/tabs";

import './form.scss'

class Form extends React.Component {
    state = {
        songTitle: {
            value: '',
            isValid: true,
            active: false,
        },
        tabsVal: [],
        resp: []
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            axios({
                method: `GET`,
                url: `http://www.songsterr.com/a/ra/songs.json?pattern=` + this.state.songTitle.value,
            })
                .then(res => {
                    if (this.state.tabsVal.length > 0) {
                        const newArray = res.data.filter(el => (el.tabTypes.filter(el => (this.state.tabsVal.filter(tab => tab === el).length > 0)).length > 0));
                        this.setState({resp: newArray});
                    } else {
                        this.setState({resp: res.data});
                    }

                    this.props.handleData(this.state.resp);
                });
        }
    };

    validateForm = () => {
        let isok = true;
        if (this.state.songTitle.value.length === 0) {
            isok = false;
            this.setState(prevState => ({
                songTitle: {
                    ...prevState.songTitle,
                    isValid: false
                }
            }));
        } else {
            this.setState(prevState => ({
                songTitle: {
                    ...prevState.songTitle,
                    isValid: true
                }
            }));
        }
        return isok;
    };

    handleTabsChange = (val) => this.setState({tabsVal: val});

    handleInputChange = (e) => {
        const inputVal = e.target.value;
        this.setState(prevState => ({
            songTitle: {
                ...prevState.songTitle,
                value: inputVal
            }
        }));
    };

    onInputBlur = (e) => {
        this.setState(prevState => ({
            songTitle: {
                ...prevState.songTitle,
                active: true
            }
        }));
    };

    onInputFocus = () => {
        let val = false;
        if (this.state.songTitle.value.length > 0) {
            val = true;
        }
        this.setState(prevState => ({
            songTitle: {
                ...prevState.songTitle,
                active: val
            }
        }));
    };

    setValid = (isValid) => isValid ? `` : `invalid`;

    setActive = (active) => active ? `active` : ``;

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>

                <label
                    className={`form-field ${this.setActive(this.state.songTitle.active)}  ${this.setValid(this.state.songTitle.isValid)}`}>
                    <p>Song or artist</p>
                    <input className="form-input" name="apiValue" onBlur={this.onInputFocus} onFocus={this.onInputBlur}
                           value={this.state.songTitle.value}
                           onChange={this.handleInputChange} type="text"
                           placeholder=""/>
                </label>

                <Tabs
                    handleTabsChange={this.handleTabsChange}
                />

                <button className="btn" type="submit">Search</button>
            </form>
        )
    }
}

export default Form;