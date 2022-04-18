/* eslint-disable react/no-array-index-key */
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const App = () => (
  <Wrapper>
    <Screen value="0" />
    <ButtonBox>
      {
          btnValues.flat().map((btn, i) => (
            <Button
              key={i}
              className={btn === '=' ? 'equals' : ''}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          ))
        }
    </ButtonBox>
  </Wrapper>
);

export default App;
