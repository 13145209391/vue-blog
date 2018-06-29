<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submited">
        <label for="">博客标题</label>
        <input type="text" v-model="blog.title" required>
        <label for="">博客内容</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkboxs">
          <label for="checkbox1">Vue.js</label>
          <input type="checkbox" name="" id="checkbox1" value="Vue.js" v-model="blog.ceartgors">
          <label for="checkbox2">React.js</label>
          <input type="checkbox" name="" id="checkbox2" value="React.js" v-model="blog.ceartgors">
          <label for="checkbox3">Node.js</label>
          <input type="checkbox" name="" id="checkbox3" value="Node.js" v-model="blog.ceartgors">
        </div>
        <label>作者</label>
        <select v-model="blog.author">
          <option v-for="(author,index) in authors" :key="index">{{author}}</option>
        </select>
        <button type="submit" @click.prevent="post">提交</button>
    </form>
    <div v-if="submited">
      <h3>已发布</h3>
    </div>

    <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客分类：</p>
        <p>
          <ul>
            <li v-for="(ceartgor,index) in blog.ceartgors" :key="index">
              {{ceartgor}}
            </li>
          </ul>
        </p>
        <p>作者：</p>
        <p>{{blog.author}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
        blog:{
            title:"",
            content:"",
            ceartgors:[],
            author:""
        },
        authors: ["李白","朱自清","苏轼","白居易"],
        submited:false
    }
  },
  methods:{
    post:function(){
      this.$http.post("https://wd6797671931vwtpen.wilddogio.com/posts.json",this.blog)
      .then(function(data){
        this.submited = true;
         console.log(data)
      })
      
    }
  }
}
</script>

<style scoped>
#add-blog *{
   box-sizing: border-box;
}
#add-blog{
  margin:20px auto;
  padding:20px;
  max-width:600px;
}
label{
  display:block;
  padding:20px 0 10px;
}
input[type="text"],textarea,select{
  display:block;
  padding:8px;
  width:100%;
}
#checkboxs label{
  display:inline-block;
  margin-top:0;
}
#checkboxs input{
  display:inline-block;
  margin-right:10px;
}
button{
  display:block;
  margin:20px  0;
  background:crimson;
  color:#fff;
  padding:8px 12px;
  font-size:14px;
  border-radius:6px;
  cursor:pointer;
  border:0;
  outline:none;
}
#preview{
  padding:10px 20px;
  border:1px solid #ddd;
  margin:30px 0;
}
textarea{
  height:200px;
}
h3{
  margin-top:10px;
}
</style>
