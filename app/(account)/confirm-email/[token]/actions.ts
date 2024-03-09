"use server"

import {isFieldError, isGeneralError} from "../../../../lib/auth/guards";

export const postMailConfirmationToken = async (token: string): Promise<any> => {
    try {
        const response = await fetch(`${process.env.CC_API_URL}/accounts/confirm-account`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            if (errorResponse.error) {
                if (isGeneralError(errorResponse.error)) {
                    return { error: "An unexpected error occurred." };
                }

                if (isFieldError(errorResponse.error) && errorResponse.error.token) {
                    return { error: errorResponse.error.token.join(' ') };
                }
            }
            return { error: "An unexpected error occurred." };
        }

        return { success: true };
    } catch (error) {
        return { error: "An unexpected error occurred." };
    }
};
