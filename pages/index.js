import React from 'react'
import {initStore} from '../store/store'
import withRedux from '../utils/withRedux'
import Page from '../components/Page'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class PomodoroTimer extends React.Component {
  render () {
    return (
        <MuiThemeProvider>
          <Page title='Pomodoro Timer' />
        </MuiThemeProvider>
    )
  }
}

export default withRedux(initStore, null)(PomodoroTimer)
