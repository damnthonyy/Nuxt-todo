export const useTodos = () => {
    interface TodoItem {
        id: number;
        title: string;
        completed: boolean;
    }

    const todos = ref<TodoItem[]>([]);

    const addTodo = async (title:string) => {
        const todo = await $fetch('api/todos', {
            method: 'POST',
            body: {
                title:title,    
            }
        })
        todos.value.push(todo as TodoItem) // add the new todo to the todos array
        console.log(todos.value)
    }
    
    const deleteTodo =async (id:number)=>{ 
        await $fetch(`api/todos/${id}`,{
            method:'DELETE',
        })
        todos.value=todos.value.filter((todo)=>todo.id !== id) // delete the todo from the todos array
    }

    const toggleTodo = async (id:number,completed:boolean)=>{
        await $fetch(`api/todos/${id}`,{
            method:'PUT',
            body:{
                completed:!completed // toggle the todo from the todos array
            }
        })
        todos.value=todos.value.map((todo)=>todo.id===id?{...todo,completed:!completed}:todo) // update the todo in the todos array
    }

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo
    }
}