# ENS Demo

This is my final project of the course Blockchain Development and FinTech.

You can find my slides [here](./assets/ethereum-name-service.pdf).

## Project Structure

- `/ens`: This directory is a hardhat project for ENS contracts including deployment, CLI, and testing.
- `/frontend`: Initialized with a Next.js project, for demoing the DApp built for the ENS interaction.
- `/common`: The package for both the project above, including `nodeHash()` and `labelHash()`.

## ENS

In my demo version, I deployed the following contracts:
- `ENSRegistry`: The ENS registry
- `FIFSRegistrar`: Registrar with first-in-first-serve policy, for registering without a price for a name and claiming the name if you're the first to claim it
- `PublicResolver`: The public resolver responsible for resolving records
  - I'm using my own version here, supporting only `addr`, `text` and `name` resolution
- `ReverseRegistrar`: The reverse resolver responsible for resolving records of `<address>.addr.reverse`
- `Root`: Hold the ownership of the root node (`0x00...00`)

After deploying, the configuration between the contracts are as below:
- Setting up public resolver
  - `ensRegistry.setSubnodeOwner(ROOT_NODE, 'resolver', deployer)`
  - `ensRegistry.setResolver('resolver', publicResolver)`
  - `publicResolver.setAddr('resolver', publicResolver)`
- Setup FIFS registrar for `'eth'`
  - `ensRegistry.setSubnodeOwner(ROOT_NODE, 'eth', fifsRegistrar)`
- Setup reverse registrar
  - `ensRegistry.setSubnodeOwner(ROOT_NODE, 'reverse', deployer)`
  - `reverseRegistrar.setDefaultResolver(publicResolver)`
  - `ensRegistry.setSubnodeOwner('reverse', 'addr', reverseRegistrar)`
- Transfer the ownership of the root node to Root
  - `ensRegistry.setOwner(ROOT_NODE, root)`

Note: code above are in pseudocode and the name are denoted before namehash/labelhash, you can find the code in [./ens/utils/deploy.ts](./ens/utils/deploy.ts).

## Frontend

There are some restrictions of the app
- I'm not using any third party services to obtain the records an account holds, so to edit the records, the user have to remember the exact name he/she holds.
- When submitting the records after finishing editting, there will be at most 4 transactions he/she has to confirm.
  - I'm not doing any optimistic updating since this is just for demo purpose :(

### Home Page

Instructions
1. Connect to your wallet
2. (optional) Select the chain, it's either Sepolia or Holesky
3. Type in the name you're interested in, for example `demo`
    - If you are the owner of it, you can edit the records of it
    - If the name is not registered, you can click on the register button and register it

<table>
  <thead>
      <tr>
        <th>Owner of the record</th>
        <th>Name not registered</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://github.com/tmp54/bdaf-final-project/blob/master/assets/home_owner.png?raw=true" />
      </td>
      <td>
        <img src="https://github.com/tmp54/bdaf-final-project/blob/master/assets/home_unregistered.png?raw=true" />
      </td>
    </tr>
  </tbody>
</table>


### Edit Page

Instructions
1. After registered, the name and address field is fixed, and cannot be modified
2. You can edit the `text` records of it, currently it only support the keys of `com.github` and `com.twitter`
3. You can refresh the page after the transactions are comfirmed, the records should appear in the form

Note: To obtain the records of a name, you can navigate to `/edit?name=<name here>`. This feature is implemented one hour before demo, so don't blame me for the user experience :(

<table>
  <thead>
      <tr>
        <th>Edit records</th>
        <th>Showing records of name</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://github.com/tmp54/bdaf-final-project/blob/master/assets/edit_owner.png?raw=true" />
      </td>
      <td>
        <img src="https://github.com/tmp54/bdaf-final-project/blob/master/assets/edit_not_owner.png?raw=true" />
      </td>
    </tr>
  </tbody>
</table>

## Deployments

### Sepolia

| Contract | Address |
| :--- | :--- |
| ENSRegistry | `0x9e86C080275f531A1c2bca31303797d634702E38` |
| FIFSRegistrar | `0xe43D572B326Fe31683c11f8F7a9ca99970367e7a` |
| ReverseRegistrar | `0x317c788644EC63f2aCd4aD0e68CF106Ea1897d16` |
| PublicResolver | `0xef7CE222921f0024F8A05130411826DA81a72783` |
| Root | `0xaF9Ed5d73029896E01195eC37b05c00470316B50` |

### Holesky

| Contract | Address |
| :--- | :--- |
| ENSRegistry | `0x291513d6b987b055F1756FF8c9b9C4a7b5B5fA40` |
| FIFSRegistrar | `0xde1D8A0Db97F7184f61c5A1B5d54228334D1f8AC` |
| ReverseRegistrar | `0x63220518a48BcC3289F2e3BCb662FE6dA2Dc0f97` |
| PublicResolver | `0xff56667cA50b88acD526eB22db71bbDeEc70A2E5` |
| Root | `0x5442e7AF30202FFc28b41be0F2C27D7283b31a02` |

## Development

### Setup

After running `pnpm i -r`, it should install required packages and generate contract ABIs with Wagmi.

Then `cp .env.example .env` and fill in the information. Note: for API key of Alchemy, both with and without `NEXT_PUBLIC_` prefix should be the same.

### ENS

#### Deploy

The deployment is using Hardhat Ignition, which will record the address being deployed.
For further actions, like interacting with, it will use the one that has been deployed.

```shell
pnpm hardhat run --network localhost ./scripts/deploy.ts
```

#### CLI for ENS

There are multiple Hardhat tasks being registered, running `pnpm hardhat`, you can find
```
ens:get-name          Get the name from an address
ens:get-text          Get a text record from a node
ens:register          Register a name with FIFSRegistrar
ens:set-name          Set the name to an address
ens:set-text          Set a text record to a node
```
You can use `pnpm hardhat <task name> --help` to obtain more information on how to use them.

#### Misc

To find the namehash/labelhash of a name:
```shell
pnpm tsx ./scripts/namehash.ts <name>
```

### Frontend

```shell
# dev
pnpm dev

# build
pnpm build

# start production server
pnpm start
```

You can access it on http://localhost:3000.
