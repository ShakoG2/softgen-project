Ext.define('SL.view.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  requires: ['SL.model.Post', 'SL.model.User'],

  data: {
    postTitle: '',
  },

  formulas: {
    postTitleUpperCase: function(get) {
      return get('postTitle').toUpperCase();
    },
  },

  stores: {
    posts: {
      model: 'SL.model.Post',
      sorters: [{
        property: 'title',
        direction: 'DESC'
      }]
    },

    users: {
      model: 'SL.model.User',
    },

    navItems: {
      type: 'tree',
      root: {
        expanded: true,
        children: [{
          text: 'Home',
          iconCls: 'fa fa-home',
          className: 'SL.view.Home',
          leaf: true,
        }, {
          text: 'Users',
          iconCls: 'fa fa-user',
          className: 'SL.view.users.UserPanel',
          leaf: true,
        }, {
          text: 'Posts',
          iconCls: 'fa fa-comments',
          className: 'SL.view.posts.PostPanel',
          leaf: true,
        }, {
          text: 'Form',
          className: 'SL.view.forms.MainForm',
          leaf: true,
        }, {
          text: 'Exchange',
          iconCls: 'fa fa-exchange',
          className: 'SL.view.exchange.Exchange',
          leaf: true,
        }, {
          text: 'Paging',
          iconCls: 'fa fa-files',
          className: 'SL.view.paging.Grid',
          leaf: true,
        }, {
          text: 'Customers',
          iconCls: 'fa fa-users',
          className: 'SL.view.registration.Customers',
          leaf: true,
        }],
      },
    },
  },
});
