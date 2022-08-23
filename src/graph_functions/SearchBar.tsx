import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import React, { useState } from 'react';
import { GI_LOCAL_DATA } from '../data/GI_DATA';
import { useGraphData } from '../states/graph_states';
import setIcons from '../styles/graphine-icons';

const getNames = (str:any) => {
    const values:any[] = [];
    str.nodes.map((item:any) => {
        values.push({
            value: item.id,
            label: <div>{"ID: " + item.id}</div>
        })
    })
    console.log(values)
    return (values)
}

const SearchBar: React.FC = () => {
    // const [value, setValue] = useState('');
    const [options, setOptions]:any = useState([]);
    const {selectedData, setSearch, selectedSearch, setData} = useGraphData()
    const onSearch = (searchText: string) => {
        setOptions(
            getNames(GI_LOCAL_DATA)
        );
    };

    const onSelect = (data: string) => {
        console.log('onSelect', data);
        setSearch(data)
        setData(setIcons())
    };

    const onChange = (data: string) => {
        console.log("Here")
        if(data == null || data == ''){
            setData([])
        }
    };

    const onClear = () => {
        console.log("delete")
        setData([])
    };

    return (
        <>
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={onChange}
                onClear={onClear}
                clearIcon = {true}
                filterOption={(inputValue, option:any) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
            >
                <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
        </>
    );
};

export default SearchBar;