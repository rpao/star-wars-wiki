import { DetailsPageModel } from "../../shared/model/details-page-model";

export const DetailsPage = (props: DetailsPageModel) => {
    const {controller, id} = props;
    return (
        <>
            <div>
                <h1>Details: {controller} - {id} </h1>
            </div>
        </>
    );
}