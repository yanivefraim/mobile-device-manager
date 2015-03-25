
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;


// Here we define all our material-ui ReactComponents.
var Master = require('./components/master.jsx');
var Home = require('./components/pages/home.jsx');

/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  * 
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its 
  * handler and its parent handler like so: Paper > Components > Master
  */

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="home" handler={Home} />
    <Route name="get-started" handler={GetStarted} />
    <Route name="css-framework" handler={CssFramework}>
      <Route name="colors" handler={Colors} />
      <Route name="typography" handler={Typography} />
      <Redirect from="/css-framework" to="colors" />
    </Route>

    <Route name="components" handler={Components}>
      <Route name="buttons" handler={Buttons} />
      <Route name="date-picker" handler={DatePicker} />
      <Route name="dialog" handler={Dialog} />
      <Route name="dropdown-menu" handler={DropDownMenu} />
      <Route name="icons" handler={Icons} />
      <Route name="icon-buttons" handler={IconButtons} />
      <Route name="left-nav" handler={LeftNav} />
      <Route name="menus" handler={Menus} />
      <Route name="paper" handler={Paper} />
      <Route name="sliders" handler={Sliders} />
      <Route name="switches" handler={Switches} />
      <Route name="snackbar" handler={Snackbar} />
      <Route name="tabs" handler={Tabs} />
      <Route name="text-fields" handler={TextFields} />
      <Route name="toolbars" handler={Toolbars} />
      <Redirect from="/components" to="buttons" />
    </Route>

    <DefaultRoute handler={Home}/>
  </Route>
);