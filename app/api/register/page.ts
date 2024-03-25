// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log(req);
//   try {
//     if (req.method === "POST") {
//       console.log(req.body);
//       // Extract data from request body
//       const { username, email, password } = await req.body;
//       res.status(200).json({ username, email });
//     } else {
//       res.status(405).json({ message: "Method Not Allowed" });
//     }
//   } catch (error) {
//     console.error("Error processing request:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }
