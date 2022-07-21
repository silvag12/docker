import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateClientValidator from 'App/Validators/CreateClientValidator';

export default class ClientsController {
  public async index({request, response}: HttpContextContract) {

   // One away to get query string is bay using request.qs
    const {name, age, sex} = request.qs();

    //Request body get only body request 
    const rb = request.body();
    console.log("Request body ", rb);
    
    // Get body an query string
    const rall = request.all();
    console.log(rall);

    // Also we can use request.params to get all params too
    if (name){
      console.log("Filter by name "+ name);
    }
    if (age) {
      console.log("Filter by age", age)
    }

    if (sex){
      console.log("Filter by sex "+ sex)
    }
    
    return response.status(200).json({'msm': 'Hello World!'});
  }

  public async store({request, response}: HttpContextContract) {

    // validate a form 
    try {

      await request.validate(CreateClientValidator);
    } catch (error) {
     
      return response.badRequest(error.messages)
    }
    

    return response.status(200).json({message: "Client create with success"})
  }

  public async show({request, params}: HttpContextContract) {
    const param = request.params();
    console.log(param)
    return params.id;
  }

  public async update({}: HttpContextContract) {
    return "update Method";
  }

  public async destroy({}: HttpContextContract) {
    return "Destroy Method";
  }
}
