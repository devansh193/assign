"use client"; 
import { ArrowUpFromLine, ChevronDown, CircleChevronDown, Link, Plus, User } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { CourseCardButton } from './CourseButton';
import { EditCard } from './EditCard';
import Image from 'next/image';


type Props={
    Title: string,
}
export const CourseCard = ({ Title}:Props) =>{
    return(
        <div className="flex w-full items-center justify-between p-2 shadow-sm mt-5">
        <div className="flex items-center justify-center gap-x-2">
          <Image src={'outlined.svg'} alt={'logo'} width={24} height={24} />
          <div className="ml-2">
            <h1 className='text-md font-semibold'>{Title}</h1>
            <p className='text-sm text-gray-400'>Add item to this module</p>
          </div>
        </div>
       <CourseCardButton/>
      </div>
    );
};
export default CourseCard;