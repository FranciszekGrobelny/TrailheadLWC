import { LightningElement,api,wire } from 'lwc';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
export default class WireApexProperty extends LightningElement {
    minBirthDate="1990-01-01";
    contacts=[];
     columns = [
        { label: 'Contact Name', fieldName: 'Name', type: 'text' },
        { label: 'Title', fieldName: 'Title', type: 'text' },
        { label: 'Contact Email', fieldName: 'Email', type: 'email' },
        { label: 'Contact Phone', fieldName: 'Phone', type: 'phone' }
    ];
    @wire(getContactsBornAfter,{birthDate: '$minBirthDate'}) metoda(result){
    
        if(result.data){
            this.contacts=result.data;
            console.log('tost data1'+ JSON.stringify(this.contacts)); 
        }else if(result.error){
            console.log('tost data1'+ JSON.stringify(result.error));            
        }
    }
}