import { child, get, push, ref } from 'firebase/database';
import { FirebaseDB } from '../firebase/config';

export const getCategories = async() => {
    const dbref = ref(FirebaseDB);
    const result = [];
    
    await get(child(dbref, 'categories')).then((snapshot) => {
        if (snapshot.exists()) {   
            const plainResult = snapshot.val();
            
            const mappedResult = Object.keys(plainResult).map((key) => {
                const pushed_item = {
                    key, 
                    title: plainResult[key]['title'],
                    color: plainResult[key]['color'],
                    todos: plainResult[key]['todos']
                }

                result.push(pushed_item)
            })
        }
    })

    return result;
}