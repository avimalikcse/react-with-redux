import { APPLY_FILTER, CREAT_FILTER, RESET_FILTER } from './action-types';
export const applyFilter = (filterId, filterValue,checked) => {
    return {
        type: APPLY_FILTER,
        payload: { filterId, filterValue,checked }
    };
};

export const createFilter = () => {
    return {
        type: CREAT_FILTER
    };
};

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    };
};