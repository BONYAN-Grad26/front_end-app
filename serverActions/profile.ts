"use server"
import { baseUrl } from "@/lib/constants";
import { HealthData, HealthProfileData, ResponseData } from "@/lib/interfaces";
import { cookies } from "next/headers";

export const getUserProfile = async () => { 
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    if(!accessToken) {
        throw new Error("Access token not found");
    }


    try {
        const response = await fetch(`${baseUrl}/health-profile/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            next: { tags: ['profile'] ,revalidate: 60 } // Optional: for caching and revalidation
            
        });
        if (!response.ok) {
            throw new Error(`Error fetching user profile: ${response.statusText}`);
        }

        const dataOfResponse :ResponseData = await response.json();
        return dataOfResponse.data as HealthProfileData | null;

    } catch (error) { 
        console.error("Error fetching user profile:", error);
        throw new Error(`Error fetching user profile: ${error}`);
    }
}