import { 
    faBell, 
    faBullhorn, 
    faChartLine, 
    faFolder, 
    faImages, 
    faInfoCircle, 
    faMapMarker, 
    // faMoneyBill, 
    faTags, 
    faUserCircle, 
    faUsers 
} from '@fortawesome/free-solid-svg-icons';
import { calculateEndDate } from '../func';
// import { faBuysellads } from '@fortawesome/free-brands-svg-icons';

const accountURL = process.env.REACT_APP_ACCOUNT_URL;

const tabs = (language) => ([
    {
        id: 'category',
        label: language === 'FR'
            ? 'Catégorie'
            : 'Category',
        icon: faTags
    },
    {
        id: 'details',
        label: language === 'FR'
            ? 'Détails'
            : 'Details',
        icon: faInfoCircle
    },
    {
        id: 'location',
        label: language === 'FR'
        ? 'Localisation'
        : 'Localization',
        icon: faMapMarker
    },
    {
        id: 'photos',
        label: language === 'FR'
        ? 'Photos'
        : 'Photos',
        icon: faImages
    }
]);

const adminSidebarData = (language) => ([
    { id: 'panel', name: language === 'FR' ? "Panel" : "Panel", icon: faChartLine, path: "/panel" },
    { id: 'posts', name: language === 'FR' ? "Annonces" : "Ads", icon: faBullhorn, path: "/posts" },
    { id: 'users', name: language === 'FR' ? 'Utilisateurs' : 'Users', icon: faUsers, path: "/users" },
    // { id: "pubs", name: language === 'FR' ? 'Publicités' : 'Advertisements', icon: faBuysellads, path: "/pubs" },
    { id: "verifications", name: language === 'FR' ? 'Vérifications' : 'Verifications', icon: faFolder, path: "/verifications", badge: 0 },
    { id: 'notifications', name: language === 'FR' ? 'Notifications' : 'Notifications', icon: faBell, path: "/notifications", badge: 0 },
    // { id: 'payments', name: language === 'FR' ? 'Paiements' : 'Payments', icon: faMoneyBill, path: "/payments" },
    { id: 'profile', name: language === 'FR' ? 'Profile' : 'Profile', icon: faUserCircle, path: `${accountURL}` },
]);



const plans = [
    {
        id: 'basic',
        name: "Basic Package",
        duration: '7 Jours',
        price: null,
        adsLimit: 1,
        photoLimit: 5,
        startDate: new Date().toISOString(),
        endDate: calculateEndDate('7 Jours'),
        adsPosted: 0,
        isPaid: true, // Free plan, no payment required
    },
    {
        id: 'standard',
        name: "Standard Package",
        duration: 'Mois',
        price: 15,
        adsLimit: 10,
        photoLimit: 10,
        startDate: new Date().toISOString(),
        endDate: calculateEndDate('Mois'),
        adsPosted: 0,
        isPaid: false, // Payment required
    },
    {
        id: 'premium',
        name: "Premium Package",
        duration: '3 Mois',
        price: 55,
        adsLimit: 20,
        photoLimit: 15,
        startDate: new Date().toISOString(),
        endDate: calculateEndDate('3 Mois'),
        adsPosted: 0,
        isPaid: false, // Payment required
    },
];


const paymentStatuses = (language) => ({
    'processing': {
        color: '#FBBF24',
        label: language === 'FR' ? 'En cours' : 'Processing',
        icon: '🔄'
    },
    'completed': {
        color: '#34D399',
        label: language === 'FR' ? 'Terminé(s)' : 'Completed',
        icon: '✅'
    },
    'failed': {
        color: '#EF4444',
        label: language === 'FR' ? 'Échoué(s)' : 'Failed',
        icon: '❌'
    }
});



export {
    adminSidebarData,
    plans,
    tabs,
    paymentStatuses
};
