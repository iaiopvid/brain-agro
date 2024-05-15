export function totalAreaIsValid(data: any) : boolean {
    return Number(data.area_total) >= Number(data.area_agricultavel) + Number(data.area_vegetacao);
}