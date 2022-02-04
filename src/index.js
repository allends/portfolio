import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Introduction from './Pages/Introduction/Introduction';
import AboutMe from './Pages/AboutMe/AboutMe';
import ProjectCollection from './Pages/ProjectsCollection/ProjectsCollection';

export const pages = [
  <Introduction />,
  <AboutMe />,
  <ProjectCollection />
]

ReactDOM.render(
  <React.StrictMode >
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

