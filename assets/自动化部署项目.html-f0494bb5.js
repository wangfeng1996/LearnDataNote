const e=JSON.parse(`{"key":"v-f9f49dee","path":"/deploy/%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE.html","title":"自动化部署git项目","lang":"zh-CN","frontmatter":{"title":"自动化部署git项目","category":"shell","tag":["shell"],"description":"自动化部署git项目 创建部署脚本 #!/usr/bin/env sh # 确保脚本抛出遇到的错误 set -e # 生成静态文件 npm run build # 进入生成的文件夹 cd docs/.vuepress/dist # 如果是发布到自定义域名 # echo 'www.yourwebsite.com' &gt; CNAME git init git add -A git commit -m 'message' # 如果发布到 https://&lt;USERNAME&gt;.github.io git push -f git@github.com:wangfeng1996/wangfeng1996.github.io.git master # 如果发布到 https://USERNAME.github.io/&lt;REPO&gt; REPO=github上的项目 # git push -f git@github.com:USERNAME/&lt;REPO&gt;.git master:gh-pages cd ../ &amp;&amp; rm -rf dist","head":[["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/theme/layout.html/deploy/%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE.html"}],["meta",{"property":"og:site_name","content":"有梦想的鱼-开源博客"}],["meta",{"property":"og:title","content":"自动化部署git项目"}],["meta",{"property":"og:description","content":"自动化部署git项目 创建部署脚本 #!/usr/bin/env sh # 确保脚本抛出遇到的错误 set -e # 生成静态文件 npm run build # 进入生成的文件夹 cd docs/.vuepress/dist # 如果是发布到自定义域名 # echo 'www.yourwebsite.com' &gt; CNAME git init git add -A git commit -m 'message' # 如果发布到 https://&lt;USERNAME&gt;.github.io git push -f git@github.com:wangfeng1996/wangfeng1996.github.io.git master # 如果发布到 https://USERNAME.github.io/&lt;REPO&gt; REPO=github上的项目 # git push -f git@github.com:USERNAME/&lt;REPO&gt;.git master:gh-pages cd ../ &amp;&amp; rm -rf dist"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-28T09:16:36.000Z"}],["meta",{"property":"article:author","content":"有梦想的鱼🐟"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:modified_time","content":"2023-09-28T09:16:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动化部署git项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-28T09:16:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"有梦想的鱼🐟\\"}]}"]]},"headers":[{"level":2,"title":"创建部署脚本","slug":"创建部署脚本","link":"#创建部署脚本","children":[]},{"level":2,"title":"添加命令(package.josn)","slug":"添加命令-package-josn","link":"#添加命令-package-josn","children":[]},{"level":2,"title":"运行发布命令","slug":"运行发布命令","link":"#运行发布命令","children":[]}],"git":{"createdTime":1695720915000,"updatedTime":1695892596000,"contributors":[{"name":"wangfeng","email":"1290715192@qq.com","commits":2}]},"readingTime":{"minutes":0.58,"words":174},"filePathRelative":"deploy/自动化部署项目.md","localizedDate":"2023年9月26日","excerpt":"<h1> 自动化部署git项目</h1>\\n<h2> 创建部署脚本</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/usr/bin/env sh</span>\\n\\n<span class=\\"token comment\\"># 确保脚本抛出遇到的错误</span>\\n<span class=\\"token builtin class-name\\">set</span> <span class=\\"token parameter variable\\">-e</span>\\n\\n<span class=\\"token comment\\"># 生成静态文件</span>\\n<span class=\\"token function\\">npm</span> run build\\n\\n<span class=\\"token comment\\"># 进入生成的文件夹</span>\\n<span class=\\"token builtin class-name\\">cd</span> docs/.vuepress/dist\\n\\n<span class=\\"token comment\\"># 如果是发布到自定义域名</span>\\n<span class=\\"token comment\\"># echo 'www.yourwebsite.com' &gt; CNAME</span>\\n\\n<span class=\\"token function\\">git</span> init\\n<span class=\\"token function\\">git</span> <span class=\\"token function\\">add</span> <span class=\\"token parameter variable\\">-A</span>\\n<span class=\\"token function\\">git</span> commit <span class=\\"token parameter variable\\">-m</span> <span class=\\"token string\\">'message'</span>\\n\\n<span class=\\"token comment\\"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>\\n<span class=\\"token function\\">git</span> push <span class=\\"token parameter variable\\">-f</span> git@github.com:wangfeng1996/wangfeng1996.github.io.git master\\n\\n <span class=\\"token comment\\"># 如果发布到 https://USERNAME.github.io/&lt;REPO&gt;  REPO=github上的项目</span>\\n<span class=\\"token comment\\"># git push -f git@github.com:USERNAME/&lt;REPO&gt;.git master:gh-pages</span>\\n\\n\\n<span class=\\"token builtin class-name\\">cd</span> <span class=\\"token punctuation\\">..</span>/ <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> dist\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
