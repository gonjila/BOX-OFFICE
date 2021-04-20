import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config'

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [searchOption, setSearchOption] =useState('shows');
    
    const isSearchShows = searchOption === 'shows'

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
            return result[0].show ? <ShowGrid data={result} /> : <ActorGrid data={result} />
        };
        return null;
    };

    return (
        <MainPageLayout>
            <input type="search" placeholder="searching here" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            
            <div>
                <label htmlFor="shows-search">
                    shows
                    <input type="radio" id="shows-search" value="shows" checked={isSearchShows} onChange={onRadioChange} />
                </label>
                {" "}
                <label htmlFor="actors-search">
                    actors
                    <input type="radio" id="actors-search" value="people" checked={!isSearchShows} onChange={onRadioChange} />
                </label>
            </div>

            <button type='button' onClick={onSearch} >Search</button>
            {renderResult()}
        </MainPageLayout>
    );
};

export default Home;