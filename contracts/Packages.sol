// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Packages {
    uint public packagesCount = 0;

    struct Package {
        string from;
        string to;
        uint weight;
        uint worth;
    }
    
    mapping(uint => Package) public packages;

    function createPackage(string memory from, string memory to, uint weight, uint worth) public {
        packagesCount++;
        packages[packagesCount] = Package(from, to, weight, worth);
    }
}
