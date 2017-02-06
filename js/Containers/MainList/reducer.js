//TYPES : alias, nested, lookup
import React from 'react';
import { View } from 'react-native';
import {actionTypes} from './actions';

const defaultListItems = {
    //let keys be the API names
    Account: {
        APIName: "Account",
        displayName: "Account",
        pluralName: "Accounts",
        nameField: 'Name',
        details: ['Owner', 'Name', 'AccountNumber', 'Type', 'Industry', 'Rating', 'AnnualRevenue', 'Phone', 'Website'],
        icon: {
            iconSet: "FA",
            name: "th-list",
            color:"red"
        }
        //TODO: Figure out a way to do nested fields (eg shipping address)
        //Distinguish nested fields from lookup fields - target object is different
    },
    Contact: {
        APIName: "Contact",
        displayName: "Contact",
        pluralName: "Contacts",
        nameField: 'Name',
        details: ['Owner', 'Name', 'Title', 'Department', 'Phone', 'Email'],
        //TODO: AccountName (lookup to account)
        icon: {
            iconSet: "FA",
            name: "address-card-o",
            color: "purple"
        }
    },
    Opportunity: {
        APIName: "Opportunity",
        displayName: "Opportunity",
        pluralName: "Opportunities",
        nameField: 'Name',
        details: ['Owner', 'Name', 'Type', 'StageName', 'Amount', 'Probability', 'CloseDate'],
        //TODO: AccountName
        icon: {
            iconSet: "MC",
            name: "crown",
            color: "orange"
        }
    }
}

const initialState = {
    listItems: defaultListItems 
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
