import React from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import { Button } from './button';

class SearchStories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    };

    onSubmit = (event) => {
        const { query } = this.state;
        if (query) {
          this.props.onFetchStories(query)
          this.setState({ query: '' });
        }
        event.preventDefault();
      }

      onChange = (event) => {
        const { value } = event.target;
        this.setState({ query: value });
      }    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    value={this.state.query}
                    onChange={this.onChange}
                />
                <Button type='submit'>
                    Search
                </Button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query))
});

export default connect(
    null,
    mapDispatchToProps
)(SearchStories);
