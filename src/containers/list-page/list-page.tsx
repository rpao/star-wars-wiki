import { ListPageModel } from "../../shared/model/list-page-model"

export const ListPage = (props: ListPageModel) => {
    const {controller, page} = props;

    return (
        <div>
            <h1>{controller}</h1>
        </div>
    );
}