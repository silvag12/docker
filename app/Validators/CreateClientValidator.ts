import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    name: schema.string({}, [
      rules.maxLength(100),
      rules.minLength(5),
      
    ]),
    email: schema.string({}, [
      rules.email()
    ]),
    'id-organica': schema.number([
      rules.unsigned(),
      rules.range(1, 1000)
    ]),
    created_at: schema.date({
      format: 'yyyy-MM-dd'
    }, [
      rules.after('today')
    ]),

    merda: schema.array().members(schema.number())
  })


  public messages: CustomMessages = {

    required : 'The {{ field }} is required to create a client',
    'email.email': 'Invalid email provide',
    'id-organica.range': 'The organization id must be between {{options.start}} and {{options.stop}}',
    'create_at': 'The create at data most be in future'
    
  }
}
