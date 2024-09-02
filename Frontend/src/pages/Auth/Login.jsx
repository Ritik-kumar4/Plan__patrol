import { login } from "@/Redux/Auth/Action";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch=useDispatch()
    const form=useForm({
        defaultValues:{
            email:"",
            password:"",
        }
    })
    const onSubmit=(data)=>{
        dispatch(login(data))
        console.log("Login project data",data);
    }
  return (
    <div className="space-y-5">
        <h1>Resgister</h1>
         <Form {...form}>
    <form className="space-y-5" 
    onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control}
        name="email"
        render={({field}) => (<FormItem>
            <FormControl>
                <Input {...field}
                type="text"
                className="border w-full border-gray-700 py-5 px-5"
                placeholder="email"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
        )}
        />
      
        <FormField control={form.control}
        name="password"
        render={({field}) => (<FormItem>
            <FormControl>
                <Input {...field}
                type="text"
                className="border w-full border-gray-700 py-5 px-5"
                placeholder="enter password..."/>
            </FormControl>
            <FormMessage/>
        </FormItem>
        )}
        />
       
        
           <Button type="submit" className="w-full mt-5">
                    Login
                    </Button>
       
    </form>
        </Form>
    </div>
  )
}

export default Login