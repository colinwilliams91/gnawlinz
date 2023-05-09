import axios from 'axios';
import { describe, expect, it } from 'vitest';
import { Enemy } from '../src/client/utility/interface';
import { statCheck, fightEnemy, isEnemy } from '../src/client/utility/gameUtils';
import handleLocationChange from '../src/client/components/gameView/GameView';

describe('#statCheck', () => {

  const input = Math.floor(Math.random() * 10) + 1;

  it('should always return "success" if the input is greater than 10', () => {
    expect(statCheck(11, 'combat') as string).toBe('success');
  });

  it('should always return "failure" if the input is less than 1', () => {
    expect(statCheck(0, 'combat') as string).toBe('failure');
  });

  it('should always return a string', () => {
    expect(typeof statCheck(input, 'combat')).toBe('string');
  });

});

describe('#fightEnemy', () => {
  it('should return an object', () => {
    expect(typeof fightEnemy(5, 100, 7, 10) as string).toBe('object');
  });
  it('returned object should have a player or enemy property', () => {
    expect(fightEnemy(4, 100, 8, 10) as object).toHaveProperty('enemy');
  });
  it('returned object should have a player or enemy property', () => {
    expect(fightEnemy(8, 100, 4, 10) as object).toHaveProperty('player');
  });
});

describe('#damageApplication', () => {
  // const damage = fightEnemy(7, 100, 4, 10); // returns ~8
  let playerHealth = 0;
  axios.patch('/character/update/1', { health: fightEnemy(7, 100, 4, 10).player })
    .then(() => {
      axios.get('/character/1')
        .then((response) => {
          playerHealth += response.data.health;
        })
        .catch((err => console.log('err in damage calc tests line 29: ', err)));
    })
    .catch((err => console.log('err in damage calc tests line 31: ', err)));
  // playerHealth should be 4-9
  it('should provide a new health total to be saved in the DB', () => {
    expect(playerHealth).toBeLessThan(10);
  });
});

describe('#isEnemy', () => {
  const input1 = { health: 1, strength: 10 };
  const input2 = { strength: 1 };
  it('returns ...', () => {
    expect(isEnemy(input1) as boolean).toBe(true);
  });
  it('returns a string in all cases', () => {
    expect(isEnemy(input2) as boolean).toBe(false);
  });
  it('returns a string in all cases', () => {
    expect(typeof isEnemy(input2)).toBe('boolean');
  });
});

//export const fightEnemy = (enemyStrength: number, enemyHealth: number, playerStrength: number, playerHealth: number) => {

describe('#isEnemy', () => {
  const input1 = { health: 1, strength: 10 };
  const input2 = { strength: 1 };
  it('returns ...', () => {
    expect(isEnemy(input1) as boolean).toBe(true);
  });
  it('returns a string in all cases', () => {
    expect(isEnemy(input2) as boolean).toBe(false);
  });
  it('returns a string in all cases', () => {
    expect(typeof isEnemy(input2)).toBe('boolean');
  });
});


