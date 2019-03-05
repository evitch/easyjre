(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),i=(a(15),a(1)),c=a(4),s=a(5),d=a(7),m=a(6),u=a(8),h=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).initState(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"initState",value:function(){var e=new XMLHttpRequest;e.open("GET","vendors.json",!1),e.send(null);var t=e.responseText,a=JSON.parse(t);this.state={vendors:a.vendors,userNeeds:"need-quick",selectedVendorIndex:0,jreIncludedModules:[],jreExcludedModules:[],optionCompressionType:2,optionExcludeHeaderFiles:!0,optionExcludeManPages:!0,optionBindServices:!1,jdkVersion:"",optionJdkBinPath:".",optionModulePath:"../jmods",optionAdditionalModules:""}}},{key:"handleProductChange",value:function(e){var t=e.target.value;this.setState({selectedVendorIndex:t})}},{key:"handleCopyButtonClick",value:function(e){document.getElementById("jlink-command-textarea").select(),document.execCommand("copy"),e.preventDefault()}},{key:"handleJlinkCommandTextareaClick",value:function(e){e.target.select()}},{key:"handleExcludeClick",value:function(e){var t=document.getElementById("jre-included-modules").value;if(""!==t.trim()){var a=this.state.jreIncludedModules.filter(function(e){return e!==t});a.sort();var n=this.state.jreExcludedModules;n.push(t),n.sort(),this.setState({jreIncludedModules:a,jreExcludedModules:n})}e.preventDefault()}},{key:"handleIncludeClick",value:function(e){var t=document.getElementById("jre-excluded-modules").value;if(""!==t.trim()){var a=this.state.jreExcludedModules.filter(function(e){return e!==t});a.sort();var n=this.state.jreIncludedModules;n.push(t),n.sort(),this.setState({jreIncludedModules:n,jreExcludedModules:a})}e.preventDefault()}},{key:"handleCompressionChange",value:function(e){var t=e.target.value;this.setState({optionCompressionType:t})}},{key:"handleExcludeHeaderFilesChange",value:function(e){var t=e.target.checked;this.setState({optionExcludeHeaderFiles:t})}},{key:"handleExcludeManPagesChange",value:function(e){var t=e.target.checked;this.setState({optionExcludeManPages:t})}},{key:"handleBindServicesChange",value:function(e){var t=e.target.checked;this.setState({optionBindServices:t})}},{key:"handleJdkBinPathChange",value:function(e){var t=e.target.value;this.setState({optionJdkBinPath:t})}},{key:"handleModulePathChange",value:function(e){var t=e.target.value;this.setState({optionModulePath:t})}},{key:"handleAdditionalModulesChange",value:function(e){var t=e.target.value.replace(/[ ]/g,"");this.setState({optionAdditionalModules:t})}},{key:"handlePasteClick",value:function(e){var t=this;navigator.clipboard.readText().then(function(e){var a=e.split(/\r?\n/),n=[],l="";a.forEach(function(e,t){""!==(e=e.trim())&&e.indexOf("@")>=0&&(l=e.slice(e.indexOf("@")+1),e=e.slice(0,e.indexOf("@")),n.push(e))});var o=n.filter(function(e){return e.startsWith("jdk.")});o.sort();var r=n.filter(function(e){return!e.startsWith("jdk.")});r.sort(),t.setState({jreIncludedModules:r,jreExcludedModules:o,jdkVersion:l.trim()})}).catch(function(e){console.error("Failed to read clipboard contents: ",e)})}},{key:"handleClickCopyWindowsListModulesCommand",value:function(e){document.getElementById("windows-list-command").select(),document.execCommand("copy"),e.preventDefault()}},{key:"handleClickCopyLinuxListModulesCommand",value:function(e){document.getElementById("linux-list-command").select(),document.execCommand("copy"),e.preventDefault()}},{key:"handleUserNeedsChange",value:function(e){var t=e.target.value;this.setState({userNeeds:t})}},{key:"render",value:function(){var e,t=this.state.userNeeds,a=[];this.state.vendors.forEach(function(e,t){var n=e.organization+" "+e.product,o=l.a.createElement("option",{value:t,key:t},n);a.push(o)});var n=this.state.vendors[this.state.selectedVendorIndex],o=n.jdk_download_link,r=this.state.jreIncludedModules,c=this.state.jreExcludedModules,s="",d=[];r.forEach(function(e,t){s+=e,t<r.length-1&&(s+=",");var a=l.a.createElement("option",{key:t,value:e,className:"font-mono",title:e},e);d.push(a)});var m=this.state.optionAdditionalModules.trim(),u="";""===s&&""===m||(u=" --add-modules ",""!==s&&(u+=s),""!==s&&""!==m&&(u+=","),""!==m&&(u+=m));var h=[];c.forEach(function(e,t){var a=l.a.createElement("option",{key:t,value:e,className:"font-mono",title:e},e);h.push(a)});var b="jre",E=this.state.jdkVersion;""!=E&&(b+="-"+E);var p=b.toLowerCase().replace(/[^a-z0-9.]/g,"-"),g="--output "+p,v=this.state.optionCompressionType,f=this.state.optionExcludeHeaderFiles,k=this.state.optionExcludeManPages,x=this.state.optionBindServices,y=this.state.optionJdkBinPath.trim(),w=this.state.optionModulePath.trim(),C="";f&&(C=" --no-header-files");var N="";k&&(N=" --no-man-pages");var j="";x&&(j=" --bind-services");var M="";""!==w&&(M=" --module-path "+w);var J=y+"/jlink "+g+(" --compress="+v)+C+N+j+M+u;return l.a.createElement("div",null,l.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-blue p-3 px-6"},l.a.createElement("div",{className:"flex items-center flex-no-shrink text-white mr-6"},l.a.createElement("svg",{className:"h-8 w-8 mr-2",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),l.a.createElement("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),l.a.createElement("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),l.a.createElement("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),l.a.createElement("line",{x1:"14",y1:"1",x2:"14",y2:"4"})),l.a.createElement("a",{href:"https://justinmahar.github.io/easyjre/",className:"no-underline inline-block text-white"},l.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"EasyJRE"))),l.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},l.a.createElement("div",{className:"text-sm lg:flex-grow"},l.a.createElement("a",{href:"https://justinmahar.github.io/easyjre/",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 no-underline hover:underline"},"Home")),l.a.createElement("div",{className:"mt-4 lg:mt-0"},l.a.createElement("a",{className:"block lg:inline-block lg:mt-0 mr-4 github-button",href:"https://github.com/justinmahar/easyjre/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"false","aria-label":"Fork justinmahar/easyjre on GitHub"},"Fork")," ",l.a.createElement("a",{className:"block lg:inline-block lg:mt-0 mr-4 github-button",href:"https://github.com/justinmahar/easyjre","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star justinmahar/easyjre on GitHub"},"Star")))),l.a.createElement("div",{className:"text-center container mx-auto px-4"},l.a.createElement("h1",{className:"py-12"},"Use EasyJRE to create an OpenJDK JRE easily with ",l.a.createElement("code",null,"jlink"),"!"),l.a.createElement("h2",null,"What do you need?"),l.a.createElement("ul",{className:"list-reset m-4 border border-grey md:w-3/5 mx-auto p-10 shadow-md bg-blue-lightest"},l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"needs",id:"need-quick",value:"need-quick",checked:"need-quick"===t,onChange:this.handleUserNeedsChange.bind(this)})," ",l.a.createElement("label",{htmlFor:"need-quick",className:"text-sm font-bold text-black"},"I just want a lightweight (~40-60 MB) standard Java SE JRE for a particular JDK. Quick and painless.")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"needs",id:"need-list",value:"need-list",checked:"need-list"===t,onChange:this.handleUserNeedsChange.bind(this)})," ",l.a.createElement("label",{htmlFor:"need-list",className:"text-sm font-bold text-black"},"Let me pick and choose from a list which JDK modules are included in my JRE.")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"needs",id:"need-custom",value:"need-custom",checked:"need-custom"===t,onChange:this.handleUserNeedsChange.bind(this)})," ",l.a.createElement("label",{htmlFor:"need-custom",className:"text-sm font-bold text-black"},"I know exactly which modules I need to include in my JRE. I don't need to see a list.")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",name:"needs",id:"need-control",value:"need-control",checked:"need-control"===t,onChange:this.handleUserNeedsChange.bind(this)})," ",l.a.createElement("label",{htmlFor:"need-control",className:"text-sm font-bold text-black"},"I want total control. Show me all the options!"))),l.a.createElement("br",null),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("h4",null,"Select, download, and unpack your desired JDK (9 or greater):"),l.a.createElement("br",null),l.a.createElement("select",{onChange:this.handleProductChange.bind(this),className:"rounded shadow border"},a)," ",l.a.createElement("a",{href:o,target:"_new",className:"inline-block no-underline bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"},"Download JDK \xbb"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("br",null),"need-custom"!==t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement("h4",null,"Copy a list of the available JDK modules by running the following command"," ",l.a.createElement("span",{className:"underline"},"in the JDK bin folder"),":"),l.a.createElement("br",null),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",{className:"my-2"},"Windows:"," ",l.a.createElement("input",{type:"text",className:"font-mono roman border inline-block w-1/4",id:"windows-list-command",value:".\\java --list-modules | clip",readOnly:!0})," ",l.a.createElement("button",{className:"inline-block border bg-grey-lighter p-1",onClick:this.handleClickCopyWindowsListModulesCommand.bind(this)},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"#000000",fillRule:"evenodd"},l.a.createElement("g",{id:"icon-shape"},l.a.createElement("path",{d:"M12.9728369,2.59456737 C12.7749064,1.12946324 11.5193533,0 10,0 C8.48064666,0 7.2250936,1.12946324 7.02716314,2.59456737 L5,3 L5,4 L3.99406028,4 C2.89451376,4 2,4.8927712 2,5.99406028 L2,18.0059397 C2,19.1054862 2.8927712,20 3.99406028,20 L16.0059397,20 C17.1054862,20 18,19.1072288 18,18.0059397 L18,5.99406028 C18,4.89451376 17.1072288,4 16.0059397,4 L15,4 L15,3 L12.9728369,2.59456737 Z M5,6 L4,6 L4,18 L16,18 L16,6 L15,6 L15,7 L5,7 L5,6 Z M10,4 C10.5522847,4 11,3.55228475 11,3 C11,2.44771525 10.5522847,2 10,2 C9.44771525,2 9,2.44771525 9,3 C9,3.55228475 9.44771525,4 10,4 Z"})))))),l.a.createElement("li",null,"Linux/OSX:"," ",l.a.createElement("input",{type:"text",className:"font-mono roman border inline-block w-1/4",id:"linux-list-command",value:"./java --list-modules | pbcopy",readOnly:!0})," ",l.a.createElement("button",{className:"inline-block border bg-grey-lighter p-1",onClick:this.handleClickCopyLinuxListModulesCommand.bind(this)},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"#000000",fillRule:"evenodd"},l.a.createElement("g",{id:"icon-shape"},l.a.createElement("path",{d:"M12.9728369,2.59456737 C12.7749064,1.12946324 11.5193533,0 10,0 C8.48064666,0 7.2250936,1.12946324 7.02716314,2.59456737 L5,3 L5,4 L3.99406028,4 C2.89451376,4 2,4.8927712 2,5.99406028 L2,18.0059397 C2,19.1054862 2.8927712,20 3.99406028,20 L16.0059397,20 C17.1054862,20 18,19.1072288 18,18.0059397 L18,5.99406028 C18,4.89451376 17.1072288,4 16.0059397,4 L15,4 L15,3 L12.9728369,2.59456737 Z M5,6 L4,6 L4,18 L16,18 L16,6 L15,6 L15,7 L5,7 L5,6 Z M10,4 C10.5522847,4 11,3.55228475 11,3 C11,2.44771525 10.5522847,2 10,2 C9.44771525,2 9,2.44771525 9,3 C9,3.55228475 9.44771525,4 10,4 Z"}))))),l.a.createElement("button",null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("h4",null,"Paste the modules here: "),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("button",{className:"bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded",onClick:this.handlePasteClick.bind(this)},"Paste"))),E&&l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("span",{className:"text-xs text-green font-bold"}," ","JDK ",E," \u2713")),l.a.createElement("br",null)))),l.a.createElement("br",null),"need-quick"!==t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Customize Your"," ",n.organization+" "+n.product," JRE"),l.a.createElement("br",null),"need-custom"!==t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,"JDK Root Modules"),l.a.createElement("br",null),""!==E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"text-sm italic"},"The JDK comes with many root modules which contain the JDK core classes. The modules prefixed with"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jdk.")," ","are typically not needed for a production JRE. Below, all non-JDK modules have been included in the JRE. This will get you up and running quickly without needing to use an entire JDK."),l.a.createElement("br",null),l.a.createElement("p",{className:"text-sm italic"},"Feel free to include or exclude any modules you might or might not need. For instance, you can use the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jdeps")," ","command on your Java classes to narrow down which modules you actually need to include."),l.a.createElement("br",null),l.a.createElement("p",{className:"text-sm italic"},"There is another section below for adding additional modules (such as custom ones, or manually specifying JDK ones) to the JRE."),l.a.createElement("br",null),l.a.createElement("h4",null,"Included JDK Root Modules:"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("select",{id:"jre-included-modules",size:"8",className:"rounded shadow border"},d),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded",onClick:this.handleExcludeClick.bind(this)},"Exclude \u2193")),l.a.createElement("br",null),l.a.createElement("h4",null,"Excluded JDK Root Modules:"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("select",{id:"jre-excluded-modules",size:"8",className:"rounded shadow border"},h),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded",onClick:this.handleIncludeClick.bind(this)},"Include \u2191"))),!E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"font-bold border p-1 inline-block text-red"},"Please paste your JDK modules above to customize which root modules are included in the JRE. Ignore this if you'd like to add them manually below.")),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("h5",null,"Manually Specifed Modules"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"Specify any modules you'd like added here, such as your custom ones. Comma-separate the values and don't use spaces."),l.a.createElement("br",null),l.a.createElement("p",{className:"text-sm italic"},"You can specify root JDK modules (such as"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"java.base"),") here manually if you'd like."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"additional-modules"},"Manually Specifed Modules:"," "),l.a.createElement("input",(e={id:"additional-modules",type:"text",value:"",placeholder:"my.mod,other.mod,etc"},Object(i.a)(e,"value",m),Object(i.a)(e,"className","shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"),Object(i.a)(e,"onChange",this.handleAdditionalModulesChange.bind(this)),e))),l.a.createElement("br",null),l.a.createElement("h5",null,"Module Path"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"The module path is a semicolon-separated list of paths where"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jlink")," ","will search for modules. They can be relative or absolute, and can use environment variables. JDK modules are typically in the JDK directory"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jmods"),". If you run"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jlink")," ","from"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"bin"),", then"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"../jmods")," ","will work just fine. You can optionally add your own module paths after that, separated by a semicolon."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"module-path"},"Module Path: "),l.a.createElement("input",{id:"module-path",type:"text",value:w,className:"shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",onChange:this.handleModulePathChange.bind(this)})),l.a.createElement("br",null),"need-control"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,"Other Options"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"Choose the level of compression. ZIP compression offers a significant reduction in size with a small hit to class loading performance."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"compression",title:"Enable compression of resources"},"Compression:"," "),l.a.createElement("select",{id:"compression",value:v,title:"Enable compression of resources",className:"rounded shadow border",onChange:this.handleCompressionChange.bind(this)},l.a.createElement("option",{value:"0"},"No compression"),l.a.createElement("option",{value:"1"},"Constant string sharing"),l.a.createElement("option",{value:"2"},"ZIP"))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"Whether or not to exclude header files from the JRE."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"headers-excluded"},"Exclude Header Files"," "),l.a.createElement("input",{id:"headers-excluded",type:"checkbox",checked:f,onChange:this.handleExcludeHeaderFilesChange.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"Whether or not to exclude man pages from the JRE."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"man-pages-excluded"},"Exclude Man Pages"," "),l.a.createElement("input",{id:"man-pages-excluded",type:"checkbox",checked:k,onChange:this.handleExcludeManPagesChange.bind(this)})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"Whether or not to link service provider modules and their dependencies."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"bind-services",title:"Link service provider modules and their dependencies."},"Bind Services"," "),l.a.createElement("input",{id:"bind-services",type:"checkbox",title:"Link service provider modules and their dependencies.",checked:x,onChange:this.handleBindServicesChange.bind(this)})),l.a.createElement("br",null),l.a.createElement("h5",null,"JDK Bin Path"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm italic"},"Specify the path to the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"bin")," ","folder of your JDK. You can use an environment variable here, but it's safer to execute"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jlink")," ","directly from the ",n.product," JDK"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"bin")," ","to prevent using an incorrect JDK that might be on your"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"PATH"),". The safest way is to leave this as"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"."),", navigate to the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"bin")," ","directory, and run the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jlink")," ","command copied from below. If you change this, be sure to also change the Module Path above."),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"jdk-bin-path"},"JDK Bin Path: "),l.a.createElement("input",{id:"jdk-bin-path",type:"text",value:y,className:"shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",onChange:this.handleJdkBinPathChange.bind(this)})))),("need-quick"===t&&!!E||"need-custom"===t&&!!m||"need-list"===t&&(!!E||!!m)||"need-control"===t)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("h4",null,"Copy the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"jlink")," ","command below and run it in the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},"bin")," ","directory of the JDK:"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("textarea",{id:"jlink-command-textarea",value:J,readOnly:!0,cols:"80",rows:"8",className:"rounded shadow border font-mono text-xs",onClick:this.handleJlinkCommandTextareaClick})),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleCopyButtonClick.bind(this),className:"no-underline bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"},"Copy")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Your JRE will be created in the"," ",l.a.createElement("code",{className:"font-mono roman border inline-block"},p)," ","folder of your current working directory!"),l.a.createElement("br",null),l.a.createElement("p",{className:"text-sm italic"},"If not, be sure you are running this command with the correct privileges!"),l.a.createElement("br",null),l.a.createElement("p",{className:"text-lg font-bold border-t pt-4 mt-4"},"If this project helped you, please"," ",l.a.createElement("a",{href:"https://github.com/justinmahar/easyjre",className:"text-blue no-underline hover:underline"},"Star it on GitHub")," ","so others can find it. :)")),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("footer",{className:"text-center py-6 mt-2 bg-grey-darker text-white text-xs"},"Copyright \xa9 ",(new Date).getFullYear()," ",l.a.createElement("a",{href:"https://github.com/justinmahar",className:"text-blue-lighter no-underline hover:underline"},"Justin Mahar")," ","\u2022"," ",l.a.createElement("a",{href:"https://opensource.org/licenses/MIT",className:"text-blue-lighter no-underline hover:underline"},"MIT License")," ","\u2022"," ",l.a.createElement("a",{href:"https://github.com/justinmahar/easyjre",className:"text-blue-lighter no-underline hover:underline"},"EasyJRE on GitHub")," ","\u2022 Coffee Icon By"," ",l.a.createElement("a",{href:"https://feathericons.com/",className:"text-blue-lighter no-underline hover:underline"},"FeatherIcons")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.94387675.chunk.js.map