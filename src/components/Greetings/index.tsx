import { Containter } from './styles';

import logoImg from '../../assets/logo.png';

const Greetings: React.FC = () => {
  return (
    <Containter>
      <img src={logoImg} alt="React Starter" />
      <h1>React Starter</h1>
      <p>
        An React boilerplate including Webpack and Babel, Typescript, ESLint,
        Prettier and Styled-components
      </p>
    </Containter>
  );
};

export { Greetings };
