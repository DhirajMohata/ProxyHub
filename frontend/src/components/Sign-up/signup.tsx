/**
 * v0 by Vercel.
 * @see https://v0.dev/t/13kEnDL3sQW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


export default function Component() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Register for an Account</CardTitle>
          <CardDescription>
            Please enter your username, enrollment number, password, and branch to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="username">
              Username
            </Label>
            <Input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
              id="username"
              placeholder="Enter your username"
              required
              type="text"
            />
          </div>
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="enrollment">
              Enrollment Number
            </Label>
            <Input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
              id="enrollment"
              placeholder="Enter your enrollment number"
              required
              type="text"
            />
          </div>
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="password">
              Password
            </Label>
            <Input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
              id="password"
              required
              type="password"
            />
          </div>
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="branch">
              Branch
            </Label>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Branches</SelectLabel>
                    <SelectItem value="ce">CE</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="csbs">CSBS</SelectItem>
                    <SelectItem value="ceai">CE-AI</SelectItem>
                    <SelectItem value="iot">IOT</SelectItem>
                    <SelectItem value="d2d">D2D</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full py-3 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
           <a href="/hub"> Register</a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

