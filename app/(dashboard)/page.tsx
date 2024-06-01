"use client";
import CourseCard from "@/components/CourseCard";
import { dataState } from "@/store/atoms/data";
import Image from "next/image";
import { useRecoilValue } from "recoil";

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
