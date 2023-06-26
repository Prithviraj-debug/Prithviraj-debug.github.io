import React from 'react'
import data from '../../data';
import Card from './Card';
import "./Projets.css"

export default function Projects() {

    return (
        <section class="projects" id="projects">
            <div className='shader2' />
            <div class="head">
                <h1>my recent work</h1>
                <p>here are some of my projects.</p>
            </div>

            <div class="cards">
                {
                    data.map(item => {
                        return <Card pic={item.pic} name={item.name} link={item.link} />
                    })
                }
            </div>
        </section>
    )
}
