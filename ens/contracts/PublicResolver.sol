// SPDX-License-Identifier: WTFPL
pragma solidity ^0.8.24;

import "@ensdomains/ens-contracts/contracts/registry/ENS.sol";
import "@ensdomains/ens-contracts/contracts/resolvers/profiles/AddrResolver.sol";
import "@ensdomains/ens-contracts/contracts/resolvers/profiles/NameResolver.sol";
import "@ensdomains/ens-contracts/contracts/resolvers/profiles/TextResolver.sol";

contract PublicResolver is AddrResolver, NameResolver, TextResolver {
    ENS immutable ens;

    constructor(ENS _ens) {
        ens = _ens;
    }

    function isAuthorised(bytes32 node) internal view override returns (bool) {
        return ens.owner(node) == msg.sender;
    }

    function supportsInterface(
        bytes4 interfaceID
    ) public view override(AddrResolver, NameResolver, TextResolver) returns (bool) {
        return super.supportsInterface(interfaceID);
    }
}
