import {readFile, writeFile} from 'fs/promises'
import {join} from 'path'

export default defineEventHandler(
    async(event)=>{
        const joinPath=join(process.cwd(),'server/data/todos.json')
        const id= event.context.params?.id
        const todos=JSON.parse(await readFile(joinPath,'utf-8'))
        const method=event.method

        if(method==='PUT'){
            const body=await readBody(event) // get the body of the request
            const index=todos.findIndex((todo:any)=>todo.id===Number(id))
            if (index===-1){
                throw createError({
                    statusCode:400,
                    statusMessage:'Todo not found'
                })
            }
            todos[index]={...todos[index],...body} // update the todo
            await writeFile(joinPath,JSON.stringify(todos,null,2)) // write the updated todos to the file
            return todos[index] // return the updated todo  
        } 
        if(method==='DELETE'){
            const index=todos.findIndex((todo:any)=>todo.id===Number(id))
            if (index===-1){
                throw createError({
                    statusCode:400,
                    statusMessage:'Todo not found'
                })
            }
            todos.splice(index,1)
            await writeFile(joinPath,JSON.stringify(todos,null,2))
            return { success: true }
        }
    }
)
    