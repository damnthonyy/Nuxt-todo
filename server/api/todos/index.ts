import {readFile,writeFile} from 'fs/promises' 
import {join} from 'path'

const joinPath=join(process.cwd(),'server/data/todos.json') // path to the todos.json file

export default defineEventHandler(
    async(event)=>{
        const method = event.method // get the method of the request

        if(method==='GET'){
            const todos=await readFile(joinPath,'utf-8')
            return JSON.parse(todos)
        }

        if(method==='POST'){
            const body=await readBody(event) // get the body of the request
            const data = JSON.parse(await readFile(joinPath, 'utf-8')) // get the data from the todos.json file
            const newTodo = {
                id: Date.now(),
                title: body.title,
                completed: false
            }
            const updatedTodos = [...data, newTodo]
            await writeFile(joinPath, JSON.stringify(updatedTodos, null, 2)) // write the updated todos to the todos.json file
            return newTodo
        }
    }
)