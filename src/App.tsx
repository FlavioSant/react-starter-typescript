import { Greetings } from './components/Greetings';

import { GlobalStyles } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Greetings />
    </>
  );
};

export default App;
