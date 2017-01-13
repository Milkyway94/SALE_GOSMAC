import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    loaibodau = function(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
     }
    transform(products: any[], keywork: string)
    : any[] {
        //tenery
        keywork = keywork ? this.loaibodau(keywork) : null;

        let productsTmp : any[] = products;

        //logic, if null -> k co fiter
        //if MUI -> filter
        if(keywork){
            //get name ->lowercase
            //reative
            productsTmp = products.filter(
                (product: any) => {
                    let name = this.loaibodau(product.P_Name);
                    if(name.indexOf(keywork) > -1){
                        return true;
                    }
                    return false; //fast return
                }
            );
        }
        return productsTmp;
    }
}