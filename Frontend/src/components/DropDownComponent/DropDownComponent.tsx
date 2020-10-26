import React, { useState }  from 'react';
import styled from 'styled-components';
import Select from 'react-select';
//import { ValueType, OptionType } from "react-select";

const options = [
    { value: 'Arsenal', label: 'Arsenal' },
    { value: 'Aston Ville', label: 'Aston Villa' },
    { value: 'Brighton', label: 'Brighton' },
    { value: 'Burnley', label: 'Burnley' },
    { value: 'Chelsea', label: 'Chelsea' },
    { value: 'Crystal Palace', label: 'Crystal Palace' },
    { value: 'Everton', label: 'Everton' },
    { value: 'Fulham', label: 'Fulham' },
    { value: 'Leeds United', label: 'Leeds United' },
    { value: 'Leicester', label: 'Leicester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Manchester City', label: 'Manchester City' },
    { value: 'Manchester United', label: 'Manchester United' },
    { value: 'Newcastle', label: 'Newcastle' },
    { value: 'Sheffield United', label: 'Sheffield United' },
    { value: 'Southampton', label: 'Southampton' },
    { value: 'Tottenham', label: 'Totteham' },
    { value: 'West Bromwich', label: 'West Bromwich'},
    { value: 'West Ham', label: 'West Ham' },
    { value: 'Wolverhampton', label: 'Wolverhampton' },

];

export const DropDownComponent: React.FC = () => {
    const [team, setTeam] = useState(options[0])
    const handleChange = (selectedOption: any) => {
        setTeam(selectedOption.value);
        console.log(selectedOption);
    };

    return (
        <>
            <Select className="select"
                    //defaultValue = {options[0]}
                    classNamePrefix="react-select"
                    options={options}
                    placeholder={'Choose a team'}
                    onChange={handleChange}
            />
        </>
    )
};



