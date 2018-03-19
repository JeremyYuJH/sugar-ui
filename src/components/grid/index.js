import Grid from './Grid.vue';
import GridItem from './GridItem.vue';
Grid.install = (Vue) => {
  Vue.component(Grid.name, Grid);
}
GridItem.install = (Vue) => {
  Vue.component(GridItem.name, GridItem);
}
export { Grid, GridItem };
