const e=JSON.parse('{"key":"v-b9e838be","path":"/java/new-features/java16.html","title":"Java 16 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 16 新特性概览","category":"Java","tag":["Java新特性"],"description":"Java 16 在 2021 年 3 月 16 日正式发布，非长期支持（LTS）版本。 相关阅读：OpenJDK Java 16 文档 。 JEP 338:向量 API(第一次孵化) 向量（Vector） API 最初由 JEP 338 提出，并作为孵化 API集成到 Java 16 中。第二轮孵化由 JEP 414 提出并集成到 Java 17 中，第三轮孵化由 JEP 417 提出并集成到 Java 18 中，第四轮由 JEP 426 提出并集成到了 Java 19 中。","head":[["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/theme/layout.html/java/new-features/java16.html"}],["meta",{"property":"og:site_name","content":"有梦想的鱼-开源博客"}],["meta",{"property":"og:title","content":"Java 16 新特性概览"}],["meta",{"property":"og:description","content":"Java 16 在 2021 年 3 月 16 日正式发布，非长期支持（LTS）版本。 相关阅读：OpenJDK Java 16 文档 。 JEP 338:向量 API(第一次孵化) 向量（Vector） API 最初由 JEP 338 提出，并作为孵化 API集成到 Java 16 中。第二轮孵化由 JEP 414 提出并集成到 Java 17 中，第三轮孵化由 JEP 417 提出并集成到 Java 18 中，第四轮由 JEP 426 提出并集成到了 Java 19 中。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-28T09:16:36.000Z"}],["meta",{"property":"article:author","content":"有梦想的鱼🐟"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2023-09-28T09:16:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 16 新特性概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-28T09:16:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"有梦想的鱼🐟\\"}]}"]]},"headers":[{"level":2,"title":"JEP 338:向量 API(第一次孵化)","slug":"jep-338-向量-api-第一次孵化","link":"#jep-338-向量-api-第一次孵化","children":[]},{"level":2,"title":"JEP 347:启用 C++ 14 语言特性","slug":"jep-347-启用-c-14-语言特性","link":"#jep-347-启用-c-14-语言特性","children":[]},{"level":2,"title":"JEP 376:ZGC 并发线程堆栈处理","slug":"jep-376-zgc-并发线程堆栈处理","link":"#jep-376-zgc-并发线程堆栈处理","children":[]},{"level":2,"title":"JEP 387:弹性元空间","slug":"jep-387-弹性元空间","link":"#jep-387-弹性元空间","children":[]},{"level":2,"title":"JEP 390:对基于值的类发出警告","slug":"jep-390-对基于值的类发出警告","link":"#jep-390-对基于值的类发出警告","children":[]},{"level":2,"title":"JEP 392:打包工具","slug":"jep-392-打包工具","link":"#jep-392-打包工具","children":[]},{"level":2,"title":"JEP 393:外部内存访问 API(第三次孵化)","slug":"jep-393-外部内存访问-api-第三次孵化","link":"#jep-393-外部内存访问-api-第三次孵化","children":[]},{"level":2,"title":"JEP 394:instanceof 模式匹配(转正)","slug":"jep-394-instanceof-模式匹配-转正","link":"#jep-394-instanceof-模式匹配-转正","children":[]},{"level":2,"title":"JEP 395:记录类型(转正)","slug":"jep-395-记录类型-转正","link":"#jep-395-记录类型-转正","children":[]},{"level":2,"title":"JEP 396:默认强封装 JDK 内部元素","slug":"jep-396-默认强封装-jdk-内部元素","link":"#jep-396-默认强封装-jdk-内部元素","children":[]},{"level":2,"title":"JEP 397:密封类(预览)","slug":"jep-397-密封类-预览","link":"#jep-397-密封类-预览","children":[]},{"level":2,"title":"其他优化与改进","slug":"其他优化与改进","link":"#其他优化与改进","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1695720915000,"updatedTime":1695892596000,"contributors":[{"name":"wangfeng","email":"1290715192@qq.com","commits":2}]},"readingTime":{"minutes":9.98,"words":2994},"filePathRelative":"java/new-features/java16.md","localizedDate":"2023年9月26日","excerpt":"<p>Java 16 在 2021 年 3 月 16 日正式发布，非长期支持（LTS）版本。</p>\\n<p>相关阅读：<a href=\\"https://openjdk.java.net/projects/jdk/16/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OpenJDK Java 16 文档</a> 。</p>\\n<h2> JEP 338:向量 API(第一次孵化)</h2>\\n<p>向量（Vector） API 最初由 <a href=\\"https://openjdk.java.net/jeps/338\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 338</a> 提出，并作为<a href=\\"http://openjdk.java.net/jeps/11\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">孵化 API</a>集成到 Java 16 中。第二轮孵化由 <a href=\\"https://openjdk.java.net/jeps/414\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 414</a> 提出并集成到 Java 17 中，第三轮孵化由 <a href=\\"https://openjdk.java.net/jeps/417\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 417</a> 提出并集成到 Java 18 中，第四轮由 <a href=\\"https://openjdk.java.net/jeps/426\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 426</a> 提出并集成到了 Java 19 中。</p>","autoDesc":true}');export{e as data};
