import { SearchParamsCardsType } from 'api/types/cards/GetCurrentCardRequestType/SearchParamsCardsType';

export type CardsType = {
    answer: string;
    question: string;
    cardsPack_id: string;
    grade: number;
    shots: number;
    user_id: string;
    created: string;
    updated: string;
    _id: string;
    comments: string;
    type: string;
    rating: number;
    more_id: string;
    __v: number;
};

export type GetCardsType = {
    cards: CardsType[];
    searchParams: SearchParamsCardsType;

    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
};
