import React from "react";
import SingleTab from "../singleTab/singleTab";

import './tabs.scss'

class Tabs extends React.Component {
    state = {
        tabsValues: [],
        tabs: [
            {
                name: 'player',
                value: 'PLAYER',
                isActive: false
            },
            {
                name: 'guitar',
                value: 'TEXT_GUITAR_TAB',
                isActive: false
            },
            {
                name: 'chords',
                value: 'CHORDS',
                isActive: false
            },
            {
                name: 'bass',
                value: 'TEXT_BASS_TAB',
                isActive: false
            },
        ]
    };

    handleTabsValues = (tabState, tabValue) => {
        let newTabs = this.state.tabs.map(({name, value, isActive}) => (
            value === tabValue
                ?
                {
                    name: name,
                    value: value,
                    isActive: tabState
                }
                :
                {name, value, isActive}
        ));
        this.setState({tabs: newTabs});
        tabState ? this.add_tabsValue(tabValue) : this.remove_tabsValue(tabValue);
    };

    remove_tabsValue = (value) => {
        const filteredTabs = this.state.tabsValues.filter((v) => v !== value);
        this.setState({tabsValues: filteredTabs});
        this.props.handleTabsChange(this.state.tabsValues);
    };

    add_tabsValue = (value) => {
        let newTabs = this.state.tabsValues;
        newTabs.push(value);
        this.setState({tabsValues: newTabs});
        this.props.handleTabsChange(this.state.tabsValues);
    };

    render() {
        return (
            <div className="tabs">
                <h3 className="h3">Select tabulators:</h3>
                {this.state.tabs.map(({name, value, isActive}, i) => (
                    <SingleTab
                        key={i}
                        name={name}
                        value={value}
                        isActive={isActive}
                        handleTabsValues={this.handleTabsValues}
                    />
                ))}
            </div>
        )
    }
}

export default Tabs;