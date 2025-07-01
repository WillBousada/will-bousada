"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function StarField() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    return (
        <Particles
            id="starfield"
            init={particlesInit}
            options={{
                preset: "stars",
                background: {
                    color: "transparent",
                fullScreen: {
                    enable: true,
                    zIndex: 0,
                },
                particles: {
                    number: {
                        value: 100,
                    },
                    move: {
                        enable: true,
                        speed: 0.1,
                        direction: "top-right",
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                    twinkle: {
                        particles: {
                            enable: true,
                            frequency: 0.01,
                            opacity: 1,
                        },
                    },
                },
            }}
        />
    );
}
