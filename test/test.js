import { tokens, ether, ETHER_ADDRESS, EVM_REVERT } from './helpers'

const Token = artifacts.require('./NeuToken')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('NeuFarm', ([deployer, user1, user2]) => {
  let token

  beforeEach(async() => {
    token = await Token.new()
  })

  describe('testing token contract', () => {
    describe('success', () => {

      it('checking token name', async () => {
        expect(await token.name()).to.be.eq('NeuToken')
      })

      it('checking token symbol', async () => {
        expect(await token.symbol()).to.be.eq('NEU')
      })

      it('checking token initial total supply', async () => {
        expect(Number(await token.totalSupply())).to.eq(0)
      })
    })
  })
})
