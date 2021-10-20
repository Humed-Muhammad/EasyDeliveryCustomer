import Home from '@Screen/Home';
import PickupLocation from '@Screen/PickupLocation';
import DropoffLocation from '@Screen/DropoffLocation';

export const screenList: Array<Object> = [
    {
        name: "Create order",
        component: Home,
        title: "Home"
    },
    {
        name: "Pickup",
        component: PickupLocation,
        title: "Pickup Location"
    },
    {
        name: "Drop-off",
        component: DropoffLocation,
        title: "Drop-off Location"
    },
]


