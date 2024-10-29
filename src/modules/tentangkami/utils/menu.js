const listMenu = () => {
    return [
        {
            name: 'Tentang Agendakota',
            to: '/',
            path:'/'
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
            to: '/contact',
            path: 'contact'
        },
    ]
}

export {listMenu}