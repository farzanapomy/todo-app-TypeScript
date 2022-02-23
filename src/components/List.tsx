import React from 'react';

const List = ({ names, click }: {
    names: string[],
    click: (name: string) => void;
}) => {
    return (
        <div>
            {
                names.map((name, index) => (
                    <li key={index} onClick={() => click(name)}>
                        {name}
                    </li>
                ))
            }
        </div >
    );
};

export default List;