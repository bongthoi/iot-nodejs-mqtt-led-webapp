import rq from "request-promise";
import  Light    from    "../models/Light";
import API_CONFIG from "../../configs/api_config.json";

/**declare class */
class LightRepo{
    constructor(){};
    controlLight(_status){
        let method="LightRepo/controlLight()";
        console.log(method+" -->start");

        const options={
            method:"GET",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            uri:API_CONFIG.api_ip+':'+API_CONFIG.api_port+API_CONFIG.api_url+"stc/floor1/showroom/light/"+_status,
            json:true
        };

        return new Promise((resolve,reject)=>{
            rq(options,function(error,result){
                if(error){
                    console.log(method+' -->fail');
                    return reject(new Error(error));
                }else{
                    console.log(method+' -->success');
                    return resolve(result.body);
                }
            });
        });
    };



};

/**export */
module.exports=LightRepo;