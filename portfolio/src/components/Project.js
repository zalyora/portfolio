export default function Project({name, url, descr}) {
    return (
        <ul className="projects_list section_width">            
            <li className="project">
                <a href={url} className="project_title">{name}</a>
                {descr !== null && (
                    <p className="project_descr">{descr}</p>
                )}
            </li>    
            
        </ul>
    )
}