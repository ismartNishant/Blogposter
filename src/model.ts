export interface Inputs {
    text:string;
    name:string
}

export interface handlers{
    handleText: React.FormEventHandler | undefined ;
    handleName: React.FormEventHandler | undefined
}