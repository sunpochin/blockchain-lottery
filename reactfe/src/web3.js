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




// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    
    function Lottery() public {
        manager = msg.sender;
    }
    // constructor(string initialMessage) public {
    //     message = initialMessage;
    // }

    // constructor(string initialMessage) public {
    //     manager = msg.sender;
    //     message = initialMessage;
    // }

    function enter() public {
//        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
}

// contract Inbox {
//     string public message;
    
//     // constructor(string initialMessage) public {
//     //     message = initialMessage;
//     // }
    
//     function Inbox(string initialMessage) public {
//         message = initialMessage;
//     }
    
//     function setMessage(string newMessage) public {
//         message = newMessage;
//     }
    
//     function getMessage() public view returns(string) {
//         return message;
//     }
// }




「東京奧運故事」「」






















// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    
    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 1 finney);
        players.push(msg.sender);
    }
    
    function random() public view returns (uint) {
        return uint(keccak256(block.difficulty, now, players) );
    }
    
}

// contract Inbox {
//     string public message;
    
//     // constructor(string initialMessage) public {
//     //     message = initialMessage;
//     // }
    
//     function Inbox(string initialMessage) public {
//         message = initialMessage;
//     }
    
//     function setMessage(string newMessage) public {
//         message = newMessage;
//     }
    
//     function getMessage() public view returns(string) {
//         return message;
//     }
// }



謝謝～但我沒什麼朋友，更別說住在彰化...

圖片來自 蘋果仁、 Hami 網站：
https://applealmond.com/posts/108682


我也不是很懂....總之，用 愛與包容 教育大眾！ :D

劉員外好久不見啊～哈密久久，長長久久。


也可能是那些盒子們的 UI 做得很方便？畢竟用電腦手機在 Hami video 上點點還是有點 無法放鬆。我沒碰過安博盒子猜不到。
中華電信的 Hami Video 看奧運一個月只要 99 元，畫質高速度穩，右上角訂閱按下去刷卡就有～

