import { AuthenticatedStackNavigation as HomeList } from '@Navigation/AuthenticatedSatckNavigation';
import { OrderStackNavigation as Order } from "@Navigation/OrderStackNavigation"
// import OrderList from '@Screen/OrderList';
import Setting from '@Screen/DropoffLocation';
import Profile from '@Screen/Profile';

export const screenList: Array<Object> = [
    {
        name: "Home",
        component: HomeList,
        title: "Home"
    },
    {
        name: "My orders",
        component: Order,
        title: "Your orders"
    },
    {
        name: "Profile",
        component: Profile,
        title: "Profile"
    },
    {
        name: "Setting",
        component: Setting,
        title: "Setting"
    },
]


