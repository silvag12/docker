import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateClientValidator from 'App/Validators/CreateClientValidator';

import Database from '@ioc:Adonis/Lucid/Database';

export default class ClientsController {
  public async index({request, response}: HttpContextContract) {

   const araes = await Database
        .query()
        .from('areas')
        .select('*')
        .where((query) => {
          query
          .whereILike('name', 'arEa1')
          .whereNotNull('created_at')
        })
        .andWhere('status', 0)
        
        

    
    return response.status(200).json({'data': araes});
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
