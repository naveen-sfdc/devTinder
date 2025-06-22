import e from "express";

const app = e();
const PORT = 7777;

//app.use(e.json());

app.get('', (req, res) => {
    res.send('dashboard test');
})

app.get('/test', (req, res) => {
    console.log('hey im inside');
    res.send('say anything');
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});