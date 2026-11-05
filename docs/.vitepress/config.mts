import { defineConfig } from 'vitepress'
export default defineConfig({
 title: 'AI Career Atlas',
 description: 'A student guide to careers where AI meets business',
 base: '/ai-career-research/',
 cleanUrls: true,
 appearance: 'dark',
 themeConfig: {
  logo: '✦',
  nav: [
   { text: 'Start Here', link: '/' },
   { text: 'Compare Roles', link: '/career-map' },
   { text: 'My Roadmap', link: '/roadmap' },
   { text: 'Sources', link: '/resources' }
  ],
  sidebar: [
   { text: 'Explore', items: [
    { text: 'Home', link: '/' },
    { text: 'Career Comparison', link: '/career-map' },
    { text: 'My Learning Roadmap', link: '/roadmap' }
   ]},
   { text: 'Career Profiles', items: [
    { text: 'Forward Deployed Engineer', link: '/forward-deployed-engineer' },
    { text: 'AI Engineer', link: '/ai-engineer' },
    { text: 'Machine Learning Engineer', link: '/machine-learning-engineer' },
    { text: 'AI Product Manager', link: '/ai-product-manager' }
   ]},
   { text: 'Research', items: [{ text: 'Job Links & Sources', link: '/resources' }] }
  ],
  socialLinks: [{ icon: 'github', link: 'https://github.com/aa3986-commits/ai-career-research' }],
  search: { provider: 'local' },
  footer: { message: 'AI Career Atlas • Student research project', copyright: 'Research and learning, not career guarantees' }
 }
})