import { getRepository } from 'typeorm';
import { ProdutorRural } from '../models/ProdutorRural';
import { IProdutorRural } from '../dto/IProdutorRural'
import { totalAreaIsValid, cpfCnpjIsValid } from '../helpers';

export class ProdutorRuralService {
  
  public static async store(produtorRural : IProdutorRural ) {

    if(cpfCnpjIsValid(produtorRural.cpf_cnpj)){

      if(totalAreaIsValid(produtorRural)){ 
        const repository = getRepository(ProdutorRural);
        const novoProdutor = repository.create(produtorRural);
        
        const resultado = await repository.save(novoProdutor);
        
        return resultado;
      }
      else throw new Error("Area invalida");
    }
    else throw new Error("CPF ou CNPJ invalido");
    
  };

  public static async get() {
    const repository = getRepository(ProdutorRural);
    const produtores = await repository.find();
    
    return produtores;
  }

  public static async show(id : number) {
    const repository = getRepository(ProdutorRural);
    const produtor = await repository.findOneBy({id : id});

    if (produtor) return produtor;
    else throw new Error("Produtor nao encontrado")
  }

  public static async update(produtorRural : IProdutorRural, id : number ) {
    const repository = getRepository(ProdutorRural);
    const produtor = await repository.findOneBy({id : id});
    
    
    if(produtor){
        if(totalAreaIsValid(produtorRural)){ 
          repository.merge(produtor, produtorRural);
          const resultado = await repository.save(produtor);
          
          return resultado;
        }
        else throw new Error("Area invalida");
    }
    else throw new Error("Produtor nao encontrado");
    
  };

  public static async destroy(id : number) {
    const repository = getRepository(ProdutorRural);
    const resultado = await repository.delete(id);
    
    if(resultado.affected == 1) return id;
    else throw new Error("Produtor nao encontrado");
  }
}

