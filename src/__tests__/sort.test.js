import { orderByProps } from '../js/sort'; 

test('Сортировка свойств в указанном порядке', () => {
  const obj = { name: 'swordsman', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['name', 'level'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'swordsman' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
 
test('Сортировка свойств объекта в алфавитном порядке, если они не в массиве', () => {
  const obj = { name: 'swordsman', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['level', 'armor'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'swordsman' },
  ]);
});