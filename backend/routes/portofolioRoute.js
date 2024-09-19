const router = require('express').Router();
const {Home, Project, Service, Skill, Experience, Contact} = require('../models/portofolioModel');

router.get('/get-portofolio-data', async(req,res)=> {
    try {
            const homes = await Home.find();
            const projects = await Project.find();
            const services = await Service.find();
            const skills = await Skill.find();
            const experiences = await Experience.find();
            const contacts = await Contact.find();

            res.status(200).send({
                homes: homes[0],
                projects: projects,
                services : services,
                skills : skills,
                experiences: experiences[0],
                contacts : contacts[0],
            });
            

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;