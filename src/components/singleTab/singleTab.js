import React from "react";

import './singleTab.scss';

class Tab extends React.Component {
    state = {};

    handleClick = (e) => {
        this.props.handleTabsValues(!this.props.isActive, this.props.value);
    };

    setActive = (isActive) => isActive ? 'active' : '';

    render() {
        return (
            <button className={`tab ${this.setActive(this.props.isActive)}`} onClick={this.handleClick}>
                {this.props.name}
            </button>
        )
    }
}

export default Tab;