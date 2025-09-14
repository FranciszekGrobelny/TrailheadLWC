import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { api, LightningElement, wire } from 'lwc';

export default class WireGetRecordProperty extends LightningElement {
@api recordId;
@wire (getRecord, {
    recordId: '$recordId',
    fields: 'Account.Name'}) account;

get accountName() {
    return getFieldValue(this.account.data, 'Account.Name');
}
}