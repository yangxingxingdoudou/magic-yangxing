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
            <router-link to="/MagicTask" class="con_hea_a" tag="a">
              <img src="/static/img/a2.png">
              返回
            </router-link>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>类型</label>
              <select>
                <option>
                  公事
                </option>
                <option>
                  私事
                </option>
              </select>
            </div>
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
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>开始日期</label>
              <input type="date" value="2019/3/13" class="rq">
            </div>
            <div class="m_s">
              <label>结束日期</label>
              <input type="date" value="2019/3/13" class="rq">
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>标题</label>
              <input type="text" class="txt">
            </div>
            <div class="m_s">
              <label>接收</label>
              <input type="text" class="txt">
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>描述</label>
              <textarea class="are"></textarea>
            </div>
            <div class="m_s">
              <label>评价</label>
              <textarea class="are"></textarea>
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>置顶</label>
              <!-- `checked` 为 true 或 false -->
              <el-checkbox v-model="checked"></el-checkbox>
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
        name: "magic-gai",
        data(){
            return{
              checked: true
            }
        }
    }
</script>

<style scoped>
  @import "../../assets/css/task/magicGai.css";
</style>
