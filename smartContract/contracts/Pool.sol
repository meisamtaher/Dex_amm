pragma solidity 0.8.19;

contract Pool {
    address public firstToken;// sell means selling first Token  and buy means buying first token
    address public secondToken;
    mapping (address => uint256) LPBalances;
    function deposit(uint256 firstTokenValue, uint256 secondTokenValue) public {

    }    
    function swap(bool buy, uint256 tokenValue)public {
        
    }
}