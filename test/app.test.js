import getInfo from '../src/js/app';


const hero = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Возвращает информацию о персонаже', () => {
  expect(getInfo(hero)).toBe('😠 Л(1) ⚔ 40 🛡10 ❤50');
});
