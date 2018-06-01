var RemoteEntity = require("./RemoteEntity.js");

// Class to describe an entity controlled by a human aggent
class HumanEntity extends RemoteEntity{
    constructor(){
        super();
    }
}

module.exports = HumanEntity;
