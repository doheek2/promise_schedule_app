export interface Idata {
  date: string
  labelColor: string
  placeNm: string
  scheduleNm: string
}

export interface IUserData {
  userData:
    | [
        {
          data: Idata[]
          user: string
        }
      ]
    | undefined
}
