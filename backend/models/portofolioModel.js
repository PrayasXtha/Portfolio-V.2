const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
  jobTitles: {
    type: Array,
    required: true,
  },
  aboutDes: {
    type: String,
    required: true,
  },
  openToWork: {
    type: String,
    required: true,
  }
});

const myProjectDesSchema = new mongoose.Schema({
  projectmyDes: {
    type: String,
    required: true,
  },
})
const projectSchema = new mongoose.Schema({

  projectYear: {
    type: String,
    required: true,
  },
  projectImg: {
    type: String,
    required: true,
  },
  projectImgMultiMedia: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectDes: {
    type: String,
    required: true,
  },
  projectFullDes: {
    type: String,
    required: true,
  },
  projectDemoLink: {
    type: String,
    required: true,
  },
  projectGitLink: {
    type: String,
    required: true,
  },
  projectLang: {
    type: Array,
    required: true,
  },
});

const servicesSchema = new mongoose.Schema({
  serviceTitles: {
    type: Array,
    required: true,
  },
  serviceDes: {
    type: String,
    required: true,
  },
  serviceImg: {
    type: String,
    required: true,
  },
});

const skillsSchema = new mongoose.Schema({
  experienceTitles: {
    type: String,
    required: true,
  },
  experienceAbout: {
    type: String,
    required: true,
  },
  experiencePeriod: {
    type: String,
    required: true,
  },

});

const experienceShema = new mongoose.Schema({
    experienceDes: {
        type: String,
        required: true,
      },
})

const langexperienceSchema = new mongoose.Schema ({
  langDes:{
    type: String,
    required: true,
  },
  langTitle: {
    type: String,
    required: true,
  },
  langImg: {
    type: Array,
    required: true,
  },
})

const contactSchema = new mongoose.Schema({
  contactTitle: {
    type: String,
    required: true,
  },
  contactDes: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
});


module.exports = {
    Home: mongoose.model("homes", homeSchema),

    Myproject: mongoose.model("myprojectdes", myProjectDesSchema),
    Project: mongoose.model("projects", projectSchema),
    Service: mongoose.model("services", servicesSchema),
    Skill: mongoose.model("skills", skillsSchema),
    Experience: mongoose.model("experiences", experienceShema),
    Langexperience: mongoose.model("langexperiences", langexperienceSchema),

    Contact: mongoose.model("contacts", contactSchema),
}