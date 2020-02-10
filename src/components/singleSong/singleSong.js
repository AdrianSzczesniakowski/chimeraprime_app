import React from "react";

import './singleSong.scss'

class SingleSong extends React.Component {
    showTabs = (tabs, songTitle, artistName) => {
        const href = `http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${songTitle}&a=${artistName}`;
        return (tabs.map((name) => (
            <a target="_blank" rel="noopener noreferrer" href={href} className="singleSong-tab" data-val={href}>{name}</a>
        )));
    }

    render() {
        return (
            <tr className="singleSong">
                <td className="singleSong-title">{this.props.title}</td>
                <td className="singleSong-artist">{this.props.artist.name}</td>
                <td className="singleSong-tabs">
                    <div className="singleSong-tabs-row">
                        {this.showTabs(this.props.tabTypes, this.props.title, this.props.artist.name)}
                    </div>
                </td>
            </tr>
        )
    }
};
export default SingleSong;