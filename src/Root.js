import 'babel-polyfill';
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createHistory, useBasename } from 'history';

import { IS_PRODUCTION } from './constants/Config';
import configureStore from './store/configureStore';
import NotesApp from './containers/NotesApp';
import NoteContainer from './components/note/NoteContainer';
import ShareContainer from './components/share/ShareContainer';
import NoteList from './components/note/sidebar/note/NoteList';
import NoteBookList from './components/note/sidebar/notebook/NoteBookList';
import TagList from './components/note/sidebar/tag/TagList';
import SiteNoteList from './components/note/sidebar/crossSiteNote/SiteNoteList';

import Billing from './containers/Billing';
import PubilcPreview from './containers/PubilcPreview';

/**
 *  ##React API
 *  - Provider: Makes the Redux store available to the connect() calls in the component hierarchy below.
 *  - connect: Connects a React component to a Redux store.
 */

/**
 *  ##react-router
 *  ###Component
 *  - Router: Primary component of React Router. It keeps your UI and the URL in sync.
 *  - Link: The primary way to allow users to navigate around your application. Link will render a fully accesible anchor tag with the proper href.
 *  - Route Component: A user-defined component given to a Route as the component prop. The router will inject properties into your component when its rendered.
 *  ###Route Configuration
 *  - Route: A Route is used to declaratively map routes to your application's component hierarchy.
 *  - Plain Route: A route configuration object. Router turns JSX <Route/>s into these objects, but you can use them directly if you prefer. All of the props are the same as <Route/> props, except those listed here.
 *  - Redirect: A Redirect sets up a redirect to another route in your application to maintain old URLs.
 */

class Root extends React.Component {

  static childContextTypes = {
    host: PropTypes.string,
    webPort: PropTypes.number,
    wsPort: PropTypes.number,
    lang: PropTypes.object,
    isProduction: PropTypes.bool,
    envPlatform: PropTypes.string,
    version: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.store = configureStore();
    document.cookie = `timezone=${(new Date().getTimezoneOffset() / 60)}`;
  }

  getChildContext() {
    return {
      host: window._dn,
      webPort: +window._defaultPort,
      wsPort: +window._websocketPort,
      lang: window.lang_dictionary,
      isProduction: window._isProduction === 'true',
      envPlatform: window._envPlatform,
      version: window._version,
    };
  }

  render() {
    const history = IS_PRODUCTION ? useBasename(createHistory)({
      queryKey: false,
      basename: '/ns',
    }) : hashHistory;

    return (
      <Provider store={this.store}>
        <Router history={history}>
          <Route path="/" component={NotesApp}>
            <Route path="share" component={ShareContainer} />
            <Route component={NoteContainer}>
              <Route path="notebook" component={NoteBookList} />
              <Route path="section/:siteId/:sectionId" component={NoteList} />
              <Route path="section/:siteId/:sectionId/:noteId" component={NoteList} />
              <Route path="tag" component={TagList} />
              <Route path="tagNote/:siteId/:tagId" component={NoteList} />
              <Route path="tagNote/:siteId/:tagId/:noteId" component={NoteList} />
              <Route path="trashcan/:siteId" component={NoteList} />
              <Route path="trashcan/:siteId/:noteId" component={NoteList} />
              <Route path="important" component={SiteNoteList} />
              <Route path="important/:siteId" component={SiteNoteList} />
              <Route path="important/:siteId/:noteId" component={SiteNoteList} />
              <Route path="search/:keyword" component={SiteNoteList} />
              <IndexRoute component={NoteBookList} />
            </Route>
          </Route>
          <Route path="/billing" component={Billing} />
          <Route path="/preview/:hashKey" component={PubilcPreview} />
        </Router>
      </Provider>
    );
  }

}

export default Root;
