const router = require('express').Router(); //const express = require('express');
                                            //const router = express.Router();
const {Home, Myproject, Project, Service, Skill, Experience, Contact, Langexperience} = require('../models/portofolioModel');

router.get('/get-portofolio-data', async(req,res)=> {
    try {
            const homes = await Home.find();
            const myprojectsdes = await Myproject.find();
            const projects = await Project.find();
            const services = await Service.find();
            const skills = await Skill.find();
            const experiences = await Experience.find();
            const langexperiences = await Langexperience.find();
            const contacts = await Contact.find();

            res.status(200).send({
                homes: homes[0],
                myprojectsdes: myprojectsdes[0],
                projects: projects,
                services : services,
                skills : skills,
                experiences: experiences[0],
                langexperiences: langexperiences[0],
                contacts : contacts[0],
            });
            

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;