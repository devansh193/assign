import {z} from "zod";



import { CreateModule } from "./schema";
import exp from "constants";

export type InputType  = z.infer<typeof CreateModule>;