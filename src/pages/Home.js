import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config'

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [searchOption, setSearchOption] =useState('shows');
    
    const isSearchSows = searchOption === 'shows'

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResult(result)
        });
    };

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    };
    
    const onKeyDown = (ev) => {
        if(ev.keyCode === 13){
            onSearch()
        }
    };

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    }

    const renderResult = () => {
        if(result && result.length === 0 ) {
            return <div>no result</div>
        };
        if(result && result.length > 0) {
            return result[0].show 
            ? result.map( (item)=> <div key={item.show.id}> {item.show.name} </div> )
            : result.map( (item)=> <div key={item.person.id}> {item.person.name} </div> )
        };
        return null;
    };

    return (
        <MainPageLayout>
            <input type="search" placeholder="searching here" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            
            <div>
                <label htmlFor="shows-search">
                    shows
                    <input type="radio" id="shows-search" value="shows" checked={isSearchSows} onChange={onRadioChange} />
                </label>
                {" "}
                <label htmlFor="actors-search">
                    actors
                    <input type="radio" id="actors-search" value="people" checked={!isSearchSows} onChange={onRadioChange} />
                </label>
            </div>

            <button type='button' onClick={onSearch} >Search</button>
            {renderResult()}
        </MainPageLayout>
    );
};

export default Home;