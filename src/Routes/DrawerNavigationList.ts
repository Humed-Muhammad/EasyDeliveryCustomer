import { AuthenticatedStackNavigation as HomeList } from '@Navigation/AuthenticatedSatckNavigation';
import { OrderStackNavigation as Order } from "@Navigation/OrderStackNavigation"
// import OrderList from '@Screen/OrderList';
import Report from '@Screen/Dropoff';
import Profile from '@Screen/Profile';
import { IconOrder, IconHome, IconProfile, IconReport } from "@Components/Atoms/Icons";

export const screenList: Array<Object> = [
    {
        name: "Home",
        component: HomeList,
        title: "Home",
        Icon: IconHome
    },
    {
        name: "My orders",
        component: Order,
        title: "My orders",
        Icon: IconOrder
    },
    {
        name: "Profile",
        component: Profile,
        title: "Profile",
        Icon: IconProfile
    },
    {
        name: "Reports",
        component: Report,
        title: "Reports",
        Icon: IconReport
    },
]


