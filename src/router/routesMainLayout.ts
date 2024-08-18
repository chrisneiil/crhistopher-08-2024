import PrincipalPageView from "../views/PrincipalPageView.vue";
import TeamPageView from "../views/TeamPageView.vue";
import SelectedPokemonView from "../views/SelectedPokemonView.vue";

export default [
    {
        path: '',
        name: 'Home',
        component: PrincipalPageView
    },
    {
        path: 'team',
        name: 'Team',
        component: TeamPageView
    },
    {
        path: 'team/:id',
        name: 'TeamDetails',
        component: SelectedPokemonView
    }
];
