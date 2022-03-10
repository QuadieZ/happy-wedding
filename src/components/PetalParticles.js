import Particles from "react-tsparticles"

const particleConfig = {
    "fullScreen": {
        "zIndex": 12
    },
    "particles": {
        "move": {
            "direction": "bottom-right",
            "attract": {
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "enable": true,
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            }
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 30
        },
        "opacity": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 0.1,
                "max": 1
            },
            "animation": {
                "enable": true,
                "speed": 0.5,
                "minimumValue": 0.2
            }
        },
        "rotate": {
            "random": {
                "enable": true
            },
            "animation": {
                "enable": true,
                "speed": 3
            },
            "direction": "random"
        },
        "shape": {
            "options": {
                "image": [
                    {
                        "src": "/petals/petal1.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "/petals/petal2.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "/petals/petal2.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "/petals/petal2.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "/petals/petal2.png",
                        "width": 32,
                        "height": 32
                    },
                ]
            },
            "type": "image"
        },
        "size": {
            "value": 25,
            "animation": {
                "speed": 40,
                "minimumValue": 0.1
            }
        },
    }
}

export const PetalParticles = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
        />
    )
}