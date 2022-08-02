var MongoClient=require('mongodb').MongoClient;

var url='mongodb+srv://Laman:rBd8q8Tq2iwWIUZC@cluster0.m9czfiv.mongodb.net/UserDB?retryWrites=true&w=majority'

MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log(err);
    }
    var dbo=db.db("UserDB");

    //InsertMany
    
    
    // dbo.collection('users').insertMany(myobj,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(`${res.insertedCount} users inserted...!`);
    //     db.close();
    // })
    
    // ***************************************************

    //FindOne

    //    dbo.collection('users').findOne({},(err,res)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log(res);
    //         db.close();
    //    })

    // ***************************************************

    //Find

    // dbo.collection('users').find({}).toArray((err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //Query

    // var query={address: "Apple st 652" }
    // dbo.collection('users').find(query).toArray((err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //Query /^A/

    // var query={address: /^A/ }
    // dbo.collection('users').find(query).toArray((err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //Sort

    // var mysort={address:1}
    // dbo.collection('users').find().sort(mysort).toArray((err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })


    // ***************************************************

    //deleteOne

    // var myquery={name:"Hannah"}
    // dbo.collection('users').deleteOne(myquery,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //deleteMany

    // var myquery={address: /^0/}
    // dbo.collection('users').deleteMany(myquery,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //UpdateOne

    // var myquery={address: "Apple st 652" }
    // var newvalues={ $set:{name:"Laman",address:"Azerbaycan"} };
    // dbo.collection('users').updateOne(myquery,newvalues,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })
    

    // ***************************************************

    //UpdateMany

    // var myquery={address:/^O/}
    // var newvalues={$set:{name:"Laman"}}
    // dbo.collection('users').updateMany(myquery,newvalues,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //Limit

    // dbo.collection('users').find().limit(4).toArray((err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    //     db.close();
    // })

    // ***************************************************

    //Drop
    // dbo.dropCollection('users',(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("Collection droped...");
    //     db.close();
    // })
})