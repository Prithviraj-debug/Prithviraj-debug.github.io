import React, { useState } from 'react'
import { useTrail, animated as a } from "react-spring";
import avatar from "./avatar3.svg"
import "./hero.css"

const text = "designer & front-end developer"
const config = { mass: 5, tension: 2000, friction: 400 };

export default function Hero() {

    const [toggle, set] = useState(true);
    const trail = useTrail(1, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 }
    });

    const toggleMode = () => {
        document.querySelector('body').classList.toggle("dark")
        // document.querySelector('.curve1').classList.toggle("curve1Dark")
        document.querySelector('.curve2').classList.toggle("curve2Dark")
        document.querySelector('.links').classList.toggle("linksDark")
        document.querySelector('.sub-heading').classList.toggle("sub-headingDark")
        document.querySelector('.two').classList.toggle("twoDark")
        document.querySelector('.about').classList.toggle("detailsDark")
        document.querySelector('.skills').classList.toggle("skillsDark")
        document.querySelector('.head').classList.toggle("headDark")
        document.querySelector('footer').classList.toggle("footerDark")
        document.querySelector('.socials').classList.toggle("socialDark")
        document.querySelector('form').classList.toggle("formDark")
    }

    return (
        <section className="one">
            <div class="avatar">
                <img src={avatar} alt="" onClick={toggleMode} />
                <div className='shader' />

            </div>

            {trail.map(({ x, height, ...rest }) => (
                <a.div
                    key={text}
                    className="designation"
                    style={{
                        ...rest,
                        transform: x.interpolate(x => `translate3d(0,${x}px,0)`,)
                    }}
                    onClick={() => set(state => !state)}
                >
                    {text}
                </a.div>
            ))}

            <div class="sub-heading">
                i design and code with responsiveness.
            </div>
        </section>
    )
}