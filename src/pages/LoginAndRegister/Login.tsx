import { zodResolver } from '@hookform/resolvers/zod'
import { KeyRound, Loader2, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { AuthContainer } from './AuthContainer'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { loginUser } from '@/api/userApi'
import { setToken } from '@/lib/token'

const formSchema = z.object({
  email: z.string().min(1, '邮箱地址为必填项').email('这不是一个邮箱地址'),
  password: z.string().min(1, '登录密码为必填项'),
})

type FormSchema = z.infer<typeof formSchema>

export function Login({ onLoginSuccess }: any) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (values: FormSchema) => {
    setIsLoading(true)
    try {
      const { data } = await loginUser(values)
      setToken(data)
      onLoginSuccess()
      navigate('/main')
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContainer title="登录">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            登录
          </Button>
        </form>
      </Form>
      <div className="text-center">
        还没有账号？
        <Link to="/register" className="text-link">立即注册</Link>
      </div>
    </AuthContainer>
  )
}
