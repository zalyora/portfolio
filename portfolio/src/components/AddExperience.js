import React, { useState } from "react";

export function AddExperience({ addExperience }) {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [time, setTime] = useState('')

    function handleAddExperience(event) {
        event.preventDefault()
        const addNewItem = { title, name, description, link, time };
        addExperience(addNewItem);
        setTitle('');
        setName('');
        setDescription('');
        setLink('');
        setTime('');
    }
    return (
        <form onSubmit={handleAddExperience}>
            <h3>Add new work experience</h3>
            <div className="form-wrapper">
                <label htmlFor="name" className="bold">Name of employer: </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-wrapper">
                <label htmlFor="title" className='bold'>Job title: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            </div>
            <div className="form-wrapper">
                <label htmlFor="description" className='bold'>Project/Role description:</label>
            </div>
            <textarea
                id="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            ></textarea>
            <div className="form-wrapper">
                <label htmlFor="link" className='bold'>Link:</label>
                <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={event => setLink(event.target.value)}
                />
            </div>
            <div className="form-wrapper">
                <label htmlFor="link" className='bold'>Employment period:</label>
                <input
                    type="text"
                    id="time"
                    value={time}
                    onChange={event => setLink(event.target.value)}
                />
            </div>

            <button type="submit" className='form-button'>Add experience</button>
        </form>
    )
};