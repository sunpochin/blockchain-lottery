import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
// export default web3;

window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
 
export default web3;


// contract Inbox {
//     string public message;
    
//     constructor(string initialMessage) public {
//         message = initialMessage;
//     }
    
//     // function Inbox(string initialMessage) public {
//     //     message = initialMessage;
//     // }
    
//     function setMessage(string newMessage) public {
//         message = newMessage;
//     }
    
//     function getMessage() public view returns(string) {
//         return message;
//     }
// }




// // SPDX-License-Identifier: GPL-3.0

// pragma solidity ^0.4.17;

// contract Lottery {
//     address public manager;
//     address[] public players;
    
//     function Lottery() public {
//         manager = msg.sender;
//     }
//     // constructor(string initialMessage) public {
//     //     message = initialMessage;
//     // }

//     // constructor(string initialMessage) public {
//     //     manager = msg.sender;
//     //     message = initialMessage;
//     // }

//     function enter() public {
// //        require(msg.value > .01 ether);
//         players.push(msg.sender);
//     }
// }

// // contract Inbox {
// //     string public message;
    
// //     // constructor(string initialMessage) public {
// //     //     message = initialMessage;
// //     // }
    
// //     function Inbox(string initialMessage) public {
// //         message = initialMessage;
// //     }
    
// //     function setMessage(string newMessage) public {
// //         message = newMessage;
// //     }
    
// //     function getMessage() public view returns(string) {
// //         return message;
// //     }
// // }




// 「東京奧運故事」「」






















// // SPDX-License-Identifier: GPL-3.0

// pragma solidity ^0.4.17;

// contract Lottery {
//     address public manager;
//     address[] public players;
    
//     function Lottery() public {
//         manager = msg.sender;
//     }

//     function enter() public payable {
//         require(msg.value > 1 finney);
//         players.push(msg.sender);
//     }
    
//     function random() public view returns (uint) {
//         return uint(keccak256(block.difficulty, now, players) );
//     }
    
// }

// // contract Inbox {
// //     string public message;
    
// //     // constructor(string initialMessage) public {
// //     //     message = initialMessage;
// //     // }
    
// //     function Inbox(string initialMessage) public {
// //         message = initialMessage;
// //     }
    
// //     function setMessage(string newMessage) public {
// //         message = newMessage;
// //     }
    
// //     function getMessage() public view returns(string) {
// //         return message;
// //     }
// // }

