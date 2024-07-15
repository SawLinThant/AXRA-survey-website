import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (
      userData.email !== "admin@gmail.com" ||
      userData.password !== "admin123"
    ) {
      toast({
        variant: "destructive",
        title: "Login Fail!",
        description: "incorrect email or password!",
      });
    } else {
      setIsLogin(true);
      navigate("/");
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  return (
    <div
      className="bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(/public/bg-image.jpg)",
      }}
    >
      <div className="h-screen flex items-center justify-center p-4">
        <Card className="w-[500px] py-5">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    name="email"
                    placeholder="email"
                    defaultValue={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    defaultValue={userData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
