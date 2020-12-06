Ext.define('SL.model.Topic', {
  extend: 'Ext.data.Model',
  idProperty: 'threadid',
  fields: [
    'title',
    'threadid',
    'username',
    'userid',
    'dateline',
    'postid',
    'forumtitle',
    'forumid',
    'replycount',
    {
      name: 'lastpost',
      type: 'date',
      dateFormat: 'timestamp'
    },
    'lastposter',
    'excerpt',
  ],
  proxy: {
    type: 'rest',
    url: 'https://softlab-api.softgen.ge/sencha/topics',
    reader: {
      totalProperty: 'totalCount',
      rootProperty: 'topics'
    },
    simpleSortMode: true
  }
});
