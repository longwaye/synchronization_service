import Mock from "mockjs";

Mock.mock('/api/dataList', 'get', {
  "data": [
    {
      "key": "1",
      "ydata": "db1",
      "yform": "table1",
      "mddata": "db11",
      "mdform": "table11",
      "rate": "已同步11条",
      "tags": ["同步中"],
      "error": "忽略",
      "time": "2017-09-06 12:23:32",
      "cycle": "定时",
      "frequency": "第一次"
    }
  ]
});
