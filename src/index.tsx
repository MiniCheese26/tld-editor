import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'Components/app';
import {GlobalStyle} from 'Styles/globalStyle';
import {Root} from 'Styles/root';
import {ThemeProvider} from 'styled-components';

const theme = {
  bg: '#272932',
  fg: '#3E4046',
  fg1: '#62656A',
  font: '#FCFDFD',
  placeholder: '#B7BCC0'
};

function render() {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle/>
        <App/>
      </Root>
    </ThemeProvider>, document.querySelector('#root'));
}

render();
