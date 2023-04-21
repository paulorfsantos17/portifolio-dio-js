function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  const name = document.getElementById("profile.name");
  const job = document.getElementById("profile.job");
  const location = document.getElementById("profile.location");
  const email = document.getElementById("profile.email");
  const phone = document.getElementById("profile.phone");

  photo.src = profileData.photo;
  name.innerHTML = profileData.name;
  job.innerHTML = profileData.job;
  location.innerHTML = profileData.location;

  phone.innerHTML = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  email.innerHTML = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSkillsPersonal(profileData) {
  const skillPersonalElement = document.getElementById("skills.personal");
  const softSkills = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");

  skillPersonalElement.innerHTML = softSkills;
}

function updateHardSkills(profileData) {
  const skillToolsElement = document.getElementById("skill.tools");
  const hardSkills = profileData.skills.hardSkills
    .map((skill) => `<li><img src='${skill.logo}' alt=${skill.name}/></li>`)
    .join("");

  skillToolsElement.innerHTML = hardSkills;
}

function updateLanguage(profileData) {
  const languagesElement = document.getElementById("profile.languages");
  const languages = profileData.languages
    .map((laguage) => `<li>${laguage}</li>`)
    .join("");

  languagesElement.innerHTML = languages;
}

function updatePortifolio(profileData) {
  const portifolioElement = document.getElementById("profile.protifolio");
  const projects = profileData.portfolio
    .map((project) => {
      return `
      <li>
        <h3 class="title ${project.github ? 'github' : ''}">${project.name}</h3>
        <a href="${project.url}" target="_blank">${project.url}</a>
      </li>
  `;
    })
    .join("");

  portifolioElement.innerHTML = projects;
}

function updateprofessionalExperience(profileData) {
  const professionalRxperienceElement = document.getElementById("professional.experience");
  const  professionalExperiences = profileData.professionalExperience
    .map((experience) => {
      return `
      <li>
      <h3 class="title">${experience.name}</h3>
      <span class="period">${experience.period}</span>
      <p>
        ${experience.description}
      </p>
    </li>
  `;
    })
    .join("");

  professionalRxperienceElement.innerHTML = professionalExperiences;
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSkillsPersonal(profileData);
  updateHardSkills(profileData);
  updateLanguage(profileData);
  updatePortifolio(profileData)
  updateprofessionalExperience(profileData)
})();
