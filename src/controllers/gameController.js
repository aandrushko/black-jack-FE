const getHandMaxScore = (hand = []) => {
    const maxScore = hand.reduce((acc, card) => {
        return acc + card?.value || 0;
    }, 0);
    return maxScore;
};

//getTheBestScoreOption -- recursive function that will check if user has ace and it maybe 11 or 1
// to get the best score and avoid busting
const getTheBestScoreOption = (hand) => {
        const maxScore = getHandMaxScore(hand);
        const firstAceIndex = hand.findIndex(card=> card.value === 11);
        if( maxScore > 21 && firstAceIndex !== -1) {
            const newHand = [...hand];
            newHand[firstAceIndex] = {...hand[firstAceIndex], value: 1};
            return getTheBestScoreOption(newHand);
        }
        return maxScore;
};

export { getHandMaxScore, getTheBestScoreOption };
