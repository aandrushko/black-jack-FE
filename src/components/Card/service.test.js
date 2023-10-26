import { test, expect } from 'vitest';
import Spades from "../../assets/card_types/spades.svg";
import ClubsIcon from "../../assets/card_types/clubs.svg";
import DiamondsIcon from "../../assets/card_types/diamonds.svg";
import Hearts from "../../assets/card_types/hearts.svg";

import {
    getSuitIcon,
    getColorForSuit,
    renderCardName,
} from './service';

test('getColorForSuit should return red for Diamonds and Hearts', () => {
    expect(getColorForSuit('Diamonds')).toBe('red');
    expect(getColorForSuit('Hearts')).toBe('red');
})
test('getColorForSuit should return black for Spades and Clubs', () => {
    expect(getColorForSuit('Spades')).toBe('black');
    expect(getColorForSuit('Clubs')).toBe('black');
});
test('getSuitIcon should return correct icon for suit', () => {
    expect(getSuitIcon('Spades')).toBe(Spades);
    expect(getSuitIcon('Clubs')).toBe(ClubsIcon);
    expect(getSuitIcon('Diamonds')).toBe(DiamondsIcon);
    expect(getSuitIcon('Hearts')).toBe(Hearts);
});

test('renderCardName should return first letter if name is not a number', () => {
expect(renderCardName('Ace')).toBe('A');
    expect(renderCardName('King')).toBe('K');
    expect(renderCardName('Queen')).toBe('Q');
    expect(renderCardName('Jack')).toBe('J');
});

test('renderCardName should return name if name is a number', () => {
    expect(renderCardName('2')).toBe('2');
    expect(renderCardName('10')).toBe('10');
});