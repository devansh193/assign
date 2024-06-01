"use client"; 

import { CourseCardButton } from './CourseButton';
import Image from 'next/image';



type Props={
    Title: string,
}
export const CourseCard = ({ Title}:Props) =>{
    return(
        <div className="flex w-full items-center justify-between p-2 shadow-sm border border-gray-300 rounded-lg mt-5">
        <div className="flex items-center justify-center gap-x-2">
          <Image src={'outlined.svg'} alt={'logo'} width={24} height={24} />
          <div className="ml-2">
            <h1 className='text-md font-sans font-medium text-lg'>{Title}</h1>
            <p className='text-sm text-gray-400'>Add item to this module</p>
          </div>
        </div>
       <CourseCardButton id={Title} />
      </div>
    );
};
export default CourseCard;