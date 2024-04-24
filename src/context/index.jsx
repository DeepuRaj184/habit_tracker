import React, { useEffect } from "react";
import { createContext ,useState } from "react";

// Creating a context to manage habit-related data
export const habitContext = createContext();

// Myhabit component definition
export const Myhabit = ({children}) => {
    // State variables for managing habits, habit to collect, and count
    const [habits,sethabit] = useState([]);
    const [habitToCollect,sethabitToCollect] = useState("");
    const [count,setCount] = useState(0);

    // Function to update habits state
    const habitClick = (e) => {
        sethabit(e);
    };

    // Function to delete a habit from the list
    const habitDelete = (index) => {
        const updatedHabits = habits.filter((_,i) => i !== index);
        habitClick(updatedHabits);
    };

    // Function to set the habit to collect for viewing its details
    const collecthabit = (i) => {
        const yourHabit = habits[i];
        sethabitToCollect(yourHabit);
    };

    // Function to update the count state
    const handelCount = (e) => {
        setCount(e);
    };

    // Effect to save habits to local storage whenever habits state changes
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    // Effect to retrieve habits from local storage when the component mounts
    useEffect(() => {
        const storedHabits = JSON.parse(localStorage.getItem("habits"));
        if (storedHabits) {
            sethabit(storedHabits);
        }
    }, []);

    // Rendering the Myhabit component
    return (
        <>
            {/* Providing the habit context with its values to children */}
            <habitContext.Provider value={{ habits, habitClick, habitDelete, collecthabit, habitToCollect, handelCount, count }}>
                {children}
            </habitContext.Provider>
        </>
    );
}
