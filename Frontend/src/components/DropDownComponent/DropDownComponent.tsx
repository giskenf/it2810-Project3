import React  from 'react';
import Select from 'react-select';

interface DropDownProps{
    changeTeam:(a:string)=> void;
}

const options = [
    {value:"",label:'All teams'},
    { value: 'Arsenal', label: 'Arsenal' },
    { value: 'Aston Villa', label: 'Aston Villa' },
    { value: 'Brighton', label: 'Brighton' },
    { value: 'Burnley', label: 'Burnley' },
    { value: 'Chelsea', label: 'Chelsea' },
    { value: 'Crystal Palace', label: 'Crystal Palace' },
    { value: 'Everton', label: 'Everton' },
    { value: 'Fulham', label: 'Fulham' },
    { value: 'Leeds', label: 'Leeds United' },
    { value: 'Leicester', label: 'Leicester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Man City', label: 'Manchester City' },
    { value: 'Man Utd', label: 'Manchester United' },
    { value: 'Newcastle', label: 'Newcastle' },
    { value: 'Sheffield', label: 'Sheffield United' },
    { value: 'Southampton', label: 'Southampton' },
    { value: 'Tottenham', label: 'Totteham' },
    { value: 'West Brom', label: 'West Bromwich'},
    { value: 'West Ham', label: 'West Ham' },
    { value: 'Wolves', label: 'Wolverhampton' },
];
//Funksjonen changeTeam sendes ned som en prop fra SearchComponent
export const DropDownComponent: React.FC<DropDownProps> = (props:DropDownProps) => {
    const handleChange = (selectedOption: any) => {
        props.changeTeam(selectedOption.value);
    };

    return (
        <>
            <Select className="react-select"
                    classNamePrefix="react-select"
                    options={options}
                    placeholder={'Choose a team'}
                    onChange={handleChange}
            />
        </>
    )
};


