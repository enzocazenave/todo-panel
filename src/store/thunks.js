import { ref, remove, set } from "firebase/database";
import Swal from "sweetalert2";
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
        dispatch(startLogin());
    }
}

export const startDeleteCategory = (category_id) => {
    return async(dispatch) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const reference = ref(FirebaseDB, `categories/${category_id}`);
                remove(reference);
                dispatch(startLogin());
                      Swal.fire(
                        'Deleted!',
                        'Your category has been deleted.',
                        'success'
                      )
                    }
            })
    }
}

export const startCreateTodo = (todo, category_id) => {
    return async(dispatch) => {
        const unique_id = new Date().getTime();

        const data = {
            text: todo,
            completed: false,
        }

        const reference = ref(FirebaseDB, `categories/${category_id}/todos/${unique_id}`);
        await set(reference, data);
        dispatch(startLogin());
    }
}

export const startDeleteTodo = (category_id, todo_id) => {
    return async(dispatch) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const reference = ref(FirebaseDB, `categories/${category_id}/todos/${todo_id}`);
                remove(reference);
                dispatch(startLogin());
              Swal.fire(
                'Deleted!',
                'Your todo has been deleted.',
                'success'
              )
            }
          })
    }
}