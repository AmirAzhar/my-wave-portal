// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SongPortal {
    string[] allSongs;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function addNewSong(string memory song) public {
        allSongs.push(song);
        console.log("%s has added a new song!", msg.sender);
    }

    function getAllSongs() public view returns (uint256, string[] memory) {
        console.log("We have %d total songs!", allSongs.length);
        console.log("Here are the songs:");
        for (uint256 i = 0; i < allSongs.length; i++) {
            console.log(allSongs[i]);
        }

        return (allSongs.length, allSongs);
    }
}
