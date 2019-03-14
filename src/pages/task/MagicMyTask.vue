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
          <h1>我的任务</h1>
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
                  <tr height="38">
                    <td width="68">
                      <span><a href="javascript" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="javascript" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                        <span>
                            <a href="#" class="xiugai">查看</a>
                        </span>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="javascript" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="javascript" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                        <span>
                            <a href="#" class="xiugai">查看</a>
                        </span>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="javascript" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="javascript" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                        <span>
                            <a href="#" class="xiugai">查看</a>
                        </span>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="javascript" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="javascript" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                        <span>
                            <a href="#" class="xiugai">查看</a>
                        </span>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="javascript" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="javascript" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                        <span>
                            <a href="#" class="xiugai">查看</a>
                        </span>
                    </td>
                  </tr>
                  <tr height="38">
                <td width="68">
                  <span><a href="javascript" style="color: #000;">1</a></span>
                </td>
                <td width="106">
                  <span>公事</span>
                </td>
                <td width="300">
                  <span>财务科工资报表制作</span>
                </td>
                <td width="360">
                  <span>2015/11/24 23:17:10</span>
                </td>
                <td width="142">
                  <span>盖茨</span>
                </td>
                <td width="140">
                  <span>总公司</span>
                </td>
                <td width="148">
                  <span><a href="javascript" class="wanchen">已完成</a></span>
                </td>
                <td width="110">
                  <span>附件</span>
                </td>
                <td width="300">
                    <span>
                        <a href="#" class="xiugai">查看</a>
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
    export default {
        name: "magic-my-task"
    }
</script>

<style scoped>
  @import "../../assets/css/task/magicMyTask.css";
</style>
