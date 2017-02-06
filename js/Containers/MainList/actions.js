export const actionTypes = {
    VIEW_RECORDS: "VIEW_RECORDS"
}

export const view_records = (APIName, pluralName, nameField) => {
    return {
        type: actionTypes.VIEW_RECORDS,
        APIName,
        pluralName,
        nameField
    };
};

