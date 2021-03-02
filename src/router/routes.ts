const Step = () => import("../views/step/Step");
const Datasync = () => import("../views/datasync/DataSync.vue");

const Routes = [
  {
    path: "/",
    redirect: "/datasync"
  },
  {
    path: "/step",
    name: "Step",
    component: Step
  },
  {
    path: "/datasync",
    component: Datasync
  }
];

export default Routes;
