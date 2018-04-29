# Pomodoro-Timer
Functional React-Redux app using server side rendering with next.js, testing with jest, material-ui, and redux-observables.

Deployed: https://pomodoro-timer-vrqgfvfyrl.now.sh/

# Install & Run
<code>git clone https://github.com/amr792/pomodoro-timer.git</code>

<code>npm install</code>

<code>npm run dev</code>

Go to http://localhost:3000/

# Test with Jest
<code>npm run test</code>

# About the App
Lightweight, fast, functional, and devoid of side-effects.

Server Side Rendering (SSR) which is faster than Client Side rendering for single page applications (like this one). HTML is directly served before Javascript is finished loading. Next.js wraps React and enables SSR by default. More info about Next.js here: https://github.com/zeit/next.js/

Redux-Observables using Epics to avoid any side-effects. Epics take in a stream of action and dispatches additional actions based on a one-way data flow design pattern.

Jest enables easy, modular, and exhaustive testing.



