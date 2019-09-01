export class User {
    constructor(
       
        public login:string,
        public followers:any,
        public avatar_url:any,
        public following:number,
        public name:string,
        public location:string,
        public created_at:Date,
        public html_url:any
    )
    {}
}
