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
        todos.value.push(todo as TodoItem)
        console.log(todos.value)
    }
    
    const deleteTodo =async (id:number)=>{ 
        await $fetch(`api/todos/${id}`,{
            method:'DELETE',
        })
        todos.value=todos.value.filter((todo)=>todo.id !== id)
    }

    const toggleTodo = async (id:number)=>{
        await $fetch(`api/todos/${id}`,{
            method:'PUT',
            body:{
                completed:!todos.value.find((todo)=>todo.id===id)?.completed
            }
        })
        todos.value=todos.value.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo)
    }

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo
    }
}