import express from 'express';
import LightService from "../services/LightService";
import Light from '../models/Light';

/**declare variable */
let router = express.Router();
let lightService=new LightService();

/**
 * Public Part
 */

router.get("/", (req, res) => {
	let method="controllers/home";
	console.log(method+" ===>start");

	res.render("public/index",{title:"Home"});
});


/**
 * Dashboard Part
 */
router.get("/private/dashboard", (req, res) => {
	let method="controllers/private/dashboard";
	console.log(method+" ===>start");

	res.render("dashboard/partials/dashboard",{title:"Dashboard"});
});

/**
 * users
 */
router.get("/private/users/profile", (req, res) => {
	let method="/private/users/profile";
	console.log(method+" ===>start");
	let user={firstname:"Donald",lastname:"Trump",address:"37 ton duc thang",phone:"123456789"};
	res.render("dashboard/users/profile",{title:"Profile",user:user});
});

/**
 * light
 */
router.get("/private/light", (req, res) => {
	let method="controllers/private/light";
	console.log(method+" ===>start");



	let light={topic:"light-1",message:"off"};
	res.render("dashboard/light/list",{title:"light",light:light});
});


router.get("/private/control_light/:status", async(req, res) => {
	let method="controllers/private/control_light";
	console.log(method+" ===>start");

	try {
		let result= await lightService.controlLight(req.params.status);
		let light=new Light(result.data.topic,result.data.message);

		if(result.status=="success"){
			console.log(method+" -->success");
			res.render("dashboard/light/list",{title:"light",light:light});
		}else{
			console.log(method+" -->failed from api");
			res.render("dashboard/light/list",{title:"light",light:light});		
		}
		
	} catch (error) {
		console.log(method+" -->failed");
		res.redirect("/private/light");			
	}
});
/**export */
module.exports = router;