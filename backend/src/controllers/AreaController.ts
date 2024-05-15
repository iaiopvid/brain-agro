import { Request, Response } from 'express';
import { AreaService } from '../services/AreaService';


export class AreaController {

  public static async obterAreaTotal (_req: Request, res: Response) {
    try {
      const areasTotais = await AreaService.areaTotal();

      res.json({
        status: "success",
        response: areasTotais
      });
    } 
    catch (error) { this.handleError(error,res); }
  }

  public static async obterAreaEstado (_req: Request, res: Response) {
    try {
      const areasTotaisEstado = await AreaService.areaTotalPorEstado();

      res.json({
        status: "success",
        response: areasTotaisEstado
      });
    } 
    catch (error) { this.handleError(error,res); }
  }

  public static async obterAreaCultura (_req: Request, res: Response) {
    try {
      const areasTotaisCultura = await AreaService.areaTotalPorCultura();

      res.json({
        status: "success",
        response: areasTotaisCultura
      });
    } 
    catch (error) { this.handleError(error,res); }
  }

  public static async getAreas (_req: Request, res: Response) {
    try {
      const areasTotais = await AreaService.areaTotal();
      const areasTotaisEstado = await AreaService.areaTotalPorEstado();
      const areasTotaisCulturas = await AreaService.areaTotalPorCultura();

      res.json({
        status: "success",
        response: [
          areasTotais,
          areasTotaisEstado,
          areasTotaisCulturas
        ]
      });
    } 
    catch (error) { this.handleError(error,res); }
  }
  
  private static handleError(error : any , res: Response){
    res.status(500).json({ status: "error", message: 'Erro interno!' });
  }
}