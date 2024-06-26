const Productmodel=require('../model/productmodel');

exports.getproducts=async(req,res,next)=> {

    const products=await Productmodel.find({});

    res.json(
        {
            success:true,
            products
        }
    )
    
}

exports.getsingleproduct=async(req,res,next)=>{
    console.log(req.params.id,'ID')
    const product=await Productmodel.findById(req.params.id);
    res.json({
        success:true,
        product
    })

}
   
   /* try{
        const product=await Productmodel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    
    }catch(error){
      res.json({
            success:false,
            message:'unable to get element by that id',
        })
    
    }

}*/


