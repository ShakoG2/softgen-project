Ext.define('SL.view.paging.Grid', {
  extend: 'Ext.grid.Panel',
  requires: ['SL.model.Topic'],
  viewModel: {
    stores: {
      topics: {
        model: 'SL.model.Topic',
        pageSize: 50,
        remoteSort: true,
        sorters: [{
          property: 'lastpost',
          direction: 'DESC',
        }],
      },
    },
  },
  controller: {
    xclass: 'SL.view.paging.GridController',
  },
  viewConfig: {
    stripeRows: false,
  },
  bind: '{topics}',
  autoLoad: true,
  columns: [{
    xtype: 'templatecolumn',
    text: 'Topic',
    dataIndex: 'title',
    flex: 2,
    tpl: '<a href="https://forum.sencha.com/forum/showthread.php?{threadid}" target="_blank">{title}</a>',
    // renderer: 'titleRenderer',
  }, {
    text: 'Replies',
    dataIndex: 'replycount',
    width: 100,
  }, {
    xtype: 'templatecolumn',
    text: 'Last Post',
    dataIndex: 'lastpost',
    flex: 1,
    tpl: `{lastpost:date('d-m-Y')} by <strong>{lastposter}</strong>`,
    // renderer: 'lastPostRenderer',
  }],
  plugins: {
    ptype: 'rowexpander',
    rowBodyTpl: [
      '{excerpt:this.addBreaks}', {
        addBreaks: v => v.replace(/\n/g, '<br/>'),
      },
    ],
  },
  bbar: {
    xtype: 'pagingtoolbar',
  },
});
