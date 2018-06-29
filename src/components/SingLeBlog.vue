<template>
    <div id="single-blog">
       <h1>{{blog.title}}</h1>
       <article>{{blog.content}}</article>
       <p>作者：{{blog.author}}</p>
       <p>分类：</p>
       <ul>
          <li v-for= "(ceartgor,index) in blog.ceartgors" :key="index">{{ceartgor}}</li>
       </ul>
       <button type="button" @click="blogSingleDelete()">删除</button>
       <!-- <router-link :to="'/edit/' + id">
          <button type="button" >编辑</button>
       </router-link> -->
    </div>
</template>
<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get("https://wd6797671931vwtpen.wilddogio.com/posts/" + this.id + ".json")
        .then(function(data){
            //console.log(data)
            //this.blog = data.content;
            return data.json()
        })
        .then(data=>{
            this.blog = data;
        })
    },
    methods:{
        blogSingleDelete(){
            this.$http.delete("https://wd6797671931vwtpen.wilddogio.com/posts/" + this.id + ".json")
                      .then(response =>{
                          this.$router.push({path:"/"})
                      } )
        }
    }

}
</script>
<style scoped>
   #single-blog{
       max-width:960px;
       margin:0 auto;
       padding:20px;
       background:#eee;
       border:1px solid #aaa;
   }
</style>
