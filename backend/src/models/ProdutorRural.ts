import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

//Class Model para o registro de Produtor Rural
@Entity()
export class ProdutorRural {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' ,unique: true })
  cpf_cnpj: string;
 
  @Column()
  nome: string;

  @Column()
  nome_fazenda: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ type: 'numeric' })
  area_total: number;

  @Column({ type: 'numeric' })
  area_agricultavel: number;

  @Column({ type: 'numeric' })
  area_vegetacao: number;

  @Column('varchar', { array: true })
  culturas_plantadas: string[];
}