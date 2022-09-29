import React from 'react';

const blogs = () => {
    return (
        <div>
            <div>
                <h1>How does react work?</h1>
                <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
            </div>
            <div>
                <h1>what is the difference between props and state?</h1>
                <p>The difference is which component is the data’s owner. Locally owned and updated state is controlled by the component itself. Props are read-only and owned by a parent component. Only when a callback function is passed to the child to cause an upstream change can props be changed. <br /> A prop can be used to transfer a parent component’s state to a child component. Although they both refer to the same variable, only the parent component is able to make changes.</p>
            </div>
        </div>
    );
};

export default blogs;