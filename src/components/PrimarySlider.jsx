import React from 'react';

const PrimarySlider = ({ img, title, sub, content, link }) => {

    return (     
        <div className='cursor-grab'>
            <div className='lg:flex lg:h-5/6'>
                <div className='lg:w-[30%] md:w-[30%] w-full'>
                    <img className='w-full' src={process.env.PUBLIC_URL + `/assets/images${img}`} alt={title} />
                </div>
                <div className='flex-col justify-center p-2'>
                    <div className='mb-10'>
                        <h1 className='font-bold text-lg'>{title}</h1>
                        {sub && <span className='text-[#999999] text-sm italic'>{sub}</span>}
                    </div>
                    <div className='shadow-lg p-3 lg:w-3/4'>
                        <div>
                            <p>{content}</p>
                        </div>
                        <div className='p-1'>
                            <a className='text-amber-500' href={link} target="_blank" rel="noopener noreferrer">Read her story {'>>'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>               
    );
}

export default PrimarySlider;
