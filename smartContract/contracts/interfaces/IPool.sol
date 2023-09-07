pragma solidity 0.8.19;

interface IPool {
    function deposit(uint256 firstTokenValue, uint256 secondTokenValue) external ;   
    function swap(bool buy, uint256 tokenValue) external;
}