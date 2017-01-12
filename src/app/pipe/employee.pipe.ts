import { PipeTransform, Pipe } from '@angular/core';

import { Employee } from '../model/employee';

@Pipe({
    name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

    transform(emps: any[], filterBy: string, catId: number)
    : any[] {
        //tenery
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        let empTmp : any[] = emps;

        //logic, if null -> k co fiter
        //if MUI -> filter
        if(filterBy){
            //get name ->lowercase
            //reative
            empTmp = emps.filter(
                (emp: any) => {
                    let name = emp.Emp_Name.toLocaleLowerCase();
                    if(name.indexOf(filterBy) > -1){
                        return true;
                    }
                    return false; //fast return
                }
            );
        }
        
        //filter by catId
        //productsTmp = (catId > 0) ? productsTmp.filter(product => product.catId == catId) : productsTmp ;
        return empTmp;
    }
}