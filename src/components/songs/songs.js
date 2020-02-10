import React from "react";

import SingleSong from "../singleSong/singleSong";

import './songs.scss'

class Songs extends React.Component {
    state = {};

    render() {
        return (
            <table className="songs" cellPadding="0" cellSpacing="0">
                <thead>
                <tr>
                    <th>
                        Song
                    </th>
                    <th>
                        Artist
                    </th>
                    <th>
                        Tabulator links
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.songs.map(({title, artist, tabTypes},i) => (
                        <SingleSong
                            key={i}
                            title={title}
                            artist={artist}
                            tabTypes={tabTypes}
                        />
                    ))
                }
                </tbody>
            </table>
        )
    }
}

export default Songs;