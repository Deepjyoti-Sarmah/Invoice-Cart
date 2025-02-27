import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React from 'react'
import { auth, signIn } from '../utils/auth'
import SubmitButton from '@/components/SubmitButton'
import { redirect } from 'next/navigation'
import { Github } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default async function Login() {
  const session = await auth()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className='flex h-screen w-full items-center justify-center px-4'>
        <Card className='max-w-sm w-full'>
          <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>Choose your preferred login method</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            {/* OAuth Providers */}
            <div className='flex flex-col gap-2'>
              <form
                action={async () => {
                  "use server"
                  await signIn("github", { redirectTo: "/dashboard" });
                }}
              >
                <Button className="w-full flex items-center gap-2" variant="outline" type="submit">
                  <Github size={20} />
                  <span>Login with GitHub</span>
                </Button>
              </form>

              <form
                action={async () => {
                  "use server"
                  await signIn("google", { redirectTo: "/dashboard" });
                }}
              >
                <Button className="w-full flex items-center gap-2" variant="outline" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span>Login with Google</span>
                </Button>
              </form>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Email Form */}
            <form
              action={async (formData) => {
                "use server"
                await signIn("nodemailer", {
                  email: formData.get("email"),
                  redirectTo: "/dashboard"
                });
              }}
              className='flex flex-col gap-y-4'
            >
              <div className='flex flex-col gap-y-2'>
                <Label>Email</Label>
                <Input
                  name='email'
                  type='email'
                  required
                  placeholder='hello@hello.com' />
              </div>
              <SubmitButton text='Login with Email' />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
