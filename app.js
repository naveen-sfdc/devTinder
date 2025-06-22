import e from "express";

const app = e();
const PORT = 7777;

app.listen(() => {
    console.log(`server is running on PORT ${PORT}`);
})