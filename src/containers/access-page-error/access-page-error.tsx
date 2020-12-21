import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import { ErrorModel } from '../../shared/model/error-model';
import './access-page-error.css';

export const PageError = (props: ErrorModel) => {

    const {errorCode, errorMessage} = props;

    return (
        <div>
            <SentimentVeryDissatisfiedOutlinedIcon fontSize={'large'}></SentimentVeryDissatisfiedOutlinedIcon>
            <div className={'error-code'}>
                <span>Error: {errorCode}</span>
            </div>
            <div className={'error-message'}>
                <span>{errorMessage}</span>
            </div>
        </div>
    );
}