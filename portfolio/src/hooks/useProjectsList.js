import { useState, useEffect } from 'react';
import { fetchProjects } from '../api/githubRepos';

export default function useProjectsList(initialItems = []) {
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        fetchProjects(setItems);
    }, []);

    return   {
        items
    }
}