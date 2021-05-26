import { createGlobalStyle } from "styled-components/macro"

export default createGlobalStyle`
  * {
    --color-primary: hsl(190, 80%, 30%);
    --color-primary-dark: hsl(190, 80%, 15%);
    --color-overlay: hsla(190, 80%, 15%, 0.2);
    --color-secondary: hsl(40, 80%, 50%);
    --color-platinum: hsl(0, 0%, 90%);
    --color-silver: hsl(0, 0%, 75%);
    --color-text: hsl(190, 80%, 10%);
    --shadow:  0 4px 12px 0 hsla(0, 0%, 0%, 0.1);
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
    padding: .2em .7em;
  }

  button {
    background: var(--color-secondary);
    border: none;
    color: white;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 0.2em;
    padding: 0.3em 0;
    text-transform: uppercase;
  }
  
  h1, h2, h3{
    color: var(--color-primary-dark);
    margin: 0;
    padding: 0
  }

  h1 {
    font-size: 2rem;
    padding: 3rem 0 1rem 0;
    text-transform: uppercase;
    text-align: center;
  }

  h2 {
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1rem;
  }

  textarea {
    resize: none;
    border-radius: 10px;
  }
  
  ::placeholder {
    font-size: .8em;
  }
`
