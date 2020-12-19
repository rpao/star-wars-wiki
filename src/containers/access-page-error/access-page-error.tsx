import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import { PageErrorModel } from "../../model/page-error-model";
import './access-page-error.css';

const PageError = (props: PageErrorModel) => {

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

export default PageError