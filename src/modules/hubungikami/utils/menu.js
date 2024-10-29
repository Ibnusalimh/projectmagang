const listMenu = () => {
    return [
        {
            name: 'Tentang Agendakota',
            to: '/home',
            path:'/home'
        },
        {
            name: 'Fitur',
            to: '/feature',
            path: 'feature'
        },
        {
            name: 'Klinik',
            to: '/clinic',
            path: 'clinic'
        },
        {
            name: 'Biaya',
            to: '/budget',
            path: 'budget'
        },
        {
            name: 'Hubungi Kami',
            to: '/',
            path: '/'
        },
    ]
}

export {listMenu}