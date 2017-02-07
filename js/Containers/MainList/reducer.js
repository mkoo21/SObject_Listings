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
        details: ['Name', 'Type', 'Industry', 'Rating', 'AnnualRevenue', 'Phone', 'Website'],
        lookupFields: {

        },
        icon: {
            iconSet: "FA",
            name: "th-list",
            color:"red"
        }
        //ENHANCEMENT: Figure out a way to do nested fields (eg shipping address)
        //Distinguish nested fields from lookup fields - target object is different
    },
    Contact: {
        APIName: "Contact",
        displayName: "Contact",
        pluralName: "Contacts",
        nameField: 'Name',
        details: ['Name', 'Title', 'Department', 'Phone', 'Email'],
        lookupFields: {
            Owner: {
                nameField: 'Name',
                referenceName: 'Owner'
            },
            'Account Name': {
                nameField: 'Name',
                referenceName: 'Account'
            }
        },
        //TODO: AccountName (lookup to account), owner (lookup to user)
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
        details: ['Name', 'Type', 'StageName', 'Amount', 'Probability', 'CloseDate'],
        lookupFields: {

        },
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
