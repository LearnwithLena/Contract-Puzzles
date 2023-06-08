const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();

    return { game };
  }
  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);


    // good luck
    signer = (await ethers.getSigners()).filter((item) => (String(item.address).startsWith('0x00') && ((parseInt(item.address, 16) < parseInt('0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf', 16)))))

    await game.connect(signer[0]).win();

    // await game.win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});

// Changes