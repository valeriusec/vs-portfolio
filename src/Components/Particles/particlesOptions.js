import astronaut from "../../assets/astronaut/astronaut_green.svg";

// Hero section tsparticles options

export const heroOptions = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "window",
    events: {
      onDiv: [
          {
            selectors: "#repulse-div",
            enable: true,
            mode: "bounce",
            type: "circle",
          },
          {
            selectors: "#repulse-div",
            enable: true,
            mode: "repulse",
            type: "circle",
          },
          {
            selectors: "#repulse-span",
            enable: true,
            mode: "repulse",
            type: "circle"
          },
          {
            selectors: "#repulse-span",
            enable: true,
            mode: "bounce",
            type: "circle"
          },      
      ],
      
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 300,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        size: 40,
        color: {
            value: "#69c27f"
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#fff",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.4,
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.4,
        maxValue: 0.6
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "character",
      character: [
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf13b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf38b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf3b9"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf41b"],
          weight: "400",
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 25,
        maxValue: 35
      },  
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    links: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: true,
      distance: 150,
      enable: true,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: false,
};



// Astronaut SVG tsparticles options

export const astronautOptions = {
  name: "Polygon Mask",
  autoplay: true,
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 16,
        speed: 3,
      },
    },
  },
  particles: {
    color: {
      value: "#69c27f",
    },
    lineLinked: {
      blink: false,
      color: "#fff",
      consent: false,
      distance: 40,
      enable: true,
      opacity: 0.3,
      width: 0.5,
    },
    move: {
      outMode: "bounce",
      direction: "none",
      enable: true,
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      value: 300,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 2,
        maxValue: 4,
      },
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "#69c27f",
      lineWidth: 0.3,
    },
    move: {
      radius: 10,
    },
    inline: {
      arrangement: "equidistant",
    },
    scale: 3,
    type: "inline",
    url: astronaut,
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
