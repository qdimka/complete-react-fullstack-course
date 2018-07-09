import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {

    state = {
        news:JSON
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <NewsList news={this.state.news}>
                Hello
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

