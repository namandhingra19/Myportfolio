export const about = {
  line1: `Welcome! I'm Naman Dhingra, a passionate MERN Stack Developer with over 2 years of hands-on experience in crafting robust web applications. Armed with a Bachelor's degree in Computer Science, I specialize in leveraging technologies like React, Node.js, and TypeScript to build scalable and efficient solutions. `,
  line2: `My journey into web development began with a curiosity-driven exploration of programming languages and frameworks, leading me to develop a deep expertise in frontend and backend development. `,
  line3: `With a keen eye for detail and a commitment to staying abreast of the latest industry trends, I thrive on transforming complex ideas into intuitive user experiences. Let's connect and explore how we can bring your ideas to life!`,
};
const skills = [
  {
    title: "ReactJS",
    rating: 6,
  },

  {
    title: "NodeJS",
    rating: 6,
  },

  {
    title: "Javascript",
    rating: 7,
  },
  {
    title: "C++",
    rating: 8,
  },
  {
    title: "C",
    rating: 9,
  },
  {
    title: "Bootstrap",
    rating: 6,
  },
  {
    title: "VScode",
    rating: 7,
  },
  {
    title: "Mongodb",
    rating: 8,
  },
  {
    title: "Typescript",
    rating: 6,
  },
  {
    title: "Nextjs",
    rating: 6,
  },
  {
    title: "SQL",
    rating: 3,
  },
  {
    title: "Git",
    rating: 6,
  },
];
export const projects = [
  {
    name: "Web Applications",
    projects: [
      {
        title: "Books Api App",
        imageLink: "3.png",
        description:
          "A user friendly app which enabales users to search any book around the world with a search query like author name,book name, category. The content of particular book is generated from google books API. This app also shows users the best books in a particular category and new released books.",
        tech: [
          "Javascript",
          "Nodejs",
          "Api Handling",
          "EJS",
          "Bootstrap",
          "Html",
          "CSS",
        ],
        githublink: "https://github.com/namandhingra19/books",
        projectlink: "",
      },
      {
        title: "Books Shopping App",
        imageLink: "2.png",
        description:
          "One stop to manage books categorically, with the options for users to order a book and review the book experience. The book link can be also be linked to google search to buy or rent the book. Users are managed by signing in with their account and sign up if they are new to the website.",
        tech: [
          "Reactjs",
          "Typescript",
          "Nextjs",
          "Mongodb",
          "Bootstrap",
          "Html",
          "CSS",
          "Redux",
        ],
        githublink: "https://github.com/namandhingra19/Books_commerce",
        projectlink: "",
      },
      {
        title: "Beaches App",
        imageLink: "",
        description:
          "This App is used by users to add a new beach stop.User has abiity to add features of the beach,photos,location,photos,reviews etc.Already added beached can be read or get updated with the changes. User can also delete particular beach that is associated to particular user. Users can also review other users’ beaches which are listed on websites.",
        tech: [
          "Nodejs",
          "Javascript",
          "EJS",
          "Mongodb",
          "Bootstrap",
          "Html",
          "CSS",
        ],
        githublink: "https://github.com/namandhingra19/Beaches",
        projectlink: "",
      },
      {
        title: "KUK College Website",
        imageLink: "",
        description:
          "Worked as a backend developer in the college management project. The module worked on includes management of previous year Semester wise question papers, books, exam date sheets. Worked on building the data entry for the website and also the writing content. Majorly on the UI part of the project.",
        tech: [
          "Nodejs",
          "Javascript",
          "EJS",
          "Mongodb",
          "Bootstrap",
          "Html",
          "CSS",
        ],
        githublink: "https://github.com/anuj-saklani2000/eduSCOPE",
        projectlink: "",
      },
      {
        title: "Personal Portfolio",
        imageLink: "4.png",
        description:
          "A website exhibit all the personal projects,personal info in a subtle way.",
        tech: ["Reactjs", "Javascript", "Mongodb", "Bootstrap", "Html", "CSS"],
        githublink: "https://github.com/namandhingra19/Myportfolio",
        projectlink: "",
      },
    ],
  },
  {
    name: "Software Projects",
    projects: [
      {
        title: "Snake Game",
        imageLink: "5.png",
        description:
          "I made this game in my 1st year of college. In this game,user moves the snake with the help of arrow keys. To gain points,user has to eat the food which is placed at a random place",
        tech: ["C/C++"],
        githublink: "https://github.com/namandhingra19/snake-game",
        projectlink: "",
      },
    ],
  },
  {
    name: "Aurdino Projects",
    projects: [
      {
        title: "Digital Panchang(Calender)",
        imageLink: "",
        description: `A project which is made in Aurdino language tells user today's tithi(date),rashi,nakshatra(Hindu Calender).`,
        tech: ["Auridno", "Digital board", "C/C++"],
        githublink: "https://github.com/namandhingra19/Hindupanchang",
        projectlink: "",
      },
    ],
  },
];

export const education = [
  {
    title: "Bachelors in computer Sciences",
    college: "JMIT,affilieated with Kurushetra University",
    points: [
      "Scored 8.5 CGPA",
      "Good rating on various coding platform",
      "Completed more than 150+ questions on Leetcode",
      "3 star rating on Codechef",
    ],
    subjects: [
      "Operating Systems",
      "Data Structures and Algorithms",
      "Computer networks",
      "Java",
      "Object Oriented",
    ],
  },
  {
    title: "Class 11th-12th in Science and Mathematics",
    college: "Mukand lal public School,Affliated with CBSE",
    points: [
      "Scored 91.7 percentile in Class 12th boards",
      "participated in Google Code-in in year 2018 and completed 3 tasks",
    ],
    subjects: ["Physics", "Mathematics", "Chemistry"],
  },
];
export default skills;
