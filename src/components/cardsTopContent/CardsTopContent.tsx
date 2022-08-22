import React from 'react';

import classes from './CardsTopContent.module.css';
import { CardsTopContentType } from './types';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const CardsTopContent: React.FC<CardsTopContentType> = ({
    isButtonNeed,
    buttonName,
    title,
    children,
    callback,
    style,
}): ReturnComponentType => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper} style={style}>
                <h2 className={classes.title}>{title}</h2>
                <div>
                    {isButtonNeed && (
                        <StyledButton
                            variant="contained"
                            style={{ padding: '8px 28px' }}
                            onClick={callback}
                        >
                            {buttonName}
                        </StyledButton>
                    )}
                </div>
            </div>
            {children && children}
        </div>
    );
};
