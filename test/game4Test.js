const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game4', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game4');
    const game = await Game.deploy();

    // Getting an address
    const signer = ethers.provider.getSigner(0);

    const addr = await signer.getAddress();

    return { game, signer, addr };
  }
  it('should be a winner', async function () {
    const { game, signer, addr } = await loadFixture(deployContractAndSetVariables);

    await game.connect(signer).write(addr);

    // nested mappings are rough :}

    await game.win(addr);

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
