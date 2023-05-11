export default function Work( {title, description, name, link, time}) {
    return (
        <ul className="jobs_list section_width">
        <li className="job">
            <p>
                <span className="bold">Employer: </span>
                <a className="links" href={link} rel="noreferrer noopener" target="_blank">{name}</a>
            </p>
            <p>
                <span className="bold">Employment period: </span>{time}
            </p>
            <p>
                <span className="bold">Job title: </span>
                {title}
            </p>
            <p>
                <span className="bold">Project/Role description: </span>
                {description}
            </p>
        </li>
    </ul>
    )
}