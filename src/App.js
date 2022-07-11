import './App.css';

import Player from './Player';
import CardList from './CardList';
import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import { useCardContext } from './ContextProvider';

function App() {
  const { selectedCard } = useCardContext();

  // arrays start at zero, but our players start at 1 :shrug:

  return (
    <div className="App">
      <section>
        <Player
        // to={to}
        // player={1}
        // hand={playerOneHand}
        // setFrom={setFrom}
        // selectedCard={selectedCard}
        // setTo={setTo}
        // setSelectedCard={setSelectedCard}
        />
        <Player
        // to={to}
        // player={2}
        // hand={playerTwoHand}
        // setFrom={setFrom}
        // selectedCard={selectedCard}
        // setTo={setTo}
        // setSelectedCard={setSelectedCard}
        />
        <Player
        // to={to}
        // player={3}
        // hand={playerThreeHand}
        // setFrom={setFrom}
        // selectedCard={selectedCard}
        // setTo={setTo}
        // setSelectedCard={setSelectedCard}
        />
        <CardList
        // cards={deck}
        // selectedCard={selectedCard}
        // setSelectedCard={setSelectedCard}
        // setFrom={setFrom}
        // player={'deck'}
        />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton />
          // passCard={passCard} from={from} to={to} selectedCard={selectedCard}
        )}
      </section>
    </div>
  );
}
export default App;
