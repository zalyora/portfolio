import Project from './Project';

export function ProjectsList({items}) {
    return (
        <section className="projects">
            <div className="section_title_block">
                <h2 className="section_title">My Projects</h2>
            </div>
            <ul className="projects_list section_width">
                {items.map(item => (
                    <Project key={item.id} {...item}/>
                ))}
            </ul>
        </section>
    )
}