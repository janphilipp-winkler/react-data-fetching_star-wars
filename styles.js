import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-dark: #111111;
  --color-light: #eeeeee;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  ul {
    padding: 0;
  }

  /* HTML: <div class="loader"></div> */
.loader {
  height: 35px;
  width: 80px;
  margin-left: 0px;
  background:
    radial-gradient(farthest-side,#ffd1d1 94%,#0000 ) 4px 22px/5px 5px,
    radial-gradient(farthest-side,#ffd1d1 94%,#0000 ) 12px 18px/5px 5px,    
    radial-gradient(farthest-side,#ffd1d1 94%,#0000 ) 3px 6px/8px 8px,    
    radial-gradient(farthest-side,#eb8594 90%,#0000 94%) left/20px 100%,    
    #bd3342;
  background-repeat: no-repeat;
  border-radius: 0 50px 50px 0;
  border-top-left-radius: 30px 40px;
  border-bottom-left-radius: 30px 40px;
  animation: l7 3s infinite steps(10);
  position: relative;
}
.loader::before {
  content: " ";
  position: absolute;
  inset: calc(50% - 8px) -10px calc(50% - 8px) auto;
  width: 15px;
  background: #bd3342;
  clip-path: polygon(0 50%,100% 0,70% 50%,100% 100%);
}
@keyframes l7 {
  100% {width: 20px;margin-left:60px;}
}
`;
