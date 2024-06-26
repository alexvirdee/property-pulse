import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export const getSessionUser = async () => {
    try {
        const session = await getServerSession(authOptions);
    
        if (!session || !session.user) {
            return null;
        }

        console.log({
            user: session.user,
            userId: session.user.id
        })
    
        return {
            user: session.user,
            userId: session.user.id
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};