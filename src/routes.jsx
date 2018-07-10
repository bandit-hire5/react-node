import HelloWorldPage from './components/HelloWorldPage';
import CounterPage from './components/CounterPage';
import TimePage from './components/TimePage';

export default [
    {
        path: '/',
        exact: true,
        component: HelloWorldPage,
    },
    {
        path: '/counters',
        exact: false,
        component: CounterPage,
    },
    {
        path: '/time',
        exact: false,
        authorized: true,
        component: TimePage,
    },
];
