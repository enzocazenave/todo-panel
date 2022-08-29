import { ref, set } from "firebase/database";
import { FirebaseDB } from "../firebase/config";
import { getCategories } from "../helpers/getCategories";
import { setCategories } from "./appSlice";

export const startLogin = () => {
    return async(dispatch) => {
        const categories = await getCategories();
        
        dispatch(setCategories(categories));
    }
}

export const startCompleteTodo = (category_id, todo_id, true_or_false) => {
    return async(dispatch) => {
        const reference = ref(FirebaseDB, `categories/${category_id}/todos/${todo_id}/completed`);
        await set(reference, true_or_false);
    } 
}

export const startCreateCategory = (name, color) => {
    return async(dispatch) => {
        const unique_id = new Date().getTime();
        const colors = ['purple', 'blue', 'red', 'green'];
        const color_selected = colors[Math.floor(Math.random() * 4)];

        const data = {
            title: name,
            color: color_selected,
            todos: {}
        }

        const reference = ref(FirebaseDB, `categories/${unique_id}`);
        await set(reference, data);
    }
}