export interface IProdutorRural {
    id?: number
    cpf_cnpj: string
    nome: string
    nome_fazenda: string
    cidade: string
    estado: string
    area_total: number
    area_agricultavel: number
    area_vegetacao: number
    culturas_plantadas: string[]
};