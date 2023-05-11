import React, { useState } from "react";
import Project from '.Project';
// import useProjectsList from "../hooks/useProjectsList";

export function ProjectsList({items}) {
    return (
        <section class="projects">
            <div class="section_title_block">
                <h2 class="section_title">My Projects</h2>
            </div>
            <ul class="projects_list section_width">
                {items.map(item => (
                    <Project {...item}/>
                ))}
            </ul>
        </section>
    )
}