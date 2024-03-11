import { LOGIN } from "../../utils/endpoints";

export const login = async (data) => {
    return await fetch(LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
    });
};
