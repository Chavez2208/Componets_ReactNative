import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101 Screen',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102 Screen',
        icon: 'checkbox-outline',
        component: 'Animation102Screen',
    },
    {
        name: 'Switch',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alertas Nativas',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
    },
    {
        name: 'Text Inputs',
        icon: 'document-text-outline',
        component: 'InputScreen',
    },
    {
        name: 'Pull Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'CustomSectionList',
    },
    {
        name: 'Modal Screen',
        icon: 'albums-outline',
        component: 'ModalScreen',
    },
    {
        name: 'Infinite Scroll',
        icon: 'infinite-outline',
        component: 'InfiniteScrollScreen',
    },
    {
        name: 'Slide Screen',
        icon: 'copy-outline',
        component: 'SlideScreen',
    },
    {
        name: 'Change Theme',
        icon: 'flashlight-outline',
        component: 'ChangeThemeScreen',
    },
];




