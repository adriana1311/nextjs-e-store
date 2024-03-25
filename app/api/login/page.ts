import { NextApiRequest, NextApiResponse } from "next";

interface LoginData {
  email: string;
  password: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginData;
    console.log(req.body);
    // Replace this with your login logic
    if (email && password) {
      // Assuming authentication is successful
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
