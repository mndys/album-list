import { createGlobalStyle } from "styled-components/macro"

export default createGlobalStyle`
  * {
    --color-primary: #0f6f7bff;
    --color-primary-dark: #093a40ff;
    --color-secondary: #fca311ff;
    --color-platinum: #e4e4e4ff;
    --color-silver: #c3c3c3ff;
    --color-text: #0e1516ff;
    --shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;;
    box-sizing: border-box;
}

  body {
    margin: 0 auto;
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
    color: var(--color-text)
  }

  input, button, textarea {
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    border-radius: 25px;
    &:focus {
      outline: none;
      border-color: transparent;
      box-shadow: 0px 0px 4px 0px var(--color-secondary);
    }
  }

  input, textarea {
    border: 2px solid var(--color-silver);
    padding: 4px;
  }

  button {
    border-radius: 4px;
    background: var(--color-secondary);
    border: none;
    letter-spacing: 0.2em;
  }
  
  h1, h2, h3{
    font-size: 1.3em;
    line-height: 1.1em;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: .1em;
    padding-bottom: .3em;
    color: var(--color-primary-dark);
  }

  h1 {
    font-size: 2em;
    padding: 2rem 0 .5rem 0;
    text-align: center;
  }

  h3{
    font-size: clamp(.8em, 4vw, 1em);
    margin: 2rem 0 .5rem 0;
  }

  textarea {
    resize: none;
    border-radius: 10px;
  }
  
  ::placeholder {
    font-size: .8em;
  }
`
