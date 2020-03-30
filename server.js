const express= require('express');

const mongoose=require('mongoose');

const cors=require('cors');

const bodyparser=require('body-parser')

const  helmet = require('helmet')

const compression= require('compression')

const RiceIncome = require('./models/riceincome')

const RiceExpense=require('./models/riceexpense')

const SugarIncome = require('./models/sugarincome')

const SugarExpense=require('./models/sugarexpense')

const BalerExpense=require('./models/balerexpense')

const BalerRentIncome=require('./models/balerrentincome')

const BalerSellIncome = require('./models/balersellincome')


const app=express();

const corsObj={
    orgin:"http://localost:4200",
    optionSuccessStatus:200
}

app.use(cors(corsObj));

app.use(helmet());

app.use(compression());
 
app.use(bodyparser.json());

const cloudDbUri="mongodb+srv://project8:Password*123@project8-ur9cs.mongodb.net/Farm_Machinery_Details?retryWrites=true&w=majority"
// const localDbUri='mongodb://localhost:4200/database'
mongoose.connect(cloudDbUri,{useNewUrlParser: true ,useFindAndModify:true,useUnifiedTopology: true}).then(()=>{
    console.log("Mongodb connected");
})
 .catch(err=>console.log(err))
//  mongoose.connect(localDbUri, { useNewUrlParser: true })

// const connection=mongoose.connection;

// connection.once('open',()=>{      
//    console.log("Mongodb connected");
// })
 
app.get('/riceincomedetails',(req,res)=>{  
    console.log(req.body)     
    RiceIncome.find((err,income)=>{
        if(err)        
          console.log(err)   
        else
         res.json(income)
    })
})

app.get('/riceincomedetails/:id',(req,res)=>{
    RiceIncome.findById(req.params.id,(err,income)=>{
        if(err)        
        console.log(err)
      else
       res.json(income)

    })
})

