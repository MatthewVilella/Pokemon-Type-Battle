import { designData } from 'src/Data/designData';

const CardDesign = () => {

    const createCardDesign = (pokemon: any, card: any) => {
        for (const item in designData) {
            const data = designData[item];
            if (item == pokemon.type0) {
                card.FirstTypeColor = data.color
                card.FirstTypeBorder = data.borderColor
                card.FirstTypeIcon = data.icon
            }

            else if (item == pokemon.type1) {
                card.SecondTypeColor = data.color
                card.SecondTypeBorder = data.borderColor
                card.SecondTypeIcon = data.icon
            }
        }
    }

    return { createCardDesign };
};

export default CardDesign;