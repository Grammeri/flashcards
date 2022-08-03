import React, { useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';

import s from './Cards.module.css';

import { SearchParamsCardsType } from 'api/types';
import { CardsTopContent } from 'components';
import { CardsList } from 'components/cartdList/CardsList';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCards } from 'store/middlewares';
import { createCard } from 'store/middlewares/cards/createCard';
import { selectCardPacks, selectCards } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { NewCard } from 'utils/newCardCreator/newCardCreator';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { cardsPack_id } = useParams();

    const cards = useTypedSelector(selectCards);
    const packs = useTypedSelector(selectCardPacks);
    const currentPuck = packs.find(pack => pack._id === cardsPack_id);
    const currentPuckName = currentPuck?.name || '';

    const addNewCard = (): void => {
        const newCard = NewCard();

        newCard.cardsPack_id = cardsPack_id || '';

        dispatch(createCard(newCard, { cardsPack_id } as SearchParamsCardsType));
    };

    useEffect(() => {
        dispatch(fetchCards({ cardsPack_id } as SearchParamsCardsType));
    }, []);

    return (
        <div className={s.wrapper}>
            <NavLink to="/packs" className={s.breadcrumbs}>
                <ArrowBackIcon />
                <span>Back to packs List</span>
            </NavLink>
            <CardsTopContent
                title={currentPuckName}
                buttonName="Add new card"
                isButtonNeed
                callback={addNewCard}
            >
                <TextField
                    name="searchCard"
                    variant="outlined"
                    label="Search"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </CardsTopContent>
            <CardsList cards={cards} cardsPack_id={cardsPack_id || ''} />
        </div>
    );
};
