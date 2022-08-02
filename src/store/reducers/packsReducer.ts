import { PacksStateType } from './types';

import {
    SET_CARD_PACKS,
    SET_CURRENT_PAGE,
    SET_PACKS_TOTAL_COUNT,
    SET_PAGE_COUNT,
    SET_SORT_PACKS,
} from 'store/actions/constants';
import { PacksActionsType } from 'store/actions/types';

const initialState: PacksStateType = {
    cardPacks: [],
    searchParams: {
        packName: '',
        min: 0,
        max: 4,
        sortPacks: '0updated',
        page: 1,
        pageCount: 8,
        user_id: '',
    },
    cardPacksTotalCount: 0,
};

export const packsReducer = (
    state = initialState,
    action: PacksActionsType,
): PacksStateType => {
    switch (action.type) {
        case SET_PAGE_COUNT:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    pageCount: action.payload.pageCount,
                },
            };
        case SET_PACKS_TOTAL_COUNT:
            return { ...state, cardPacksTotalCount: action.payload.packsTotalCount };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                searchParams: { ...state.searchParams, page: action.payload.page },
            };
        case SET_CARD_PACKS:
            return { ...state, cardPacks: action.payload.cardPacks };
        case SET_SORT_PACKS:
            return {
                ...state,
                searchParams: { ...state.searchParams, sortPacks: action.payload.sort },
            };
        default:
            return state;
    }
};
