<template>
  <div id="show-blogs" v-beijing:clumn= "'wide'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" class="search" placeholder="搜索">
    <div class="single-blog" v-for="(blog,index) in filterBlogs" :key="index">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h2 v-yanse>{{index + 1 + "."}}{{blog.title | to-uppercase}}</h2>
        </router-link>
        <div>{{blog.content | snippet}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get("https://wd6797671931vwtpen.wilddogio.com/posts.json")
        .then(data=>{
            //console.log(data)
            //this.blogs = data.body.slice(0,10);
            return data.json();
        })
        .then(data=>{
            var blogArray = [];
            for(let key in data){
                
                data[key].id = key;
                blogArray.push(data[key])
            }
            this.blogs = blogArray;
            //console.log(this.blogs)
        })
  },
  computed:{
       filterBlogs:function(){
           return this.blogs.filter((blog) => {
               return blog.title.match(this.search)
           })
       }
  },
  filters:{
    //   "to-uppercase":function(value){
    //       return value.toUpperCase()
    //   }
    "to-uppercase":function(value){
        return value.toUpperCase()
    },
    "snippet":function(value){
        return value.slice(0,100) + "...";
    }
  },
  directives:{
      "yanse":{
          bind(el,binding,vnode){
              el.style.color = "#" + Math.random().toString(16).slice(2,8)
          }
      },
      "beijing":{
          bind(el,binding,vnode){
                if(binding.value == "wide"){
                el.style.maxWidth = "1200px";
                }else if(binding.value == "naarle"){
                el.style.maxWidth = "560px"
                }

                //自定义指令（传参）
                if(binding.arg == "clumn"){
                //el.style.backgroundColor = "red";
                }
            }
      }
  }
}
</script>

<style scoped>
#show-blogs{
    margin:0px auto;
    max-width:800px;
}
.single-blog{
    background:#eee;
    padding:20px;
    margin:20px 0; 
    box-sizing: border-box;
}
.single-blog div{
    color:gray;
}
.search{
    width:100%;
    border-radius:6px;
    border:1px solid #eee;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline:none;
    padding:10px;
}
</style>
