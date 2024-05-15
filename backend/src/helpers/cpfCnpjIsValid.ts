import { cpf, cnpj } from 'cpf-cnpj-validator';

export function cpfCnpjIsValid(noDoc : string) : boolean{
  return cpf.isValid(noDoc) || cnpj.isValid(noDoc)
}