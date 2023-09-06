import { useGlobalState } from 'src/Functions/States';
import GameMechanics from 'src/Functions/gameMechanics';
import { useEffect } from 'react';
import Api from 'src/API/API';

const CardRotation = () => {
  const { cardRotation, setCardRotation, card } = useGlobalState();
  const { fetchPokemon, } = Api();
  const { onActionSelected } = GameMechanics();

  //Draws next card for player
  const drawCard = (action: string) => {
    if (cardRotation == 17) {
      setCardRotation(0);
    }
    onActionSelected(action);
    setCardRotation(prevrotaion => prevrotaion + 1);

    //Changes card used to New card after 1 second
    setTimeout(function () {
      fetchPokemon(cardRotation, action);
    }, 1000);
  }

  useEffect(() => {
    fetchPokemon(card.card0.number, "card0");
    fetchPokemon(card.card1.number, "card1");
    fetchPokemon(card.card2.number, "card2");
  }, []);

  return { drawCard };
};

export default CardRotation;
