Ext.define('SL.view.posts.PostPanel', {
  extend: 'Ext.panel.Panel',
  layout: {
    type: 'vbox',
    align: 'stretch',
  },
  items: [{
    xclass: 'SL.view.posts.SearchForm',
  }, {
    xclass: 'SL.view.posts.Grid',
    flex: 1,
  }],
});
