const fs = require("fs");

const configuration = {
  About: {
    Social: {
      Github: "https://github.com/farzonl",
      Twitter: "https://twitter.com/noztol",
      LinkedIn: "https://www.linkedin.com/in/farzon-l-b0491a75/",
      Mail: "mailto:jobs@farzon.org",
      Call: "tel:6785878058"
    }
  },
  Github: {
    showForkedRepos: false,
    filterByTopics: true,
    topicsSortWeight: .5
    
  },

  View: {
    Theme: "radial-gradient(circle,lightblue, blue, rgba(0,0,255,.85))",
    Title: "Farzon Dot Org",
    Foreground: { colorName: "blue", intensity: 100 },
    HeaderColor: "rgba(0,0,255,.95)"
  },
  Skills: {
    Languages: [],
    Interests: [
      "Graphics",
      "Security",
      "Computer Photography",
      "Computer Vision",
      "Computer Architecture"
    ],
    Frameworks: ["Node-js", "Dot-Net", "Arduino", "OpenGL", "OpenCV"],
    Tools: ["CMake", "Makefile", "Gradle", "Shell"]
  },
  Blog: "https://blog.farzon.org",
  Resume: "https://farzon.org/files/Resume.pdf",
  AdditionalSections: [
    {
      direction: "row",
      items: [
        {
          description: `I am a computer scientist who graduated from Georgia Tech. 
          During my time at Tech I was a teaching assistant for two courses, 
          one on data structures and another on software design. 
          I also participated in research labs from 2011-2013 and was a finalist
          in a systems engineering design competition, the Intel Cornell Cup in 2012. 
          At Tech I specialized in two threads. Computer Architecture and Artificial Intelligence. 
          I did research in areas as diverse as distributed networks, robotics, molecular simulators, 
          and computation offloading to the cloud. My research also won awards at UROC from 2011-2013 
          and I was a PURA award Recipient in 2012.`,
          type: "textBlock"
        },
        {
          images: [
            {
              label: "The GT Night Rover team",
              imgPath: "https://farzon.org/imgs/gtnightrover.png"
            },
            {
              label: "The 2011 UROC award winning poster",
              imgPath: "https://farzon.org/imgs/micrograph.png"
            },
            {
              label: "The 2012 UROC award winning poster",
              imgPath: "https://farzon.org/imgs/lammps.png"
            },
            {
              label: "The 2013 UROC award winning poster",
              imgPath: "https://farzon.org/imgs/offload.png"
            }
          ],
          type: "caurosel"
        },
        {
          images: [
            {
              label: "MeshMangle",
              imgPath: "https://farzon.org/imgs/intel/MeshMangle.png"
            },
            {
              label: "MeshMangle Plain",
              imgPath: "https://farzon.org/imgs/intel/MeshManglePlain.png"
            },
            {
              label: "MeshMangle With Deformation",
              imgPath: "https://farzon.org/imgs/intel/MeshMangleDeform.png"
            },
            {
              label: "MeshMangle Tessellation Growth",
              imgPath: "https://farzon.org/imgs/intel/MeshMangleGrow.png"
            },
            {
              label: "MeshPaint Plain",
              imgPath: "https://farzon.org/imgs/intel/meshPaintPlain.png"
            },
            {
              label: "MeshPaint Painted",
              imgPath: "https://farzon.org/imgs/intel/meshPaintColored.png"
            },
            {
              label: "Pop the bubbles game",
              imgPath: "https://farzon.org/imgs/intel/bubble.png"
            },
            {
              label: "Camera Textured Cube, Rotated with Hand Gestures",
              imgPath: "https://farzon.org/imgs/intel/cube.png"
            },
            {
              label: "Depth Camera with gesture recognition",
              imgPath: "https://farzon.org/imgs/intel/dephth1.png"
            },
            {
              label: "Color Interpolation & Audio augmentation using hand gestures",
              imgPath: "https://farzon.org/imgs/intel/perceptualGesture.png"
            },
            {
              label: "MIDI piano controls using hand gestures",
              imgPath: "https://farzon.org/imgs/intel/piano.png"
            },
          ],
          type: "caurosel"
        },
        {
          description: `The Intel competition led to two internships with Intel where 
                        I worked on natural user interfaces the first year and on video 
                        compressions algorithms the second year.`,
          type: "textBlock"
        },
        {
          description: `After graduation I joined Microsoft on a then 
          secret project today known as the Edge browser. I worked to improve the performance 
          of their JavaScript compiler while also bringing it into compliance with the ecmascript 6 
          standard. The release of Windows 10 was a monumental achievement for me and my team. 
          For the first time Microsoft shipped a browser that had a faster and more standard 
          compliant JavaScript compiler than Google, Mozilla, and Apple. I then worked on an 
          extensive effort to open source and port our compiler to Linux and OS X. The project can 
          be found on Github at Microsoft/Chakracore.`,
          type: "textBlock"
        },
        {
          description: ` I left Microsoft to work at a Startup (Ionic Security). The company is 
          primarily an endpoint encryption platform. On my first team we focus on file encryption, 
          where I built out an  IRM (Information Rights Management) and analytics strategy for them. 
          I reverse engineered closed source productivity applications to inject code into a process for
          analysis and controlling the flow of data between apps, printers, and users. Later
          I transitioned to work on their sdk team where I was instrumental in the creation of a 
          native java and javascript sdk while also adding many features to their c++ sdk such as 
          an extensible offline key vault api.`,
          type: "textBlock"
        },
        {
          description: ` I am now a Graduate Research engineer in the HParch 
          lab at Gatech where I do research in computer architecture so that I can pursue a masters 
          degree in my new passion computer graphics.`,
          type: "textBlock"
        }
      ],
      type: "contentGrid",
      orientation: "top"
    },
    {
      type: "collection",
      barId: "Papers",
      name: "Techincal Papers",
      description: "Here are some featured technical papers of mine",
      orientation: "bottom",
      item: [
        {
          name: "Analysis of Offloading",
          url: "https://farzon.org/files/papers/CS6250_Final_Paper.pdf",
          description:
            "A testing framework to measure the practicality of offloading ML, AR, CV, & image processing jobs to a remote server.",
          tag: "Networking"
        },
        {
          name: "Edge-spiral morphs between Quads",
          url: "https://farzon.org/files/papers/CS6491_P1.pdf",
          description:
            "A project where we produce a Spiral Edge Morph using the SQUINT method.",
          tag: "Graphics"
        },
        {
          name: "Image warping using a SQUINT grid of tiles",
          url: "https://farzon.org/files/papers/CS6491_P2.pdf",
          description:
            "A project where we developed a quad mesh using SQUINT Maps for texture mapping and image warping.",
          tag: "Graphics"
        },
        {
          name: "Recursive SQUINT on Neville & Bezier Curves",
          url: "https://farzon.org/files/papers/CS6491_P3.pdf",
          description:
            "A project where we recrusively warped SQUINT maps along paths generated using Neville and Bezier curves.",
          tag: "Graphics"
        },
        {
          name: "Lets get Twisty",
          url: "https://farzon.org/files/papers/CS6491_Project_2.pdf",
          description:
            "A project where we explored different techniques for twisting 3D tori.",
          tag: "Graphics"
        },
        {
          name: "Volume displacement through two pillars",
          url: "https://farzon.org/files/papers/CS6491_Project_3.pdf",
          description:
            "To re-distribute mass of the worm both vertically and horizontally.",
          tag: "Graphics"
        }
      ]
    },
    {
      type: "collection",
      barId: "Posters",
      name: "Techincal Posters",
      description: "Here are some featured technical Posters of mine",
      orientation: "bottom",
      item: [
        {
          name: "An Infrastructure for Transient Networks",
          url: "https://farzon.org/files/posters/Micrograph_V3.pdf",
          description:
            "A proximity based p2p network. This poster won awards at UROC.",
          tag: "Networking"
        },
        {
          name: "Profiling and Optimizing Particle Sims Using GPGPUs",
          url: "https://farzon.org/files/posters/LAMMPS_Poster3.pdf",
          description:
            "A project that parallelized n-body problems using both GPUs and MPI. This poster won awards at UROC.",
          tag: "HPC"
        },
        {
          name: "Offloading for Energy Saving Speedups",
          url: "https://farzon.org/files/posters/CloudPoster.pdf",
          description:
            "A project that measured Offloading image processing functions. This poster won awards at UROC.",
          tag: "Networking"
        },
        {
          name: "GT Night Rover (Overview)",
          url: "https://farzon.org/files/posters/GTNR_PURA_v1.1.pdf",
          description:
            "A 2x PURA award winning project with the goal of creating a rover that could survive a multi day night cycle.",
          tag: "Robotics"
        },
        {
          name: "GT Night Rover (Software)",
          url: "https://farzon.org/files/posters/GTNR_SOFTWARE_v2.0.pdf",
          description:
            "A deep dive on the software components of the Intel-Cornell Cup Finalist GT Night Rover project.",
          tag: "Robotics"
        },
        {
          name: "GT Night Rover (Electrial)",
          url: "https://farzon.org/files/posters/GTNR_ELECTRICAL_v2.0.pdf",
          description:
            "A deep dive on the electrical and mechanical components of the Intel-Cornell Cup Finalist GT Night Rover project.",
          tag: "Robotics"
        },
        {
          name: "HW Accelerated Video Game Streaming",
          url: "https://farzon.org/files/posters/MinecraftPoster2013.pdf",
          description:
            "A project I built at Intel that showed realtime video game streaming using Intels Hardware accelerated Media SDK.",
          tag: "Graphics"
        }
      ]
    }
  ]
};

fs.writeFile("config.json", JSON.stringify(configuration), function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
