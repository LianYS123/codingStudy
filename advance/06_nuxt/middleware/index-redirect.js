export default function({route,redirect}){
    // console.log(ctx);
    // let keys = Object.keys(ctx);
    // console.log(keys);
    // [
    //     'isStatic',         'isDev',
    //     'isHMR',            'app',
    //     'payload',          'error',
    //     'base',             'env',
    //     'req',              'res',
    //     'ssrContext',       'redirect',
    //     'beforeNuxtRender', 'route',
    //     'next',             '_redirected',
    //     '_errored',         'params',
    //     'query',            '$axios'
    //   ]
    // console.log(route.path)
    if(route.path === '/main'){
        redirect('/');
    }

    
}