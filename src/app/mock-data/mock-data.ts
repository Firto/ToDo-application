import { ToDo } from "../models/todo.model"

export const TODOS : ToDo[] = [
    {
        id: 0,
        category: "House",
        deadline: new Date("20/09/2019"),
        description: "",
        priority: 1,
        status: false,
        tags: [
            "House",
            "Other"
        ]
    },
    {
        id: 1,
        category: "Homework",
        deadline: new Date("20/09/2019"),
        description: "Do my homework",
        priority: 1,
        status: false,
        tags: [
            "School",
            "Homework"
        ]
    }
];