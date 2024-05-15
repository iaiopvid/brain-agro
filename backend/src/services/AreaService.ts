import { getRepository } from 'typeorm';
import { ProdutorRural } from '../models/ProdutorRural';

export class AreaService {

  public static async areaTotal () {
    
    const quantidadeRegistros = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('COUNT(*) as sum')
      .getRawOne();

    const quantidadeAreaTotal = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('SUM("area_total") as sum')
      .getRawOne();
    
    return {quantidadeRegistros : quantidadeRegistros.sum, quantidadeAreaTotal : quantidadeAreaTotal.sum};
  };

  public static async areaTotalPorEstado () {
    
    const resultadoSoma = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('estado, SUM("area_total") as somaAreaTotalPorEstado')
      .groupBy('estado')
      .getRawMany();

    return resultadoSoma;
  };

  public static async areaTotalPorCultura () {
   
    const resultadoSomaPorCultura = await getRepository(ProdutorRural)
      .createQueryBuilder('produtor')
      .select('unnest("culturas_plantadas") as culturasPlantadas, SUM("area_total") as somaAreaTotalPorCultura')
      .groupBy('culturas_plantadas')
      .getRawMany();

    return resultadoSomaPorCultura;
  };
}

