import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect } from 'chai'
import hre from 'hardhat'
import { bytesToHex, getAddress, zeroHash } from 'viem'
import ENSRegistryModule from '../ignition/modules/ENSRegistry'
import PublicResolverModule from '../ignition/modules/PublicResolver'
import FIFSRegistrarModule from '../ignition/modules/FIFSRegistrar'
import { labelHash, nodeHash } from '../utils'

const ROOT_NODE = zeroHash

enum InterfaceID {
  Addr = '0x01ffc9a7',
  Name = '0x691f3431',
  SupportsInterface = '0x01ffc9a7',
  Text = '0x59d1d43c',
}

describe('PublicResolver', function () {
  async function deployFixture() {
    const { ensRegistry } = await hre.ignition.deploy(ENSRegistryModule)
    const { publicResolver } = await hre.ignition.deploy(PublicResolverModule)
    const { fifsRegistrar } = await hre.ignition.deploy(FIFSRegistrarModule)

    const [owner, otherAccount] = await hre.viem.getWalletClients()

    // setup FIFS registrar
    await ensRegistry.write.setSubnodeOwner([
      ROOT_NODE,
      labelHash('eth'),
      fifsRegistrar.address,
    ])

    // register 'test.eth'
    await fifsRegistrar.write.register([
      labelHash('test'),
      owner.account.address,
    ])

    return {
      owner,
      otherAccount,
      ensRegistry,
      publicResolver,
    }
  }

  describe('PublicResolver', async function () {
    it('should support supportsInterface', async function () {
      const { publicResolver } = await loadFixture(deployFixture)

      expect(
        await publicResolver.read.supportsInterface([
          InterfaceID.SupportsInterface,
        ]),
      ).to.be.true
    })
  })

  describe('resolvers', async function () {
    it('AddressResolver - addr & setAddr & supportsInterface', async function () {
      const { publicResolver } = await loadFixture(deployFixture)

      expect(await publicResolver.read.supportsInterface([InterfaceID.Addr])).to
        .be.true

      const randomBytes = crypto.getRandomValues(new Uint8Array(20))
      const randomAddress = getAddress(bytesToHex(randomBytes))

      await publicResolver.write.setAddr([nodeHash('test.eth'), randomAddress])
      expect(await publicResolver.read.addr([nodeHash('test.eth')])).to.equal(
        randomAddress,
      )
    })

    it('NameResolver - name & setName & supportsInterface', async function () {
      const { publicResolver } = await loadFixture(deployFixture)

      expect(await publicResolver.read.supportsInterface([InterfaceID.Name])).to
        .be.true

      await publicResolver.write.setName([nodeHash('test.eth'), 'test2.eth'])
      expect(await publicResolver.read.name([nodeHash('test.eth')])).to.equal(
        'test2.eth',
      )
    })

    it('TextResolver - text & setText & supportsInterface', async function () {
      const { publicResolver } = await loadFixture(deployFixture)

      expect(await publicResolver.read.supportsInterface([InterfaceID.Text])).to
        .be.true

      await publicResolver.write.setText([nodeHash('test.eth'), 'answer', '42'])
      expect(
        await publicResolver.read.text([nodeHash('test.eth'), 'answer']),
      ).to.equal('42')
    })
  })
})
