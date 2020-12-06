Ext.define('SL.view.paging.GridController', {
  extend: 'Ext.app.ViewController',

  // ამის მაგივრად გამოყენებულია tpl
  titleRenderer: function(v, p, record) {
    return `<a href="https://forum.sencha.com/forum/showthread.php?${record.get('threadid')}" target="_blank">${v}</a>`;
  },

  // ამის მაგივრად გამოყენებულია tpl
  lastPostRenderer: function(v, p, record) {
    const date = Ext.Date.format(v, 'H:i d.m.Y');
    return `${date} by <strong>${record.get('lastposter')}</strong>`;
  }
});
