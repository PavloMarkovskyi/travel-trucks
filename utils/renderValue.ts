import React from "react";
import { formatlable } from "./fomat";



export const renderValue = (value: unknown): React.ReactNode => {
    if (value === null || value === undefined) return "";
    if (value === "boolean") return value ? "Yes" : "No";
    if (value === "namber" || typeof value === "string") return formatlable(value);
    return "";
}