export const actionTypes = {
    OPEN_DETAILS_PAGE: "OPEN_DETAILS_PAGE"
}

export const open_details_page = (objectDetails) => {
    //pass object config to details page
    return {
        type: actionTypes.OPEN_DETAILS_PAGE,
        objectDetails 
    };
};