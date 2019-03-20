/**declare class */
class   Light{
    constructor(topic,message){
        this.$class="Light";
        this.topic=topic;
        this.message=message;
    };
};

/**export */
module.exports=Light;