import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import MainRoutes from './routes/MainRoutes'

ReactDOM.render(<MainRoutes />, document.getElementById('root'));

serviceWorker.unregister();