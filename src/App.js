import React from 'react';
import './App.css';
import CommentsListContainer from './containers/CommentsListContainer';


//const App = () => {
//    return (
//        <div className="App">
//            Tu będzie lista komentarzy!
//        </div>
//    );
//};

const App = () => {
    return (
        <div className="App">
            <CommentsListContainer />
        </div>
    );
};

export default App;