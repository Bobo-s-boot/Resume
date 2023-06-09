// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: `Ivan`,
    lastname: `Ivanov`,
  },
  position: `Junior Fullstack JS Developer`,
  salary: `600 $ в місяц`,
  address: `PO street 13/6`,
}

var footer = {
  social: {
    email: {
      text: `ivanov@mail.com`,
      href: `mailto:ivanov@mail.com`,
    },
    phone: {
      text: `+38065453576`,
      htef: `tel:+38065453576`,
    },
    linkedin: {
      htef: `https://www.linkedin.com/in/dmytro-test`,
      text: `LinkedIn`,
    },
  },
  text: {
    salary: `600 $ в місяц`,
    address: `PO street 13/6`,
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (_req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (_req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: `Resume | Summary`,
    },

    header,

    main: {
      summary: {
        title: `Summary`,
        text: `Open-minded for new technologise, with 1 year of experince in development`,
      },

      experience: {
        title: `Other experience`,
        text: `Pet project for parsing sport betting data from different platform`,
      },
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
// module.exports = router

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (_req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: `Resume | Skilss`,
    },

    header,

    main: {
      skills: [
        {
          name: `HTML`,
          point: 10,
          isTop: true,
        },
        {
          name: `Handlbarse`,
          point: 10,
          isTop: true,
        },
        {
          name: `VS Code`,
          point: 10,
          isTop: true,
        },
        {
          name: `Git`,
          point: 10,
          isTop: true,
        },
        {
          name: `Terminal`,
          point: 10,
          isTop: false,
        },
        {
          name: `NPM`,
          point: 10,
          isTop: false,
        },
        {
          name: `React.js`,
          point: 0,
        },
        {
          name: `PHP`,
          point: null,
        },
      ],
      hobbies: [
        {
          name: `WW`,
          isMain: `false`,
        },
        {
          name: `QQ`,
          isMain: `false`,
        },
        {
          name: `LL`,
          isMain: `false`,
        },
        {
          name: `CC`,
          isMain: `true`,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (_req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: `Resume | Education`,
    },

    header,

    main: {
      certificates: [
        {
          name: `PP`,
          id: `45786887776`,
        },
        {
          name: `JJ`,
          id: `487526289`,
        },
        {
          name: `RR`,
          id: `4898234678`,
        },
      ],
      educations: [
        {
          name: `Arizona`,
          point: 10,
          isEnd: true,
        },
        {
          name: `LNVk`,
          point: 10,
          isEnd: true,
        },
        {
          name: `B2B`,
          point: 10,
          isEnd: false,
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (_req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: `big`,

    page: {
      title: `Resume | Work`,
    },

    header,

    main: {
      works: [
        {
          position: `Junior`,
          company: {
            name: `IT Brains`,
            url: `http://it-brains.com.ua`,
          },
          duratione: {
            from: `10.10.2020`,
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: `Resume`,
              url: `http://resume.com.ua`,
              about: `Airbnb competitor`,
              stacks: [
                {
                  name: `React.js`,
                },
                {
                  name: `HTML / CSS`,
                },
                {
                  name: `Nodejs`,
                },
              ],
              awards: [
                {
                  name: `G8`,
                },
                {
                  name: `Preparing SEO optimized`,
                },
              ],
              stacksAmount: `10`,
              awardAmount: `100`,
            },
          ],
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

module.exports = router