app.post('/riceincomedetails/add',(req,res)=>{
    console.log(req.body)           
    let income = new  RiceIncome(req.body)
    income.save()
        .then(income=>{
            res.status(200).json({'income':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send(err)
        })
})

app.post('/riceincomeupdate/:id',async (req,res)=>{
    console.log(req.body,req.params.id)
    let income = await  RiceIncome.findByIdAndUpdate(req.params.id,{
        
              date:req.body.date,
              customerPlace:req.body.customerPlace,
              customerName:req.body.customerName,
              billNumber:req.body.billNumber,
              numberOfacre:req.body.numberOfacre,
              costPerAcre:req.body.costPerAcre,
              totalAmount:req.body.totalAmount,
              advance:req.body.advance,
              balance:req.body.balance,
              amountGiven:req.body.amountGiven
        
    }  ,{new:true})
    income.save().then(res=>res.send(income,"updated")).catch(err=>res.send(err))

})


app.get('/riceincomedetails/delete/:id',(req,res)=>{
    RiceIncome.findByIdAndRemove({_id:req.params.id},(err,income)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})

app.get('/riceexpensedetails',(req,res)=>{
    RiceExpense.find((err,expense)=>{
        if(err)
          console.log(err)
        else
         res.send(expense)
    })
})

app.get('/riceexpensedetails/:id',(req,res)=>{
    RiceExpense.findById(req.params.id,(err,expense)=>{
        if(err)        
        console.log(err)
      else
       res.json(expense)

    })            
})

app.post('/riceexpensedetails/add',(req,res)=>{
    console.log(req.body)           
    let expense = new  RiceExpense(req.body)
    expense.save()
        .then(expense=>{
            res.status(200).json({'expense':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send("Failed to create")
        })
})

app.post('/riceexpenseupdate/:id', async (req,res)=>{

        console.log(req.body,req.params.id)
        let expense = await  RiceExpense.findByIdAndUpdate(req.params.id,{
            
                  driverName:req.body.driverName,
                  managerName:req.body.managerName,
                  date:req.body.date,
                  petrol:req.body.petrol,
                  diesel:req.body.diesel,
                  service:req.body.service,
                  spare:req.body.spare,
                  driverSalary:req.body.driverSalary,
                  managerSalary:req.body.managerSalary,
                  foodCost:req.body.foodCost,
                  totalAmount:req.body.totalAmount
            
        }  ,{new:true})
         await expense.save().then(expense=>res.status(200).send(expense)).catch(err=>res.status(400).send(err))
    
    })


app.get('/riceexpensedetails/delete/:id',(req,res)=>{
    RiceExpense.findByIdAndRemove({_id:req.params.id},(err,expense)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})




// SUGAR TRANSPLANTER ENDPOINTS

app.get('/sugarincomedetails',(req,res)=>{  
    console.log(req.body)     
    SugarIncome.find((err,income)=>{
        if(err)        
          console.log(err)   
        else
         res.json(income)
    })
})

app.get('/sugarincomedetails/:id',(req,res)=>{
    SugarIncome.findById(req.params.id,(err,income)=>{
        if(err)        
        console.log(err)
      else
       res.json(income)

    })
})

app.post('/sugarincomedetails/add',(req,res)=>{
    console.log(req.body)           
    let income = new  SugarIncome(req.body)
    income.save()
        .then(income=>{
            res.status(200).json({'income':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send("Failed to create")
        })
})


app.post('/sugarincomeupdate/:id',async (req,res)=>{
    

        console.log(req.body,req.params.id)
        let income = await  SugarIncome.findByIdAndUpdate(req.params.id,{
            

            date:req.body.date,
            customerPlace:req.body.customerPlace,
            customerName:req.body.customerName,
            advance:req.body.advance,
            balance:req.body.balance,
            amountGiven:req.body.amountGiven,
                  ryotNumber:req.body.ryotNumber,
                  plotNumber:req.body.plotNumber,
                  costPerTon:req.body.costPerTon,
                  totalTons:req.body.totalTons,
                  amount:req.body.amount,
                  
            
        }  ,{new:true})
         await income.save().then(income=>res.status(200).send(income)).catch(err=>res.status(400).send(err))
    
    })


app.get('/sugarincomedetails/delete/:id',(req,res)=>{
    SugarIncome.findByIdAndRemove({_id:req.params.id},(err,income)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})

app.get('/sugarexpensedetails',(req,res)=>{
    SugarExpense.find((err,expense)=>{
        if(err)
          console.log(err)
        else
         res.send(expense)
    })
})

app.get('/sugarexpensedetails/:id',(req,res)=>{
    SugarExpense.findById(req.params.id,(err,expense)=>{
        if(err)        
        console.log(err)
      else
       res.json(expense)

    })            
})

app.post('/sugarexpensedetails/add',(req,res)=>{
    console.log(req.body)           
    let expense = new  SugarExpense(req.body)
    expense.save()
        .then(expense=>{
            res.status(200).json({'expense':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send("Failed to create")
        })
})

app.post('/sugarexpenseupdate/:id', async(req,res)=>{
    console.log(req.body,req.params.id)
    let expense = await  SugarExpense.findByIdAndUpdate(req.params.id,{
        
              driverName:req.body.driverName,
              managerName:req.body.managerName,
              date:req.body.date,
              petrol:req.body.petrol,
              diesel:req.body.diesel,
              service:req.body.service,
              spare:req.body.spare,
              driverSalary:req.body.driverSalary,
              managerSalary:req.body.managerSalary,
              foodCost:req.body.foodCost,
              totalAmount:req.body.totalAmount
        
    }  ,{new:true})
     await expense.save().then(expense=>res.status(200).send(expense)).catch(err=>res.status(400).send(err))
})

app.get('/sugarexpensedetails/delete/:id',(req,res)=>{
    SugarExpense.findByIdAndRemove({_id:req.params.id},(err,expense)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})



// Baler endpoints

// BALER RENT INCOME ENDPOINTS

app.get('/balerrentincomedetails',(req,res)=>{  
    console.log(req.body)     
    BalerRentIncome.find((err,income)=>{
        if(err)        
          console.log(err)   
        else
         res.json(income)
    })
})

app.get('/balerrentincomedetails/:id',(req,res)=>{
    BalerRentIncome.findById(req.params.id,(err,income)=>{
        if(err)        
        console.log(err)
      else
       res.json(income)

    })
})

app.post('/balerrentincomedetails/add',(req,res)=>{
    console.log(req.body)           
    let income = new  BalerRentIncome(req.body)
    income.save()
        .then(income=>{
            res.status(200).json({'income':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send(err)
        })
})

app.post('/balerrentincomeupdate/:id',async (req,res)=>{
    console.log(req.body,req.params.id)
    let income = await  BalerRentIncome.findByIdAndUpdate(req.params.id,{
        
              date:req.body.date,
              customerPlace:req.body.customerPlace,
              customerName:req.body.customerName,
              billNumber:req.body.billNumber,
              numberOfBales:req.body.numberOfBales,
              rentOfBales:req.body.rentOfBales,
              totalAmount:req.body.totalAmount,
              advance:req.body.advance,
              balance:req.body.balance,
              amountGiven:req.body.amountGiven
        
    }  ,{new:true})
    income.save().then(res=>res.send(income,"updated")).catch(err=>res.send(err))

})


app.get('/balerrentincomedetails/delete/:id',(req,res)=>{
    BalerRentIncome.findByIdAndRemove({_id:req.params.id},(err,income)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})

// BALERSELL INCOME ENDPOINTS


app.get('/balersellincomedetails',(req,res)=>{  
    console.log(req.body)     
    BalerSellIncome.find((err,income)=>{
        if(err)        
          console.log(err)   
        else
         res.json(income)
    })
})

app.get('/balersellincomedetails/:id',(req,res)=>{
    BalerSellIncome.findById(req.params.id,(err,income)=>{
        if(err)        
        console.log(err)
      else
       res.json(income)

    })
})

app.post('/balersellincomedetails/add',(req,res)=>{
    console.log(req.body)           
    let income = new  BalerSellIncome(req.body)
    income.save()
        .then(income=>{
            res.status(200).json({'income':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send(err)
        })
})

app.post('/balersellincomeupdate/:id',async (req,res)=>{
    console.log(req.body,req.params.id)
    let income = await  BalerSellIncome.findByIdAndUpdate(req.params.id,{
        
              date:req.body.date,
              buyerCellNumber:req.body.buyerCellNumber,
              buyerName:req.body.buyerName,
              vehicleNumber:req.body.vehicleNumber,
              numberOfBales:req.body.numberOfBales,
              costPerBales:req.body.costPerBales,
              totalAmount:req.body.totalAmount,
              advance:req.body.advance,
              balance:req.body.balance,
              amountGiven:req.body.amountGiven
        
    }  ,{new:true})
    income.save().then(res=>res.send(income,"updated")).catch(err=>res.send(err))

})


app.get('/balersellincomedetails/delete/:id',(req,res)=>{
    BalerSellIncome.findByIdAndRemove({_id:req.params.id},(err,income)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})

// BALER EXPENSE ENDPOINTS
app.get('/balerexpensedetails',(req,res)=>{
    BalerExpense.find((err,expense)=>{
        if(err)
          console.log(err)
        else
         res.send(expense)
    })
})

app.get('/balerexpensedetails/:id',(req,res)=>{
    BalerExpense.findById(req.params.id,(err,expense)=>{
        if(err)        
        console.log(err)
      else
       res.json(expense)

    })            
})

app.post('/balerexpensedetails/add',(req,res)=>{
    console.log(req.body)           
    let expense = new  BalerExpense(req.body)
    expense.save()
        .then(expense=>{
            res.status(200).json({'expense':'Added Successfully'})
        })
        .catch(err=>{
            res.status(400).send("Failed to create")
        })
})

app.post('/balerexpenseupdate/:id', async(req,res)=>{
    console.log(req.body,req.params.id)
    let expense = await  BalerExpense.findByIdAndUpdate(req.params.id,{
        
              driverName:req.body.driverName,
              managerName:req.body.managerName,
              date:req.body.date,
              petrol:req.body.petrol,
              diesel:req.body.diesel,
              service:req.body.service,
              spare:req.body.spare,
              driverSalary:req.body.driverSalary,
              managerSalary:req.body.managerSalary,
              workerSalary:req.body.workerSalary,
              hayCost:req.body.hayCost,
              juteCost:req.body.juteCost,
              foodCost:req.body.foodCost,
              totalAmount:req.body.totalAmount
        
    }  ,{new:true})
     await expense.save().then(expense=>res.status(200).send(expense)).catch(err=>res.status(400).send(err))
})

app.get('/balerexpensedetails/delete/:id',(req,res)=>{
    BalerExpense.findByIdAndRemove({_id:req.params.id},(err,expense)=>{
        if(err)
            res.json(err)
        else
            res.json("Removed successfully")
    })
})

app.listen(3000,()=>console.log("Running on 3000"));