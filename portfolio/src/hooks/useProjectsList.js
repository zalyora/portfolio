import { useState, useEffect } from 'react';
import { FetchProjects } from '../api/githubRepos';

export default function useProjectsList(initialItems = []) {
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        FetchProjects(setItems);
    }, []);

    return   {
        items
    }
}