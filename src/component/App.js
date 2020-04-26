import React from "react";

import Search from "./Search";

class App extends React.Component {

    onSearchSubmit(searchTerm) {
        console.log(searchTerm);
    };

    render() {
        return (
            <div className={"ui container"} style={{marginTop: '10px'}}>
                <Search onSubmit={this.onSearchSubmit}/>
            </div>
        );

    }
};

export default App;