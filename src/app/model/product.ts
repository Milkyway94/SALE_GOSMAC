export class Product{
    constructor(
        public id:string,
        public name:string,
        public code:string,
        public des: string,
        public detail: string,
        public buyPrice: number,
        public sellPrice: number,
        public quantity:number,
        public cat:string,
        public manu:string,
        public brand: string,
        public image:string,
        public moreImage:string,
        public size:string,
        public color:string,
        public weight:number,
        public length:number,
        public note:string,
        public createBy: string,
        public isDelete: boolean
    ){ } 
}