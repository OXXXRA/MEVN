import VueRouter from 'vue-router'
import bookList from "@/components/bookList";
import bookItem from "@/components/bookItem";
import createItem from '@/components/createItem';
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: bookList,
            name: 'main'
        },
        {
            path: '/:id',
            component: bookItem
        },
        {
            path: '/create',
            component: createItem
        }
    ]
})