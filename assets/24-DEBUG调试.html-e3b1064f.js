import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,a as d}from"./app-aed80e01.js";const t="/images/idea/idea-debug.png",n="/images/idea/idea-debug-breakpoint-field.png",r="/images/idea/idea-debug-breakpoint-exception.png",g="/images/idea/idea-debug-breakpoint-method.png",o="/images/idea/idea-debug-breakpoint-interface-method.png",p="/images/idea/idea-debug-throw-exception.png",s="/images/idea/idea-debug-force-return.png",c="/images/idea/idea-debug-stream.png",l="/images/idea/idea-debug-thread.png",h={},u=d('<h1 id="idea-debug-调试" tabindex="-1"><a class="header-anchor" href="#idea-debug-调试" aria-hidden="true">#</a> IDEA DEBUG 调试</h1><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><figure><img src="'+t+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><p>从左到右依次如下</p><ol><li>Show Execution Point (Alt + F10)：跳转到光标所在代码执行的行。</li><li>Step Over (F8)：步过，一行一行地往下走，如果这一行上有方法不会进入方法。</li><li>Step Into (F7)：步入，如果当前行有方法，可以进入方法内部，一般用于进入自定义方法内，不会进入官方类库的方法。</li><li>Force Step Into (Alt + Shift + F7)：强制步入，能进入任何方法，查看底层源码的时候可以用这个进入官方类库的方法。</li><li>Step Out (Shift + F8)：步出，从步入的方法内退出到方法调用处，此时方法已执行完毕，只是还没有完成赋值。</li><li>Drop Frame (默认无)：回退断点。</li><li>Run to Cursor (Alt + F9)：运行到光标处，你可以将光标定位到你需要查看的那一行，然后使用这个功能，代码会运行至光标行，而不需要打断点。</li><li>Evaluate Expression (Alt + F8)：计算表达式。</li></ol><h3 id="字段断点" tabindex="-1"><a class="header-anchor" href="#字段断点" aria-hidden="true">#</a> 字段断点</h3><p>在字段上打断点时，会监听值的整个生命周期的变化。</p><figure><img src="'+n+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><h3 id="异常断点" tabindex="-1"><a class="header-anchor" href="#异常断点" aria-hidden="true">#</a> 异常断点</h3><p>全局监听，当出现相关异常时会自动断点停在异常代码处。</p><figure><img src="'+r+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><h3 id="方法断点" tabindex="-1"><a class="header-anchor" href="#方法断点" aria-hidden="true">#</a> 方法断点</h3><p>在方法上打断点时，会自动进入方法第一行断点以及最后出方法时断点，方便查看结果。</p><figure><img src="'+g+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><p>当不确定接口由哪一个具体的类实现时，可接口方法处进行断点，方法调用时会自动进入具体的实现类中。</p><figure><img src="'+o+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><h3 id="手动制造抛出异常" tabindex="-1"><a class="header-anchor" href="#手动制造抛出异常" aria-hidden="true">#</a> 手动制造抛出异常</h3><figure><img src="'+p+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><h3 id="强制返回" tabindex="-1"><a class="header-anchor" href="#强制返回" aria-hidden="true">#</a> 强制返回</h3><p>不再执行之后的代码<br><img src="'+s+'" alt="idea-debug.png" loading="lazy"></p><h3 id="stream调试" tabindex="-1"><a class="header-anchor" href="#stream调试" aria-hidden="true">#</a> stream调试</h3><figure><img src="'+c+'" alt="idea-debug.png" tabindex="0" loading="lazy"><figcaption>idea-debug.png</figcaption></figure><h3 id="线程调试" tabindex="-1"><a class="header-anchor" href="#线程调试" aria-hidden="true">#</a> 线程调试</h3><p>通过切换线程控制线程执行顺序<br><img src="'+l+'" alt="idea-debug.png" loading="lazy"></p>',24),f=[u];function b(m,_){return i(),a("div",null,f)}const z=e(h,[["render",b],["__file","24-DEBUG调试.html.vue"]]);export{z as default};
