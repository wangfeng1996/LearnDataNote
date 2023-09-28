import{_ as e}from"./idea-set-new-projects-6b93649a.js";import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as o,a as i}from"./app-aed80e01.js";const r="/images/idea/idea-gradle-user-home.png",t="/images/idea/idea-gradle-utf-8.png",c={},l=i('<h3 id="gradle配置" tabindex="-1"><a class="header-anchor" href="#gradle配置" aria-hidden="true">#</a> Gradle配置</h3><h4 id="gradle-user-home" tabindex="-1"><a class="header-anchor" href="#gradle-user-home" aria-hidden="true">#</a> <code>Gradle user home</code></h4><blockquote><p>查看IDEA安装目录<code>D:\\zhengqingya\\soft\\soft-dev\\IDE\\ideaIU-2022.1.1.win\\plugins\\gradle\\lib</code>下匹配的gradle版本，对应自己安装的gradle版本不能太老</p></blockquote><blockquote><p>如果需要idea新开的所有项目配置都生效，操作 <code>File</code> -&gt; <code>New Projects Setup</code> -&gt; <code>Settings for New Projects...</code><br><img src="'+e+'" alt="idea-set-new-projects.png" loading="lazy"></p></blockquote><blockquote><p>gradle安装好，配置<code>GRADLE_USER_HOME</code>环境变量之后，idea这里会自动识别;<br> 识别不到可尝试重启idea;<br> 有需要的自行修改；<br> 我这里默认配置即可。</p></blockquote><figure><img src="'+r+`" alt="idea-gradle-user-home.png" tabindex="0" loading="lazy"><figcaption>idea-gradle-user-home.png</figcaption></figure><h4 id="控制台中文乱码" tabindex="-1"><a class="header-anchor" href="#控制台中文乱码" aria-hidden="true">#</a> 控制台中文乱码</h4><blockquote><p>tips: 修改完后需重启IDEA才能生效！</p></blockquote><p><code>Help</code> -&gt; <code>Edit Custom VM Options...</code> 新增配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Dfile.encoding=UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="idea-gradle-utf-8.png" tabindex="0" loading="lazy"><figcaption>idea-gradle-utf-8.png</figcaption></figure>',11),n=[l];function s(g,p){return d(),o("div",null,n)}const _=a(c,[["render",s],["__file","09-Gradle配置.html.vue"]]);export{_ as default};
