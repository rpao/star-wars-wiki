import { SideNavModel } from '../../shared/model/sidenav-model';
import { classNames } from '../../utils/class-names';
import './sidenav.css'

export const SideNav = (props: SideNavModel) => {
    const {left, children} = props;
    const classes = {
        'sidenav': true,
        'left': left,
        'right': !left
    }

    return (
        <div className={classNames(classes)}>
            {children}
        </div>
    );
}