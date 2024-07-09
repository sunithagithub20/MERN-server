const mongoose=require('mongoose')
describe('MONGODB CONNECTED',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://lakshmisunitha20:qljjjAB3Oih0Ou35@cluster0.5ucyemr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url)
    })
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1);
    })
})
