import { useGlobalState } from 'src/Functions/States';
import { actionsType } from 'src/Data/advantageType';
import CalculateWinner from 'src/Functions/calculateWinner'

const GameMechanics = () => {
    const { setPlayerAction, setComputerAction, playerScore, setPlayerScore, computerScore, setComputerScore, setWinner, pokemon } = useGlobalState();
    const { calculateWinner, actions } = CalculateWinner();

    //Computer picks random Card to play
    function randomAction() {
        const keys = Object.keys(actions);
        const index = Math.floor(Math.random() * keys.length);
        return keys[index];
    }

    //Distributes points based on who won the round
    const onActionSelected = (selectedAction: string) => {
        const newComputerAction = randomAction();

        setPlayerAction(selectedAction);
        setComputerAction(newComputerAction);

        const newWinner: any = calculateWinner(selectedAction, newComputerAction);

        setWinner(newWinner);

        if (newWinner === -1) {
            setPlayerScore(playerScore + 1);
        } else if (newWinner === 1) {
            setComputerScore(computerScore + 1);
        }
        if (playerScore == 18 || computerScore == 18) {
            setPlayerScore(0);
            setComputerScore(0);
        }
    };

    //Diplays what Pokemon each user chose
    function ActionIcon({ action, ...props }: any) {
        const icons: actionsType = {
            card0: pokemon.pokemon0.sprite,
            card1: pokemon.pokemon1.sprite,
            card2: pokemon.pokemon2.sprite,
        };

        const Icon = typeof icons[action] === 'string' ? 'img' : icons[action];

        return typeof icons[action] === 'string' ? (
            <Icon src={icons[action]} alt={action} {...props} />
        ) : (
            <Icon {...props} />
        );
    }

    return { randomAction, onActionSelected, ActionIcon };
};

export default GameMechanics;
