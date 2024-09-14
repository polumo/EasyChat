import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { KeyRound, Mail, User } from 'lucide-react'
import AuthContainer from './AuthContainer'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  nickname: z.string().min(1, '请填写昵称'),
  email: z.string().email('请输入有效的电子邮箱地址').min(1, '请填写邮箱地址'),
  password: z.string().min(6, '密码需要大于6位'),
  confirmPassword: z.string().min(6, '密码需要大于6位'),
}).refine(data => data.password === data.confirmPassword, { message: '两次输入密码不一致', path: ['confirmPassword'] })

type FormSchema = z.infer<typeof formSchema>

function Register() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (values: FormSchema) => {
    // TODO: do something
    console.log(values)
  }

  return (
    <AuthContainer title="注册">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input Icon={User} type="text" placeholder="昵称" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input Icon={Mail} type="email" placeholder="邮箱" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input Icon={KeyRound} type="password" placeholder="密码" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input Icon={KeyRound} type="password" placeholder="重复密码" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">注册</Button>
        </form>
      </Form>
      <div className="text-center">
        已经有账号？
        <Link to="/login" className="text-link">立即登录</Link>
      </div>
    </AuthContainer>
  )
}

export default Register
