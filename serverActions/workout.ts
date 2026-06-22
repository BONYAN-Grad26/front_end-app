'use server'
import { workoutUrl } from "@/lib/constants";
import { PlanData, ResponseData } from "@/lib/interfaces";
import { cookies } from "next/headers";

export const getWeeklyWorkout = async()=> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    if(!accessToken) {
        throw new Error("Access token not found");
    }

    const url = `${workoutUrl}/user/me`;
    const response = await fetch(url,{
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        cache:"force-cache",
        next:{tags:['workout-plans']}

    });
    if(response.status===404) {
        return null
    }
    const responseData = await response.json() as ResponseData ;
    if(!response.ok) {
        throw new Error(responseData.error.message);
    }
    return responseData.data as PlanData;


}