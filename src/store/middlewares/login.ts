import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { SignInValuesType } from 'pages';
import { setAuthErrorAC } from 'store/actions';
import { setAppStatusAC } from 'store/actions/app';
import { setIsUserAuthAC } from 'store/actions/auth';
import { AppThunkType } from 'store/types';

export const login =
    (data: SignInValuesType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            await authAPI.login(data);
            dispatch(setIsUserAuthAC(true));
        } catch (e) {
            const err = e as Error | AxiosError;

            if (axios.isAxiosError(err)) {
                const error = err.response?.data
                    ? (err.response.data as { error: string }).error
                    : err.message;

                dispatch(setAuthErrorAC(error));
            } else {
                dispatch(setAuthErrorAC('Some error'));
            }
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
