import Profile from './routes/Profile.vue'
import List from './routes/List.vue'
import Create from './routes/Create.vue'
import Item from './routes/Item.vue'

export const routes = [
  { path: '/profile', component: Profile,
    children: [
      { path: 'rec', component: List, name: 'rec' },
      { path: 'send', component: List, name: 'send' },
    ]
  },
  { path: '/item/:id', component: Item },
  { path: '/create', component: Create }
];
