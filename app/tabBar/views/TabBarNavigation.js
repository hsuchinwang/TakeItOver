'use strict'

// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from '../navigationConfiguration';

//Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //note: bindActionCreators(NoteActions, dispatch),
    },
    dispatch,
  };
}

class TabBarNavigation extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBarNavigation);


