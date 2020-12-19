import { SideNavModel } from '../../model/sidenav-model';
import { classNames } from '../../utils/class-names';
import './sidenav.css'

const SideNav = (props: SideNavModel) => {
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

export default SideNav;