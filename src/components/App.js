import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

const App = () => {
  useEffect(() => {
    console.log({
      TEST: process.env.TEST,
      NODE_ENV: process.env.NODE_ENV,
      REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
      VERCEL_URL: process.env.VERCEL_URL,
      ENVIRONMENT: process.env.ENVIRONMENT,
      REACT_APP_ENV: process.env.REACT_APP_ENV,
    });
  }, []);

  return (
    <div className="ui container">

      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
