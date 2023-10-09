export interface Miner {
  _id: string,
  firstName: string,
  lastName: string,
  fullName: string,
  typeId: string,
  identification: number,
  imgUrl: string,
  municipality: string
}

export interface FilterMiner {
  typeId?: string | null,
  municipality?: string | null
}