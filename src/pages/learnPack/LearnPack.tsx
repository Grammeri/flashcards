import React, { useMemo } from 'react';

import { Navigate } from 'react-router-dom';

import classes from './LearnPack.module.css';

import { AnswerContent, ArrowBackTo } from 'components';
import { useTypedSelector } from 'hooks';
import { selectCards, selectCardsPackName, selectIsCardsFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { getRandomCard, isBase64 } from 'utils';

export const LearnPack = (): ReturnComponentType => {
    const cards = useTypedSelector(selectCards);
    const randomCard = useMemo(() => {
        return getRandomCard(cards);
    }, [cards]);
    const packName = useTypedSelector(selectCardsPackName);
    const isCardsFetched = useTypedSelector(selectIsCardsFetched);

    if (!isCardsFetched) {
        return <Navigate to="/packs" />;
    }

    return (
        <div className={classes.container}>
            <ArrowBackTo />
            <div className={classes.title}>{`Learn '${packName}'`}</div>
            <div className={classes.questionContainer}>
                <div className={classes.subtitle}>
                    <span>Question: </span>
                    {randomCard?.question !== 'no question' && randomCard.question}
                </div>
                {isBase64(randomCard.questionImg) && (
                    <div className={classes.questionCover}>
                        <img src={randomCard.questionImg} alt="question" />
                    </div>
                )}
                <span className={classes.answersAmount}>
                    Amount of answers per question: {randomCard?.shots}
                </span>
                <AnswerContent
                    answer={
                        randomCard?.answer !== 'no answer'
                            ? randomCard.answer
                            : randomCard.answerImg
                    }
                    card_id={randomCard?._id}
                />
            </div>
        </div>
    );
};