import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { IProdutorRural } from '../dto/IProdutorRural'
import { ProdutorRuralService } from '../services/ProdutorRuralService'


export class ProdutorRuralController {
  
  public static async store(req: Request, res: Response) {
    try{
      const produtorRural = req.body as IProdutorRural;
      const produtorRuralCriado =  await ProdutorRuralService.store(produtorRural);

      res.status(201).json({
        status: "success",
        response: produtorRuralCriado
      });
    }
    // catch (error) { ProdutorRuralController.handleError(error,res); }
    catch (error) { ProdutorRuralController.handleError(error, res); }
  };

  public static async get(req: Request, res: Response) {
    try{
      const produtoresRurais  = await ProdutorRuralService.get();

      res.json({
        status: "success",
        response: produtoresRurais
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }

  public static async show(req: Request, res: Response) {
    try{
      const id = Number(req.params.id);
      const produtorRural = await ProdutorRuralService.show(id);

      res.json({
        status: "success",
        response: produtorRural
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }

  public static async update(req: Request, res: Response) {
    try{
      const produtorRural = req.body as IProdutorRural;
      const id = Number(req.params.id);

      const produtorRuralAtualizado =  await ProdutorRuralService.update(produtorRural, id);

      res.json({
        status: "success",
        response: produtorRuralAtualizado
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }

  //Metodo que trata a requisao e response para exclusao do registro do produtor rural a partir do ID
  public static async destroy (req: Request, res: Response) {
    try{
      const id = Number(req.params.id);

      const produtorRuralDeletado =  await ProdutorRuralService.destroy(id);

      res.json({
        status: "success",
        id: produtorRuralDeletado
      });
    }
    catch (error) { ProdutorRuralController.handleError(error,res); }
  }
  
  //Metodo que trata os responses adequados para cada tipo de erro
  private static handleError(error: any , res: Response){
   
    if(error instanceof Error && error.message === "Produtor nao encontrado") res.status(404).json({ status: "error", message: error.message });
    if(error instanceof Error && error.message === "Area invalida") res.status(400).json({ status: "error", message: error.message });
    if(error instanceof Error && error.message === "CPF ou CNPJ invalido") res.status(400).json({ status: "error", message: error.message });
    if (error instanceof QueryFailedError ) res.status(400).json({ status: "error", message: 'CPF ou CNPJ ja cadastrado' });

    if(!res.headersSent) res.status(500).json({ status: "error", message: 'Erro interno!' });
    console.log("Error -> "+error.message)
  }
}