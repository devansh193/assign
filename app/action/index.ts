import {db} from "@/lib/db";
import { InputType } from "./input";


const handler = async (data: InputType)=>{
    const {title} = data;
    let course;
    try{
        course = await db.module.create({
            data:{
                title,
            }
        });
        return{
            data: course,
        }
    }catch(e){
        return{
            error:"Failed to create module."
        }
    }
};