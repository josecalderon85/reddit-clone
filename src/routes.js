import React from 'react';
import { IndexRoute,Router, Route } from 'react-router';
import App from './containers/App/index';
import Posts from './containers/Posts/index';
import AddPost from './containers/Addpost/index.js';

const Routes = (props) => (
  <Router {...props}> 
		<Route path="/" component={ App }> 
			<IndexRoute component={ Posts } />
			<Route path="/posts" component={ Posts } />
			<Route path="add-posts" component={ AddPost } />
		</Route>
	</Router>
);
export default Routes;