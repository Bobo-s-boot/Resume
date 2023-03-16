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

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
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
