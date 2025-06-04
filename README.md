This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
This app uses Prisma ORM and Sqlite as a database.

## Screenshots 
![todos](https://github.com/user-attachments/assets/01b51fec-5f92-44f4-bb61-8812baea45ab)





## Running this on your machine
- You have to download this repository
-  unpack it
-  run commend: "npm i" using terminal or powershell
-  You need to feel prisma model with the one included in the repository 
-  then generate the prisma client using commend: prisma migrate 
- after that all probably you are done and you can start the server with commend: "npm run dev"



model Todo {
  id      String  @id @default(uuid())
  title   String
  checked Boolean @default(false)
}

