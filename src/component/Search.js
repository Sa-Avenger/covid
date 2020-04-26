import React from "react";

class Search extends React.Component {

    state = {
        searchTerm: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className={"ui segment"}>
                <form className={"ui form"} onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Search</label>
                        <input type="text"
                               placeholder="Search..."
                               value={this.state.searchTerm}
                               onChange={event => this.setState({searchTerm: event.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default Search;