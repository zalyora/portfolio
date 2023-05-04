export function WorkExperience() {
    return (
        <section className="work">
            <h2 className="section_title">Work experience</h2>
            <ul className="jobs_list section_width">
                <li className="job">
                    <p>
                        <span className="bold">Employer: </span>selfemployed
                    </p>
                    <p>
                        <span className="bold">Employment period: </span>2020 - present
                    </p>
                    <p>
                        <span className="bold">Job title: </span>
                        Freelance Translator/Proofreader
                    </p>
                    <p>
                        <span className="bold">Project/Role description: </span>
                        Edit, clarify and proofread from/into foreign languages. Create technical documentaion and texts for web sites, social media.
                    </p>
                </li>
                <li className="job prev_job">
                    <p>
                        <span className="bold">Employer: </span>
                        <a className="links" href="https://blocksoftlab.com/about" rel="noreferrer noopener" target="_blank">BlockSoftLab</a>
                    </p>
                    <p>
                        <span className="bold">Employment period: </span>November 2017 - April 2019
                    </p>
                    <p>
                        <span className="bold">Job title: </span>Office manager
                    </p>
                    <p>
                        <span className="bold">Project/Role description: </span>
                        Organize office work, manage content for social media, provide customer support and communication, create and translate technical documentation.
                    </p>
                </li>
            </ul>
        </section>
    )
}