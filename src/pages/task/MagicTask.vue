<template>
  <div class="body">
    <!--header-->
    <header></header>
    <!--section-->
    <section>
      <!--aside-->
      <aside></aside>
      <!--main-->
      <main>
        <div class="m_header">
          <h1>任务管理</h1>
          <div class="m_r">
            <a href="javascript" class="m_a">
              <img src="/static/img/a2.jpg">
              首页
            </a>
            > 任务管理
          </div>
        </div>
        <div class="content">
          <div class="con_header">
            <router-link to="/MagicGai" class="con_hea_a" tag="a">
              <img src="/static/img/a1.jpg">
              新增
            </router-link>
            <div class="con_search">
              <input type="text" value="查找...">
              <a href="javascript" class="con_sea_a">
                <img src="/static/img/a1.png">
              </a>
            </div>
          </div>
          <div class="main_con">
            <table cellpadding="2" cellspacing="0">
              <tr height="38">
                <td width="68">
                  <span><a href="javascript" style="color: #3c8dcb;">ID</a></span>
                </td>
                <td width="106">
                  <span>类型</span>
                </td>
                <td width="300">
                  <span>标题</span>
                </td>
                <td width="360">
                  <span>发布时间</span>
                </td>
                <td width="142">
                  <span>发布人</span>
                </td>
                <td width="140">
                  <span>部门</span>
                </td>
                <td width="148">
                  <span><a href="javascript" style="color: #3c8dcb;" >状态</a></span>
                </td>
                <td width="110">
                  <span>附件</span>
                </td>
                <td width="300">
                  <span>操作</span>
                </td>
              </tr>
              <tr height="38" v-for="(item,index) in taskList.taskData" :key="index">
                <td width="68">
                  <span><a href="javascript" style="color: #000;">{{item.id}}</a></span>
                </td>
                <td width="106">
                  <span>{{item.type}}</span>
                </td>
                <td width="300">
                  <span>{{item.title}}</span>
                </td>
                <td width="360">
                  <span>{{item.time}}</span>
                </td>
                <td width="142">
                  <span>{{item.person}}</span>
                </td>
                <td width="140">
                  <span>{{item.branch}}</span>
                </td>
                <td width="148">
                  <span><a href="javascript" class="wanchen">{{item.state}}</a></span>
                </td>
                <td width="110">
                  <span>{{item.access}}</span>
                </td>
                <td width="300">
                    <span>
                        <a href="#" class="xiugai">修改</a>
                        <a href="#" class="xiugai">查看</a>
                         <a href="#" class="del">删除</a>
                    </span>
                </td>
              </tr>

            </table>
          </div>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="20"
            :background=true
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
  import taskApi from "../../apis/taskApi"
  export default{
    name: 'MagicTask',
    data() {
      return {
        taskList:{},
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      _initData(){
        taskApi.getTaskInfo(data=>{
          if(data){
            console.log(data)
            this.taskList = data;
            console.log(this.taskList)
          }
        })
      }
    },
    created(){
      this._initData()
    }
  }
</script>

<style scoped>
  @import "../../assets/css/task/magicTask.css";
</style>
