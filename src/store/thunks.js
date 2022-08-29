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