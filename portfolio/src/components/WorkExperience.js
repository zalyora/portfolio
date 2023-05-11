import React, { useState } from "react";
import Work from './Work';

export function WorkExperience() {
    const [experience] = useState([
        {
            title: 'Trainee frontend developer',
            description: 'Learn HTML, CSS, SCSS, JavaScript, React',
            name: 'Robot-dreams',
            link: 'https://robotdreams.cc/uk',
            time: 'November 2022 - now'
        },
        {
            title: 'Office manager',
            description: 'Organize office work, manage content for social media, provide customer support and communication, create and translate technical documentation.',
            name: 'BlockSoftLab',
            link: 'https://blocksoftlab.com/about',
            time: 'November 2017 - April 2019'
        }
    ]);
    return (
        <section className="work">
            <h2 className="section_title">Work experience</h2>
            <ul className="jobs_list section_width">
                {experience.map((item, index) => (
                    <Work
                        key={index}
                        title={item.title}
                        description={item.description}
                        name={item.name}
                        link={item.link}
                        time={item.time}
                    />
                ))}
            </ul>
        </section>
    )
}