import  LightRepo from "../repositories/LightRepo";

let lightRepo=new LightRepo();

/**declare class */
class LightService{
    constructor(){};
    controlLight(_status){
        let method="LightService/controlLight()";
        console.log(method+" -->start");

        try {
            console.log(method+" -->success");
            return lightRepo.controlLight(_status);              
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);  
        }
    };

};

/**export */
module.exports=LightService;