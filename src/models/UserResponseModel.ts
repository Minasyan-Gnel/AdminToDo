export interface UserModel {
    id: number,
    name: string,
    email: string,
    photo: string,
    location: string,
    registeredDate: string,
    lastActiveDate: string,
    disabled: boolean,
    [index: string]: any,
}
