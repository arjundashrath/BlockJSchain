# BlockJSchain
An advanced library to implement, deploy and use blockchains in NodeJS.

### Installation
#### Using npm

`npm i blockjschain`

### Supported Methods and Usage

Import the class by

`var blk = require('blockjschain')`

Initialize by creating an object of the class by

`var bjsc = new blk()`

Alter the mining difficulty of the blocks by providing the preceeding zeros during the object initialization. If parameter is left blank, default value of '0000' is selected

eg. `var bjsc = new blk('00000')`

Call a method with the created object

eg. `bjsc.mine_block('Data')`


|Methods|Syntax|Usage|
|-------|------|-----|
|mine_block|`mine_block(optional parameter)`|Mine blocks by passing optional data as parameter|
|check_chain_integrity|`check_chain_integrity()`|Returns a boolean value: True if the chain is valid, False if the chain has been tampered with|
|get_chain|`get_chain()`|Returns the entire chain, the chain returned can be accessed like an array using indexes|
|chain_csv|`chain_csv(filename.csv)`|Exports the data of the blockchain to a csv file|
|chain_length|`chain_length()`|Returns count of blocks in the blockchain|

---

_Contributions are always welcomed_
[Github](https://github.com/arjundashrath/BlockJSchain)

_Reach out to me_
_arjundashrath@gmail.com_