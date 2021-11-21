import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyleComponent = createGlobalStyle`
  ${reset}
`;

export default globalStyleComponent;
