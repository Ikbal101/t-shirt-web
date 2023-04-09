import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
           <h2>Father</h2> 
           <section className='grandpa'>
            <MySelf ring={ring}></MySelf>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Father;