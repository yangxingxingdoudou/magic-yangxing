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
          <h1>任务查看</h1>
          <div class="m_r">
            <a href="javascript" class="m_a">
              <img src="/static/img/a2.jpg">
              首页
            </a>
            > 任务查看
          </div>
        </div>
        <div class="content">
          <div class="con_header">
            <a href="index.html" class="con_hea_a" @click="$router.back()">
              <img src="/static/img/a2.png">
              返回
            </a>
            <a href="index.html" class="con_hea_a">
              <img src="/static/img/a3.png">
              打印
            </a>
          </div>
          <div class="con_task">
            <h2>新员工培训</h2>
            <h3>
              <span>发布：盖茨 参加人员：李四、张三、盖茨</span>
              <span>2017/8/9 12:33:10</span>
            </h3>
          </div>
          <div class="con_task">
            <h2 class="task_sec">到会议中心进行就业前业务培训</h2>
            <div>
              <p class="task_pro">任务进度（2017-08-09 至 2017-08-16）</p>
              <el-progress :percentage="70" :color="'#00c0ef'"></el-progress>
              <br/>
              <div class="name">
                【盖茨】 【盖茨】
              </div>
            </div>
            <div class="m_tj">
              <div class="m_s">
                <label>状态</label>
                <select>
                  <option>
                    新任务
                  </option>
                  <option>
                    已接收
                  </option>
                  <option>
                    进行中
                  </option>
                  <option>
                    已完成
                  </option>
                </select>
              </div>
              <div class="m_s">
                <label>反馈</label>
                <input type="text" class="txt">
              </div>
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>增加附件</label>
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <input type="button" value="保存" class="btn">
              <input type="button" value="取消" class="btn">
            </div>
          </div>
        </div>
      </main>
    </section>

  </div>
</template>

<script>
    export default {
        name: "magic-check-task"
    }
</script>

<style scoped>
  @import "../../assets/css/task/magicCheckTask.css";
</style>
