pragma solidity >=0.7.0 <0.9.0;
// SPDX-License-Identifier: GPL-3.0
contract Storage{
    string public data = "Value1";
    event setText(string eventOutput);

    function get() view public returns (string memory){
        return data;
    }
    function set(string memory newData) public {
        data = newData;
        emit setText(newData);
    }
}