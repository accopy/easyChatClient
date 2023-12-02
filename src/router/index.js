import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// let tempRouter = [
//     {
//         path: 'dashboard',
//         component: PostsLayout,
//         children: [
//             {
//                 path: 'notes',
//                 component: PostsNew,
//             },
//             {
//                 path: 'collections',
//                 component: PostsDetail
//             }
//         ]
//     }
// ]
// for (let i = 0; i < tempRouter.length; i++) {
//     router.push(tempRouter[i])
// }
export default router