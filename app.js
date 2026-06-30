let infoData = [
    {
        img: './assets/dp.jfif',
        name: "Abdul Aleem Khatri",
        profession: "Web Developer & Instructor",
        disc: "Experienced Web Developer & Instructor specializing in frontend development with expertise in HTML, CSS, Bootstrap, JavaScript, and modern web technologies. Passionate about creating responsive, user-friendly, and visually appealing websites while teaching and mentoring aspiring developers."
    },
    {
        img: './assets/mubashir.enc',
        name: "Mubbashir Ali",
        profession: "Graphics & 3D Designer",
        disc: "Creative Graphics and 3D Designer with 2+ years of experience in designing modern visuals, branding materials, and realistic 3D models. Skilled in Adobe tools, concept creation, and delivering visually impactful designs."
    },
    {
        img: './assets/rizwan.enc',
        name: "Rizwanullah",
        profession: "Nursing Edu & Biology Instructor",
        disc: "Biology and Nursing Instructor specializing in healthcare education, clinical knowledge, and student training. Experienced in delivering clear, practical lessons to build strong medical and biological understanding in students."
    },
    {
        img: './assets/sufyan.jpg',
        name: "Muhammad Sufyan",
        profession: "MERN Stack Developer",
        disc: "MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing fast, scalable, and dynamic web apps with RESTful APIs, responsive frontend interfaces, and efficient backend systems."
    },
    {
        img: './assets/saad.jfif',
        name: "Mohammad Saad Ali",
        profession: "Full Stack Developer",
        disc: "Full Stack Developer experienced in both frontend and backend development. Skilled in HTML, CSS, JavaScript, and backend technologies to build complete, scalable, and dynamic web applications."
    },
    {
        img: './assets/fawad.jpg',
        name: "Fawad",
        profession: "Founder KKA & Head of Bazm-e-Taleem",
        disc: "Education leader and organizational founder focused on academic development, student guidance, and community learning initiatives. Experienced in managing educational programs, leading teams, and promoting knowledge-sharing platforms for students' growth and success."
    }
];

let count = 0;

const img = document.getElementById("image");
const name = document.getElementById("name");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

function userData() {
    img.src = infoData[count].img;
    name.textContent = infoData[count].name;
    profession.textContent = infoData[count].profession;
    description.textContent = infoData[count].disc;
}

function handlePrevious() {
    count--;

    if (count < 0) {
        count = infoData.length - 1;
    }

    userData();
}

function handleNext() {
    count++;

    if (count >= infoData.length) {
        count = 0;
    }

    userData();
}

userData();

document.querySelector(".surprise-btn").addEventListener("click", function () {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
});