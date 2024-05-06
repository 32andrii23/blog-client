import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/Card"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export default function LoginForm() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
            <div className="w-full max-w-md space-y-4">
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                        <CardDescription>Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <a className="text-sm underline" href="#">
                                    Forgot password?
                                </a>
                            </div>
                            <Input id="password" required type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit">
                            Sign in
                        </Button>
                    </CardFooter>
                </Card>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account?
                    <a className="font-medium underline ml-1" href="#">
                        Register
                    </a>
                </div>
            </div>
        </main>
    )
}