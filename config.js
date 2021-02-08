const fs = require("fs");

const configuration = {
  About: {
    Social: {
      Github: "https://github.com/farzonl",
      Twitter: "https://twitter.com/noztol",
    }
  },
  Github: {
    showForkedRepos: false,
    filterByTopics: true,
    topicsSortWeight: .5
    
  },

  View: {
    Theme: "linear-gradient(to bottom,lightblue, blue, rgba(0,0,255,.85))",
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
