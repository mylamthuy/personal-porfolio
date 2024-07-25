import React from 'react';
import {CalendarDaysIcon, MapPinIcon} from '@heroicons/react/24/solid';

const EducationData = () => {
  return (
    <div className='lg:w-2/3 w-4/5'>
        <div className='grid grid-cols-10'>
            <div className='col-start-1'>
                <div className='bullet-circle w-[18px] h-[18px] mt-2'>
                    <div className='w-5 h-5 bullet-blur'></div>
                </div>
                <div className='block w-[2px] h-[85px] bg-[#2EA8C8]/40 translate-x-[9px] translate-y-[3px]'></div>
            </div>
            <div className='col-start-2 col-span-9 pb-5'>
                <h3 className='font-semibold'>Diploma of Software Development</h3>
                <p className='text-sm'>The Southern Alberta Institute of Technology (SAIT)</p>
                <div className='flex items-center space-x-1 text-sm mb-2'>
                    <MapPinIcon className='h-4 w-4' />
                    <p className='text-sm'>Calgary, Canada</p>
                </div>
                <div className='flex items-center space-x-1 text-sm mb-1'>
                    <CalendarDaysIcon className='h-4 w-4' />
                    <p>January 2023 - Present</p>
                </div>
            </div>

            <div className='col-start-1'>
                <div className='bullet-circle w-[18px] h-[18px] mt-2'>
                    <div className='w-5 h-5 bullet-blur'></div>
                </div>
                <div className='block w-[2px] h-[75px] bg-[#2EA8C8]/40 translate-x-[9px] translate-y-[3px]'></div>
            </div>
            <div className='col-start-2 col-span-9 pb-5'>
                <h3 className='font-semibold'>Bachelor of Corporate Finance</h3>
                <p className='text-sm'>University of Economics HCMC (UEH)</p>
                <div className='flex items-center space-x-1 text-sm mb-2'>
                    <MapPinIcon className='h-4 w-4' />
                    <p className='text-sm'>Ho Chi Minh City, Vietnam</p>
                </div>
                <div className='flex items-center space-x-1 text-sm mb-1'>
                    <CalendarDaysIcon className='h-4 w-4' />
                    <p>2014 - 2018</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default EducationData