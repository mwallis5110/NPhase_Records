(this["webpackJsonpnphase-records"]=this["webpackJsonpnphase-records"]||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),r=a(52),s=a.n(r),n=a(59),o=(a(66),a(53)),l=a(34),d=(a(67),a(2));function u(){return Object(d.jsxs)("div",{className:"socialIcons",children:[Object(d.jsx)("a",{href:"",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(o.a,{className:"iTunesIcon"})}),Object(d.jsx)("a",{href:"https://www.instagram.com/Nphaserecords/?hl=en",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(l.a,{className:"instagramIcon"})}),Object(d.jsx)("a",{href:"https://twitter.com/nphaserecords",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(l.b,{className:"twitterIcon"})})]})}var j=a(6),m=a.p+"static/media/logoCircle.ee9c35f4.png",h=[{title:"First Page",anchor:"#firstPage"},{title:"Beats",anchor:"#beatsId"},{title:"Mixes",anchor:"#mixesId"},{title:"Services",anchor:"#servicesId"},{title:"About Us",anchor:"#aboutUsId"},{title:"Get In Touch",anchor:"#contactId"}],b=a(56);a(69);function f(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"pagesDropdown",children:[Object(d.jsxs)("button",{className:"".concat(a?"expandedDropdownButton":"dropdownButton"),href:"/","aria-expanded":a?"true":"false",onClick:function(){return c((function(e){return!e}))},children:[Object(d.jsx)("img",{id:"navLogo",src:m,alt:"Nav bar logo, takes user to top of page"}),Object(d.jsx)(b.a,{className:"".concat(a?"noshow ":"menuIcon")})]}),Object(d.jsx)("ul",{className:"dropdown ".concat(a?"links":"noshow"),dropdown:a,children:h.map((function(e,t){return Object(d.jsx)("li",{className:"menuItems",onClick:function(){document.querySelector(e.anchor).scrollIntoView({behavior:"smooth",block:"start"})},children:e.title},t)}))})]})}a(70);function p(){return Object(d.jsxs)("div",{className:"firstPageWrapper",id:"firstPage",children:[Object(d.jsx)("div",{className:"leftSideNav",children:Object(d.jsx)(f,{})}),Object(d.jsx)("div",{className:"rightSideNav",children:Object(d.jsx)(u,{})})]})}a(71);function x(){return Object(d.jsxs)("div",{className:"beatsWrapper",id:"beatsId",children:[Object(d.jsx)("h1",{className:"beatsTitle",children:"Beats"}),Object(d.jsx)("div",{children:Object(d.jsx)("iframe",{id:"mfs_html5",title:"Beats",src:"https://airbit.com/widgets/html5/?uid=670189&config=1365478",width:"100%",height:"510",frameborder:"0",scrolling:"no"})})]})}var g=a(117),v=a(115),O=a(113),N=a(118),w=a(114),y=[{id:1,title:"Track 1 (Before)",track:a.p+"static/media/BabyElephantWalk60.258f1e74.wav"},{id:2,title:"Track 1 (After)",track:a.p+"static/media/CantinaBand3.04c261ab.wav"},{id:3,title:"Track 2 (Before)",track:a.p+"static/media/CantinaBand60.ead6848d.wav"},{id:4,title:"Track 2 (After)",track:a.p+"static/media/Fanfare60.15fa3633.wav"},{id:5,title:"Track 3 (Before)",track:a.p+"static/media/gettysburg.b86f0797.wav"},{id:6,title:"Track 3 (After)",track:a.p+"static/media/gettysburg10.66e712e0.wav"},{id:7,title:"Track 4 (Before)",track:a.p+"static/media/ImperialMarch60.162a3cf8.wav"},{id:8,title:"Track 4 (After)",track:a.p+"static/media/PinkPanther30.fe0e4500.wav"},{id:9,title:"Track 5 (Before)",track:a.p+"static/media/PinkPanther60.e086579a.wav"},{id:10,title:"Track 5 (After)",track:a.p+"static/media/preamble10.c71d0c24.wav"}],k=a(46);a(72);function T(){var e,t,a=Object(i.useState)(y[0].track),c=Object(j.a)(a,2),r=c[0],s=c[1],n=Object(i.useState)(y.title),o=Object(j.a)(n,2),l=o[0],u=o[1],m=Object(i.useState)(!1),h=Object(j.a)(m,2),b=h[0],f=h[1],p=y;Object(i.useEffect)((function(){var e=document.querySelectorAll(".mixes");function t(){e.forEach((function(e){return e.classList.remove("active")})),this.classList.add("active")}e.forEach((function(e){return e.addEventListener("click",t)}))}),[]);var x=Object(i.useState)(!1),T=Object(j.a)(x,2),S=T[0],I=T[1],P=Object(i.useState)(0),B=Object(j.a)(P,2),W=B[0],A=B[1],M=Object(i.useState)(0),C=Object(j.a)(M,2),R=C[0],q=C[1],E=Object(i.useRef)(),L=Object(i.useRef)(),F=Object(i.useRef)();Object(i.useEffect)((function(){var e=Math.floor(E.current.duration);A(e),L.current.max=e}),[null===E||void 0===E||null===(e=E.current)||void 0===e?void 0:e.loadedmetada,null===E||void 0===E||null===(t=E.current)||void 0===t?void 0:t.readyState]);var _=function e(){L.current.value=E.current.currentTime,D(),F.current=requestAnimationFrame(e)},U=function(e){var t=Math.floor(e/60),a=t<10?"0".concat(t):"".concat(t),i=Math.floor(e%60),c=i<10?"0".concat(i):"".concat(i);return"".concat(a," : ").concat(c)},D=function(){L.current.style.setProperty("--played-width","".concat(L.current.value/W*100,"%")),q(L.current.value)};return Object(d.jsxs)(g.a,{id:"mixesId",maxWidth:!1,sx:{width:"90%",marginLeft:"auto",marginRight:"auto",paddingRight:"0px",paddingLeft:"0px",background:"none"},children:[Object(d.jsx)("h1",{className:"mixesTitle",children:"Mixes"}),Object(d.jsx)("h2",{className:"mixesSubtitle",children:"A sample of mixes, before and after our team has mastered them. Click to play."}),Object(d.jsx)(v.a,{container:!0,children:p&&p.map((function(e,t){return Object(d.jsx)(v.a,{item:!0,xs:12,md:6,className:"mix",onClick:function(){return t=e.track,a=e.title,s(t),u(a),void f(!0);var t,a},sx:{height:"50px",background:"linear-gradient(#070707, #323236)",marginBottom:"15px",borderRadius:"10px",alignItems:"center",opacity:.9,display:"flex",cursor:"pointer"},children:Object(d.jsx)(O.a,{direction:"row",sx:{display:"inline-flex",alignItems:"center",width:"100%",justifyContent:"align-left"},children:Object(d.jsx)(N.a,{sx:{color:"white",fontSize:"25px",minWidth:"100px",textAlign:"center",marginLeft:"auto",marginRight:"auto"},children:e.title})})},t)}))}),Object(d.jsx)("div",{className:"musicPlayer",children:Object(d.jsxs)("div",{className:"songAttributes",children:[Object(d.jsx)("audio",{src:r,preload:"metadata",ref:E,autoPlay:!0,changePlayPause:!0}),Object(d.jsxs)(O.a,{direction:"row",sx:{display:"flex",width:"100%",alignItems:"center"},children:[Object(d.jsx)(w.a,{onClick:function(){var e=S;I(!e),e?(E.current.pause(),cancelAnimationFrame(F.current)):(E.current.play(),F.current=requestAnimationFrame(_))},sx:{background:"linear-gradient(#070707, #323236)",color:"#e30613",float:"left",fontSize:"30px",marginTop:"20px",justifySelf:"left"},children:S?Object(d.jsx)("i",{children:Object(d.jsx)(k.a,{})}):Object(d.jsx)("i",{children:Object(d.jsx)(k.b,{})})}),Object(d.jsx)(N.a,{sx:{color:"white",fontSize:"40px",marginTop:"20px",alignItems:"center",justifySelf:"center"},children:l||"No Mix Selected"})]}),Object(d.jsxs)("div",{className:"bottom",children:[Object(d.jsx)("div",{className:"currentTime",children:U(R)}),Object(d.jsx)("input",{type:"range",className:"progressBar",ref:L,defaultValue:"0",onChange:function(){E.current.currentTime=L.current.value,L.current.style.setProperty("--played-width","".concat(L.current.value/W*100,"%")),q(L.current.value),D()},autoPlay:b}),Object(d.jsx)("div",{className:"duration",children:W&&!isNaN(W)&&U(W)?W&&!isNaN(W)&&U(W):"00:00"})]})]})})]})}var S=a.p+"static/media/mixing.375b8625.png",I=a.p+"static/media/recording.f05b14a2.png",P=a.p+"static/media/general.7526cd59.png",B=[{img:a.p+"static/media/headphones.62d1790b.png",alt:"Services",title:"",subtitle1:"We offer Production, Recording, and Mixing services for musicians, voice actors, and commercial sound recordings.",subtitle2:"In dedication to the entirety of the audio creation process, we provide assistance at any stage: from beginning steps of production and recording to the detailed refining of mastering sound. NPhase works with artists in many styles, genres, and mediums: singles, full albums, commercials, short films, podcasts, sound design, and voiceover and voice acting work."},{img:S,alt:"Mixing services",title:"Mixing & Mastering",subtitle1:"NPhase provides final mixing and mastering services, using Soundtoys 5, Fabfilter Suite, and Gulfoss EQ.",subtitle2:"Our certified audio engineers ensure your well-recorded audio translates properly whether it`s being played in the movie theater, car speaker, or your bluetooth headphones."},{img:I,alt:"Recording services",title:"Recording",subtitle1:"We offer multi-track recording in a relaxed environment.",subtitle2:"Whether we are working with instrumentalists, vocalists, or voice actors, NPhase provides the necessary equipment and knowledge to create high-quality recordings for your projects."},{img:P,alt:"Production services",title:"Production",subtitle1:"Our producers have experience in hip-hop, trap, pop, R&B, and EDM, as well as with commercial audio production.",subtitle2:"Using Native Instruments Komplete Ultimate and U.he Diva, NPhase producers make sure your project exceeds industry standards, while fulfilling your creative vision."}],W=a(36);a(77);function A(e){var t=e.autoPlayTime,a=void 0===t?6500:t,c=Object(i.useState)(0),r=Object(j.a)(c,2),s=r[0],n=r[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){n(s>=B.length-1?0:s+1)}),a);return function(){return clearTimeout(e)}})),Object(d.jsx)("div",{className:"imageSliderWrapper",children:Object(d.jsxs)("div",{className:"singleSlide",style:{backgroundImage:"url(".concat(B[s].img,")")},children:[Object(d.jsx)("div",{className:"leftButton",onClick:function(){s>0&&n(s-1)},children:Object(d.jsx)(W.a,{className:"arrowButton"})}),Object(d.jsxs)("div",{className:"center",children:[Object(d.jsx)("h3",{className:"title",children:B[s].title}),Object(d.jsxs)("h3",{className:"subTitle",children:[B[s].subtitle1,Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),B[s].subtitle2]})]}),Object(d.jsx)("div",{className:"rightButton",onClick:function(){s<B.length-1&&n(s+1)},children:Object(d.jsx)(W.b,{className:"arrowButton"})})]})})}a(78);function M(){return Object(d.jsxs)("div",{className:"servicesWrapper",id:"servicesId",children:[Object(d.jsx)("h1",{className:"servicesTitle",children:"Services"}),Object(d.jsx)(A,{})]})}a(79);function C(){return Object(d.jsxs)("div",{className:"companyBioWrapper",children:[Object(d.jsx)("h1",{className:"companyBioTitle",children:"Who We Are"}),Object(d.jsxs)("h3",{className:"companyBioText",children:["NPhase is an audio engineering collective of like-minded music producers and audio engineers, founded in Austin, TX. The collective works within several genres and mediums, providing artists with the resources to complete high quality audio projects.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"With over 20 years of combined production experience and certifications, NPhase members believe that great music is built on the foundation of good composition. We have aligned our individual goals as a collective, to build a body of work that is professional, enjoyable and equitable.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"We hope to share our commitment to strong technique, musical knowledge, and creativity in collaboration with other artists and creators."]})]})}a(80);function R(){return Object(d.jsx)("div",{className:"aboutUsWrapper",id:"aboutUsId",children:Object(d.jsx)(C,{})})}var q=a(58),E=a(47),L=a.n(E);a(91);function F(){var e=Object(i.useRef)();return Object(d.jsxs)("div",{className:"contactWrapper",children:[Object(d.jsx)("h1",{className:"contactTitle",id:"contactId",children:"Get In Touch"}),Object(d.jsx)("div",{className:"socialComponent",children:Object(d.jsx)(u,{})}),Object(d.jsxs)("div",{className:"formWrapper",children:[Object(d.jsx)("h4",{className:"contactText",children:"Interested in collaborating with NPhase Records?"}),Object(d.jsx)("h4",{className:"contactText",children:"Let us know what you`re working on, how far along you are, and what services you think you may need."}),Object(d.jsx)("h4",{className:"contactText",children:"We`ll contact you within 72 hours to begin our consultation process."}),Object(d.jsxs)("form",{className:"contactForm",ref:e,onSubmit:function(t){t.preventDefault(),q.a.sendForm("service_tegoswo","template_ozh1huy",e.current,"hOTuZfHLofJWCf3J9").then((function(e){t.target.reset(),console.log(e),L.a.fire({title:"Success!",text:"Message sent successfully. We'll contact you soon"})}),(function(e){console.log(e.text),L.a.fire({title:"Error",text:"An error occurred when sending the message. Please email us at Nphaseatx@gmail.com instead"})}))},children:[Object(d.jsx)("input",{id:"name",type:"text",name:"user_name",placeholder:"Name",required:!0}),Object(d.jsx)("input",{id:"email",type:"text",name:"user_email",placeholder:"Email Address",required:!0}),Object(d.jsx)("textarea",{id:"message",type:"text",name:"message",rows:"5",cols:"70",placeholder:"Message",required:!0}),Object(d.jsx)("input",{className:"submitButton",type:"submit",value:"Send"})]})]})]})}var _=a.p+"static/media/nphaseLogoAnimation.480785b5.mp4";a(92);function U(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,id:"mainVideo",children:Object(d.jsx)("source",{src:_,type:"video/mp4",alt:"Background animation of logo"})}),Object(d.jsxs)("div",{className:"pages",id:"pages",children:[Object(d.jsx)(p,{}),Object(d.jsx)(x,{}),Object(d.jsx)(T,{}),Object(d.jsx)(M,{}),Object(d.jsx)(R,{}),Object(d.jsx)(F,{})]})]})}s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(n.a,{children:Object(d.jsx)(U,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.218e266f.chunk.js.map