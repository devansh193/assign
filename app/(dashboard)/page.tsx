"use client";
import CourseCard from "@/components/CourseCard";
import { dataState } from "@/store/atoms/data";
import { DndContext, PointerSensor, UniqueIdentifier, useSensor } from "@dnd-kit/core";
import Image from "next/image";
import { type } from "os";
import { useRecoilValue } from "recoil";

type DNDType ={
  id:UniqueIdentifier;
  title:string;
  items:{
    id:UniqueIdentifier;
    title: string;
  }[]
} 


export default function Home() {
  const data = useRecoilValue(dataState);
  return (

    <div>
      {data.map((course)=>{
        return(
          <CourseCard key={course.name} Title={course.name} />
        )
      })}
    </div>
  );
}
