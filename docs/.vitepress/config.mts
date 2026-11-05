import { defineConfig } from 'vitepress'
export default defineConfig({
 title:'AI Career Research', description:'Explore new AI careers', base:'/ai-career-research/', cleanUrls:true,
 themeConfig:{
 nav:[{text:'Home',link:'/'},{text:'Career Research',link:'/forward-deployed-engineer'},{text:'Resources',link:'/resources'}],
 sidebar:[{text:'AI Careers',items:[
 {text:'Overview',link:'/'},{text:'Forward Deployed Engineer',link:'/forward-deployed-engineer'},
 {text:'AI Engineer',link:'/ai-engineer'},{text:'Machine Learning Engineer',link:'/machine-learning-engineer'},
 {text:'AI Product Manager',link:'/ai-product-manager'},{text:'Research Resources',link:'/resources'}]}],
 socialLinks:[{icon:'github',link:'https://github.com/aa3986-commits/ai-career-research'}],
 search:{provider:'local'}
 }
})