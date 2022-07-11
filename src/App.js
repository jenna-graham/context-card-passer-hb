import './App.css';

import Player from './Player';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import { useCardContext } from './ContextProvider';

function App() {
  const { selectedCard, playerOneHand, playerTwoHand, playerThreeHand, deck } = useCardContext();

  // arrays start at zero, but our players start at 1 :shrug:

  return (
    <div className="App">
      <section>
        <Player
          player={1}
          hand={playerOneHand}
          // to={to}
          // setFrom={setFrom}
          // selectedCard={selectedCard}
          // setTo={setTo}
          // setSelectedCard={setSelectedCard}
        />
        <Player
          player={2}
          hand={playerTwoHand}
          // to={to}
          // setFrom={setFrom}
          // selectedCard={selectedCard}
          // setTo={setTo}
          // setSelectedCard={setSelectedCard}
        />
        <Player
          player={3}
          hand={playerThreeHand}
          // to={to}
          // setFrom={setFrom}
          // selectedCard={selectedCard}
          // setTo={setTo}
          // setSelectedCard={setSelectedCard}
        />
        <CardList
          cards={deck}
          player={'deck'}
          // selectedCard={selectedCard}
          // setSelectedCard={setSelectedCard}
          // setFrom={setFrom}
        />
      </section>
      <section>{selectedCard && <ExecutePassButton />}</section>
    </div>
  );
}
export default App;
