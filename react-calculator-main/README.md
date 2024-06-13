## WebDev Simplified - React Calculator

npm start error for node versions > 17
'ERR_OSSL_EVP_UNSUPPORTED'
export NODE_OPTIONS=--openssl-legacy-provider


# Box Sizing
    box-sizing: border-box;
    includes the padding and border in an element's total width and height.
    box-sizing: content-box;
    does not include padding and border in element's total width and height

# CSS Gradients
    Linear gradient (default direction is top to bottom)
    directional
    background: linear-gradient(direction, color1, color2, color3,...);
    diagonal
    background-image: linear-gradient(to bottom right, red, yellow);
    angle
    background-image: linear-gradient(180deg, red, yellow);
    transperancy
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    Other: radial-gradient, conic-gradient




  border: 1px solid blue;
  for border line
  margin: 0
  all side margins are 0 (more variation is margin-left, margin-top, etc)

  # Grid - Learn
  <!-- Block Level Grid -->
  display: grid;
  <!-- Inline Level Grid -->
  display: inline-grid;
  <!-- Grid Template -->
  <!-- Columns -->
  grid-template-columns: repeat(4, 6rem);
  <!-- Rows -->
  grid-template-rows: minmax(7rem, auto) repeat(4, 6rem);
  <!-- Spanning columns -->
  grid-column: 1 / -1
  grid-column: span 2


https://www.youtube.com/watch?v=9zBsdzdE4sM&t=229s

  https://www.codecademy.com/learn/premium-intermediate-css-css-grid/modules/premium-learn-css-grid/cheatsheet

  # Flex - Flex Properties
  Learn CSS FlexBox

    flex-direction
    flex-wrap
    flex-flow
    justify-content
    align-items
    align-content

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

Word Wrap - 
<!-- Breaks at word end -->
word-wrap: normal;
<!-- Allows words to be broken -->
word-wrap: break-word;
<!-- Word break -->
word-break: break-all;

useReducer
const  [state, dispatch]= useReducer(reducerFunction, {})
  
  
