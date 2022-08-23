import create from 'zustand'
import setESIcons from '../styles/elastic';
import setIcons from "../styles/graphine-icons";

export const useGraphData = create((set: Function) => ({
    selectedData: [],
    selectedSearch: '',
    setData: (data:any) => set(({
        selectedData: data
    })),
    setSearch: (search:any) => set(({
        selectedSearch: search
    }))
}))
