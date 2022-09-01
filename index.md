---
layout: default
---

<div class="w-screen h-screen flex flex-col justify-center items-center text-slate-600 dark:text-slate-300 dark:bg-mefit-dark">
  <img class="w-64 lg:w-96 block dark:hidden" src="https://mefit.github.io/artifacts/logo/dist/logo-5-blue-trans.png">
  <img class="w-64 lg:w-96 hidden dark:block" src="https://mefit.github.io/artifacts/logo/dist/logo-5-light-trans.png">

  <h1 class="text-4xl lg:text-5xl text-slate-800 dark:text-slate-100 mb-1 -mt-3">MeFit Tech</h1>
  <p class="mb-16">
    <span class="zh hidden text-base lg:text-xl">北京米菲特斯科技有限公司</span>
    <span class="en hidden text-xs lg:text-base">Beijing MeFitness Technology Co., Ltd.</span>
  </p>

  <a href="mailto:aidi.tan@mefit.tech"><i class="fa-solid fa-envelope text-2xl p-2 border-2 rounded-full"></i></a>
</div>

<script>
document
  .querySelectorAll(/^zh/.test(navigator.language) ? '.zh' : '.en')
  .forEach(e => e.classList.remove('hidden'))
</script>
