import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import {loadSlim} from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#1F1F20",
                //     },
                // },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#fff"
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 1,
                            color: "#7572D5"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: false,
                        distance: 500,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "bottom",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 4,
                            duration: 0.3,
                            opacity: 1,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }}
        />
    );
};

