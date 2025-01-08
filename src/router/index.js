import { createBrowserRouter } from 'react-router-dom'

import Layout from "../components/layout";
import Main from "../pages/Main";
import Publication from "../pages/Publication"
import Blog from "../pages/Blog";


// global router configuration
const routers = [
    {
        path: '/',
        element: <Layout />,
        children: [
            // 通过Layout设置的Outlet组件渲染子路由
            {path:"/", element: <Main />},
            {path:"/publication", element: <Publication />},
            {path:"/blog", element: <Blog />}
        ]
    },
]

export default createBrowserRouter(routers);