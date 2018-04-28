import React from 'react';
import { initStore } from '../store/store';
import withRedux from 'next-redux-wrapper';
import Page from '../components/Page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class PomodoroTimer extends React.Component {
    static async getInitialProps({ req }) {
        // Ensures material-ui renders the correct css prefixes server-side
        let userAgent;
        if (process.browser) {
            userAgent = navigator.userAgent;
        } else {
            userAgent = req.headers['user-agent'];
        }

        return { userAgent };
    }
    render() {
        const { userAgent } = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
                <Page />
            </MuiThemeProvider>
        );
    }
}

export default withRedux(initStore, null)(PomodoroTimer);
