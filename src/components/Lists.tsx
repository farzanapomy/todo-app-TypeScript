import React from 'react';
import List from './List';

const Lists = () => {
    const names: string[] = ["Farzana", "Pomy"];
    const click = (name: string) => alert(name);
    return (
        <div>
            <List names={names} click={click}></List>
        </div>
    );
};

export default Lists;