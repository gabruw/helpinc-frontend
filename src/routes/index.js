const ROUTERS = [
    {
        path: '/',
        exact: true,
        component: require('../views/home').default,
    },
    {
        path: '/home',
        exact: true,
        component: require('../views/home').default,
    },
    {
        path: '/authentication',
        exact: true,
        component: require('../views/authentication').default,
    },
    {
        path: '*',
        exact: true,
        component: require('../views/home').default,
    },
];

export default ROUTERS;
