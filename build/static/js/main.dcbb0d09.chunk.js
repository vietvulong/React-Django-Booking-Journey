(this["webpackJsonpdjango-react-boilerplate"]=this["webpackJsonpdjango-react-boilerplate"]||[]).push([[0],{46:function(e,t,a){e.exports=a(97)},51:function(e,t,a){},52:function(e,t,a){},61:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(35),r=a.n(l),o=(a(51),a(36)),i=a(37),s=a(45),m=a(44),u=a(21),d=a(3),p=function(e){return e.children},f=a(8),b=a(14),h=a(2);a(52);function g(e){return c.a.createElement("div",Object.assign({onClick:e.onClick},e,{className:"rounded-circle text-center mb-0 circle-button d-flex align-items-center "+(e.clicked?"clicked-btn":"non-clicked-btn")}),c.a.createElement("p",{className:"font-weight-medium mx-auto mb-0 circleBtnFont"},e.name))}var E=a(38),w=(a(53),function(e){var t=Object(n.useState)(38),a=Object(h.a)(t,2),l=a[0],r=a[1],o=function(){var e=window.innerWidth;e<600?r(25):e>=600&&e<=768?r(28):e>=768&&e<=992?r(32):e>=992&&e<=1200&&r(36)};return Object(n.useEffect)((function(){return o(),window.addEventListener("resize",o),function(){}})),c.a.createElement("div",{style:{width:l,height:l}},c.a.createElement(E.a,{strokeWidth:20,value:e.percentage,styles:{root:{},path:{stroke:"green",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transform:"rotate(0turn)",transformOrigin:"center center"},trail:{stroke:"#d0d0d0",strokeLinecap:"butt",transform:"rotate(0.25turn)",transformOrigin:"center center"},text:{fill:"#f88",fontSize:"16px"},background:{fill:"#3e98c7"}}}))}),v=a(39),k=(a(54),function(e){var t=Object(n.useState)(0),a=Object(h.a)(t,2),l=a[0],r=a[1],o=function(){var e=window.innerWidth;r(e<600?3:e>=600&&e<=768?2:e>=768&&e<=992?1:0)};Object(n.useEffect)((function(){o(),window.addEventListener("resize",o)}));var i={size:0===l?110:1===l?95:2===l?85:75,minSize:0===l?110:1===l?95:2===l?85:75,gutter:1,provideProps:!0,numCols:3,fringeWidth:160,yRadius:140,xRadius:140,cornerRadius:10,showGuides:!1,compact:!0,gravitation:5};return c.a.createElement(v.a,{options:i,className:"myBubbleUI",style:{height:"100%"}},e.children)}),y=a(40),N=a.n(y),j=function(e){return c.a.createElement("label",{className:"d-flex align-items-center"},c.a.createElement("span",{className:"mr-4",style:{fontSize:"1rem",fontWeight:"400"}},"Multiple Choice"),c.a.createElement(N.a,{onChange:e.onChange,checked:e.checked,offColor:"#ffcfcc",onColor:"#8ff28d",checkedIcon:"",uncheckedIcon:"",height:15,width:25}))},x=a(15),O=a.n(x),C=a(41),D=(a(61),a(62),a(63),a(26),a(64),a(10)),S=a.n(D),M=a(12),_=a.n(M),L=a(1),W=a.n(L),B="https://natoosa.com",T=a(42),A=a.n(T),F=function(e){return c.a.createElement("div",{className:"d-flex justify-content-center align-items-center px-2 py-1 my-1 mx-1",style:{backgroundColor:"#00DAF8",borderRadius:"0.7rem",color:"white",fontSize:"0.8rem",height:"1.5rem"}},c.a.createElement("span",{className:""},e.name),"1"===e.case?c.a.createElement("span",{className:"pl-2",onClick:e.onClick,style:{cursor:"default"}}," \xd7"):"")},R=(a(85),function(e){Object(n.useRef)(null);var t=e.item,a=Object(n.useState)(0),l=Object(h.a)(a,2),r=l[0],o=l[1];return c.a.createElement("div",{className:"mx-auto w-100 d-flex my-2 custom-card-border"},c.a.createElement("div",{className:"d-flex align-items-center px-2 pb-2 pic-wrapper"},c.a.createElement("img",{src:t.picture,className:"pic",alt:"pic"})),c.a.createElement("div",{className:"custom-card-body"},c.a.createElement("div",{className:"d-flex align-items-center justify-content-between h-25 custom-card-body-header"},c.a.createElement("p",{className:"pl-4 custom-card-title"},t.city_name),c.a.createElement("div",{className:"d-flex align-items-center pr-3"},c.a.createElement("div",null,c.a.createElement("p",{className:"raty-header"},"Did you like this recommendataion?"),c.a.createElement("div",{className:"d-flex justify-content-center align-items-centerm",style:{marginTop:"-15px"}},c.a.createElement(A.a,{count:5,onChange:function(a){o(a),function(t,a){var n={userId:e.userId,users_rating:a,city_name:t};_.a.post(B+"/api-vacation/add-rating-matching",n,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e})).catch((function(e){return console.log("Login error: "+e)}))}(t.city_name,a)},value:r,size:30,edit:!0,activeColor:"#00DAF8"}))),c.a.createElement("p",{className:"pl-4",style:{color:"#00B227",fontSize:"0.9rem",fontWeight:"500",margin:"0"}},"97% Match"))),c.a.createElement("div",{className:"h-75 px-2",style:{paddingTop:"5px"}},c.a.createElement("div",{className:"px-4"},c.a.createElement("p",{className:"custom-card-body-description"},t.short_description)),c.a.createElement("div",{className:"d-flex align-items-center my-2"},c.a.createElement("i",{className:"fa fa-money",style:{fontSize:"1.5rem"}}),c.a.createElement("p",{className:"pl-3 card-body-icon-title"},"Budget: ",c.a.createElement("span",{className:"font-weight-bold"},1===t.budget_low?"Low":"",(1===t.budget_low&&1===t.budget_normal||1===t.budget_high&&1===t.budget_low)&&" - ",1===t.budget_normal?"Normal":"",1===t.budget_high&&1===t.budget_normal&&" - ",1===t.budget_high?"High":""))),c.a.createElement("div",{className:"d-flex align-items-center my-2"},c.a.createElement("i",{className:"fa fa-home",style:{fontSize:"1.5rem"}}),c.a.createElement("p",{className:"pl-3 card-body-icon-title"},"Known Sites: ",c.a.createElement("span",{className:"font-weight-bold"},t.sites))),c.a.createElement("div",{className:"d-flex align-items-center my-2"},c.a.createElement("i",{className:"fa fa-calendar",style:{fontSize:"1.5rem"}}),c.a.createElement("p",{className:"pl-3 card-body-icon-title"},"Best time to visit: ",c.a.createElement("span",{className:"font-weight-bold"},function(e){for(var t=["january","february","march","april","may","june","july","august","september","october","november","december"],a=W.a.pick(e,["january","february","march","april","may","june","july","august","september","october","november","december"]),n=[],l=0;l<12;l++){if(0===l)var r=[];if(1===a[t[l]]?r.push(t[l]):0!==r.length&&(n.push(r),r=[]),12===r.length){n.push(r);break}}return n.map((function(e,t){return c.a.createElement("span",{className:"pr-3 best-time-content",key:t},W.a.startCase(e[0])+(e.length>1?" - "+W.a.startCase(e[e.length-1]):""))}))}(t)))),c.a.createElement("div",{className:"d-flex align-items-center flex-wrap"},function(e){var t=W.a.pickBy(e,(function(e,t){return 1===e})),a=W.a.omit(t,["solo","couple","friends","family","weekend","long_weekend","weekish","midweek","two_weeks","three_weeks","four_weeks","five_weeks","other","one_passengers","two_passengers","three_passengers","four_passengers","five_passengers","six_passengers","one_weeks","comp_allgirls","comp_allboys","comp_elderly","comp_kids_babies","id","january","february","march","april","may","june","july","august","september","october","november","december","budget_low","budget_normal","budget_high","holidays","surprise"]);return W.a.keys(a).map((function(e,t){return c.a.createElement(F,{name:W.a.startCase(W.a.camelCase(e))+(W.a.isNumber(e)?1===e?" person":" people":""),key:t,case:"2"})}))}(t)))))}),Y=(a(86),function(){var e=Object(n.useState)("Match"),t=Object(h.a)(e,2),a=t[0],l=t[1],r=function(e){l(e)};return c.a.createElement("div",{className:"d-flex align-items-center px-3 py-2"},c.a.createElement("label",{htmlFor:"category",className:"pr-4 filter-label"},"SORT BY"),c.a.createElement("div",{class:"selectsort dropdown"},c.a.createElement("button",{class:"btn bg-white dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a,c.a.createElement("i",{class:"fa fa-chevron-down ml-2",style:{fontSize:10,fontWeight:100}})),c.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},c.a.createElement("a",{class:"dropdown-item",onClick:function(){return r("Match")},style:{borderBottom:"1px solid lightgray"}},"Match"),c.a.createElement("a",{class:"dropdown-item",onClick:function(){return r("Price")}},"Price"))))}),I=function(e){var t=e.who,a=e.number,n=e.howlong,l=e.themes,r=e.onClick,o=function(e){return e.map((function(e,t){return c.a.createElement(F,{name:e+(W.a.isNumber(e)?1===e?" person":" people":""),key:t,onClick:function(){return r(e)},case:"1"})}))};return c.a.createElement("div",{className:"item-spacing"},c.a.createElement("div",{className:"tag-area"},c.a.createElement(O.a,{options:{wheelSpeed:.2,wheelPropagation:!!(W.a.isEmpty(t)&&W.a.isEmpty(a)&&W.a.isEmpty(l)&&W.a.isEmpty(n))}},c.a.createElement("div",{className:"d-flex flex-wrap pt-2 px-2"},o(t),o(a),o(l),o(n)))))},z=function(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),l=Object(n.useState)([]),r=Object(h.a)(l,2),o=r[0],i=r[1],s=Object(n.useState)(),m=Object(h.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(),b=Object(h.a)(p,2),g=b[0],E=b[1],w=Object(n.useState)(e.who),v=Object(h.a)(w,2),k=v[0],y=v[1],N=Object(n.useState)(e.number),j=Object(h.a)(N,2),x=j[0],D=j[1],M=Object(n.useState)(e.theme),L=Object(h.a)(M,2),T=L[0],A=L[1],F=Object(n.useState)(e.howlong),z=Object(h.a)(F,2),H=z[0],P=z[1],G=Object(n.useState)([]),V=Object(h.a)(G,2),J=V[0],K=V[1],U=Object(n.useState)([]),Q=Object(h.a)(U,2),$=Q[0],q=Q[1],X=Object(n.useState)([]),Z=Object(h.a)(X,2),ee=Z[0],te=Z[1],ae={"Other Themes":["Adventures","Shopping","Romantic","Ski","Remote","Wildlife","Hiking","Road Trip","Festivals","Nightlife","Holidays","Vivid","Cultural Experience","Camping","Surfing","Honeymoon","Scuba Diving","Beach","City Life","Nature","Countryside","Surprise","Other"],"How Long":["Weekend","Midweek","Long Weekend","Weekish","2 Weeks","3 Weeks","4 Weeks"],"How Many":[1,2,3,4,5,6],"Who is traveling":["Solo","Couple","Friends","Family"]},ne=function(e){W.a.includes(o,e)?(W.a.remove(o,(function(t){return t===e})),i(W.a.cloneDeep(o))):i([].concat(Object(f.a)(o),[e]))},ce=Object(n.useState)(!1),le=Object(h.a)(ce,2),re=le[0],oe=le[1],ie=function(){_.a.post(B+"/api-vacation/getCityInfo",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.data})).then((function(e){q(e),te(W.a.slice(e,0,4)),console.log(e)})).catch((function(e){return console.log("Login error: "+e)}))};Object(n.useEffect)((function(){ie()}),[]);var se=function(e){switch(e){case 0:i([]),d(),E(),a.current.setStartDate(new Date),a.current.setEndDate(new Date),y([]),D([]),P([]),A([]),K([]);break;case 1:d(),E(),a.current.setStartDate(new Date),a.current.setEndDate(new Date);break;case 2:y([]),D([]),P([]),A([]);break;case 3:K([])}},me=function(e,t,a){var n=e.target,c=n.name,l=n.checked;"traveler"===t&&l&&!W.a.includes(J,c)&&K([].concat(Object(f.a)(J),[c])),"traveler"===t&&!l&&W.a.includes(J,c)&&(W.a.remove(J,(function(e){return e===c})),K(W.a.cloneDeep(J))),"themes"===a&&"tagDropDown"===t&&l&&!W.a.includes(T,c)&&A([].concat(Object(f.a)(T),[c])),"themes"===a&&"tagDropDown"===t&&!l&&W.a.includes(T,c)&&(W.a.remove(T,(function(e){return e===c})),A(W.a.cloneDeep(T))),"who"===a&&"tagDropDown"===t&&l&&!W.a.includes(k,c)&&y([].concat(Object(f.a)(k),[c])),"who"===a&&"tagDropDown"===t&&!l&&W.a.includes(k,c)&&(W.a.remove(k,(function(e){return e===c})),y(W.a.cloneDeep(k))),"howLong"!==a||"tagDropDown"!==t||W.a.includes(H,c)||P([].concat(Object(f.a)(H),[c])),"howLong"===a&&"tagDropDown"===t&&W.a.includes(H,c)&&(W.a.remove(H,(function(e){return e===c})),P(W.a.cloneDeep(H))),"howMany"===a&&"tagDropDown"===t&&l&&!W.a.includes(x,Number(c))&&D([].concat(Object(f.a)(x),[Number(c)])),"howMany"===a&&"tagDropDown"===t&&!l&&W.a.includes(x,Number(c))&&(W.a.remove(x,(function(e){return Number(e)===Number(c)})),D(W.a.cloneDeep(x)))};return c.a.createElement("div",{className:"w-full"},c.a.createElement("div",{style:{minWidth:"760px"}},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",{className:"page-title"},"Results (",ee.length,")"),c.a.createElement(Y,null)),c.a.createElement("hr",{className:"title-underline"})),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"pt-3 select-box"},c.a.createElement("div",{className:"px-1 pb-2"},c.a.createElement("div",{className:"d-flex px-2 justify-content-between align-items-center"},c.a.createElement("p",{className:"select-header-title"},"Increase Matching"),c.a.createElement("p",{className:"clear",onClick:function(){return se(0)}},"CLEAR ALL")),c.a.createElement("hr",{className:"select-title-underline"}),c.a.createElement("div",{className:"select-area"},c.a.createElement(O.a,{options:{wheelSpeed:.2,wheelPropagation:!1},containerRef:function(e){return t.current=e}},c.a.createElement("div",{className:"mb-4",style:{width:"95%"}},c.a.createElement("div",{className:"px-2 pb-2"},c.a.createElement("p",{className:"select-item-name"},"Budget")),c.a.createElement("div",{className:"px-2 item-spacing"},c.a.createElement("div",{className:"btn-group d-flex flex-wrap",role:"group","aria-label":"Basic example"},c.a.createElement("button",{type:"button",className:"btn "+(o.includes("low")?"clicked":""),onClick:function(){return ne("low")}},"Low"),c.a.createElement("button",{type:"button",className:"btn "+(o.includes("normal")?"clicked":""),onClick:function(){return ne("normal")}},"Normal"),c.a.createElement("button",{type:"button",className:"btn "+(o.includes("high")?"clicked":""),onClick:function(){return ne("high")}},"High"))),c.a.createElement("div",{className:"d-flex px-2 pb-2 justify-content-between align-items-center"},c.a.createElement("p",{className:"select-item-name"},"Time Frame"),c.a.createElement("p",{className:"clear",onClick:function(){return se(1)}},"CLEAR")),c.a.createElement("div",{className:"px-2 item-spacing"},c.a.createElement(C.a,{initialSettings:{startDate:u,endDate:g,minDate:new Date,applyButtonClasses:"applyButton",cancelButtonClasses:"cancelButton",oldStartDate:!1},onCallback:function(e,t,a){d(e),E(t)},autoApply:!0,ref:a},c.a.createElement("div",null,c.a.createElement("button",{className:"d-flex align-items-center date-range-btn"},c.a.createElement("img",{src:"static/images/calendarIcon.png",className:"mr-4",alt:"calendarIcon"})," ",u?S()(u).format("ddd, MMM D")+" - "+S()(g).format("ddd, MMM D"):"Can Start From - Need to Return By"," ")))),c.a.createElement("div",{className:"d-flex px-2 pb-2 justify-content-between align-items-center"},c.a.createElement("p",{className:"select-item-name"},"Vacation Tags"),c.a.createElement("p",{className:"clear",onClick:function(){return se(2)}},"CLEAR")),c.a.createElement("div",{className:"px-2 pb-2"},c.a.createElement("div",{className:"custom-dropDownParent",style:{position:"relative",width:"100%"}},c.a.createElement("button",{className:"tags",type:"button",onClick:function(){var e=t.current;e&&(e.scrollTop=e.clientHeight),oe(!re)}},"Tags"),re?c.a.createElement("div",{className:"custom-dropDownMenu pl-2"},c.a.createElement("div",{className:"w-100",style:{height:"200px"}},c.a.createElement(O.a,{style:{paddingLeft:"5px",paddingRight:"15px"},options:{wheelSpeed:.2,wheelPropagation:!1}},c.a.createElement("p",{className:"my-2 tagList-heading"},"Other Themes"),ae["Other Themes"].map((function(e,t){return c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox",key:t},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:e,id:e,checked:W.a.includes(T,e),onChange:function(e){return me(e,"tagDropDown","themes")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:e},e))})),c.a.createElement("p",{className:"my-2 tagList-heading"},"How Long"),ae["How Long"].map((function(e,t){return c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox",key:t},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:e,id:e+"howlong",checked:W.a.includes(H,e),onChange:function(e){return me(e,"tagDropDown","howLong")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:e+"howlong"},e))})),c.a.createElement("p",{className:"my-2 tagList-heading"},"How Many"),ae["How Many"].map((function(e,t){return c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox",key:t},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:e,id:e+"howMany",checked:W.a.includes(x,e),onChange:function(e){return me(e,"tagDropDown","howMany")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:e+"howMany"},e))})),c.a.createElement("p",{className:"my-2 tagList-heading"},"Who is traveling"),ae["Who is traveling"].map((function(e,t){return c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox",key:t},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:e,id:e,checked:W.a.includes(k,e),onChange:function(e){return me(e,"tagDropDown","who")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:e},e))})))),c.a.createElement("div",{className:"w-25 tag-select-done-btn d-flex justify-content-center align-items-center mr-2 mb-2",onClick:function(){oe(!1)}},c.a.createElement("p",{className:"mb-0"},"Done"))):c.a.createElement("div",{className:"pt-3"},c.a.createElement(I,{who:k,number:x,howlong:H,themes:T,onClick:function(e){W.a.remove(k,(function(t){return t===e})),y(W.a.cloneDeep(k)),W.a.remove(x,(function(t){return t===e})),D(W.a.cloneDeep(x)),W.a.remove(H,(function(t){return t===e})),P(W.a.cloneDeep(H)),W.a.remove(T,(function(t){return t===e})),A(W.a.cloneDeep(T))}})))),c.a.createElement("div",{className:"d-flex px-2 pb-2 justify-content-between align-items-center"},c.a.createElement("p",{className:"select-item-name"},"Travelers Composition"),c.a.createElement("p",{className:"clear",onClick:function(){return se(3)}},"CLEAR")),c.a.createElement("div",{className:"px-2"},c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",checked:W.a.includes(J,"boys"),name:"boys",id:"boys",onChange:function(e){return me(e,"traveler","")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"boys"},"All Boys Travelers")),c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",checked:W.a.includes(J,"girls"),name:"girls",id:"girls",onChange:function(e){return me(e,"traveler","")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"girls"},"All Girls Travelers")),c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",checked:W.a.includes(J,"elderly"),name:"elderly",id:"elderly",onChange:function(e){return me(e,"traveler","")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"elderly"},"Suitable For The Elderly")),c.a.createElement("div",{className:"d-flex align-items-center custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",checked:W.a.includes(J,"kids"),name:"kids",id:"kids",onChange:function(e){return me(e,"traveler","")}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"kids"},"Suitable For Kids And Babies"))))))),c.a.createElement("div",{className:"w-full",style:{zIndex:"1"}},c.a.createElement("button",{className:"btn w-100 filter-btn",onClick:function(){var t=u?S()(u,"YYYY-MM-DD").format("M"):"",a=u?S()(u,"YYYY-MM-DD").format("Y"):"",n=g?S()(g,"YYYY-MM-DD").format("M"):"",c=g?S()(g,"YYYY-MM-DD").format("Y"):"",l=[0,0,0,0,0,0,0,0,0,0,0,0];if(""!==t&&""!==n&&""!==a&&""!==c){var r=Number(t),i=Number(n),s=Number(a),m=Number(c);if(m-s===0)for(var d=r;d<=i;d++)l[d-1]=1;if(m-s===1){for(var p=r;p<=12;p++)l[p-1]=1;for(var f=1;f<=i;f++)l[f-1]=1}m-s>1&&(l=[1,1,1,1,1,1,1,1,1,1,1,1])}var b={userId:e.userId,budget:o,months:l,who:k,howlong:H,themes:T,number:x,traveler:J};_.a.post(B+"/api-vacation/updateData",b,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log("Results: "+e)})).catch((function(e){return console.log("Login error: "+e)})),ie()}},"Filter"))),c.a.createElement("div",{className:"ml-3 list-box p-2"},c.a.createElement(O.a,{style:{height:"55vh",paddingRight:"15px"}},ee.map((function(t,a){return c.a.createElement(R,{key:a,item:t,userId:e.userId})})),c.a.createElement("div",{className:"d-flex justify-content-center mt-4"},ee.length!==$.length&&c.a.createElement("button",{className:"btn shadow-lg showMoreBtn",onClick:function(){te(W.a.union(ee,W.a.slice($,ee.length,ee.length+4)))}},"Show me more"))))))},H=(a(87),a(88),a(89),function(e){var t=Object(n.useState)(1),a=Object(h.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)([]),d=Object(h.a)(u,2),p=d[0],E=d[1],v=Object(n.useState)([]),y=Object(h.a)(v,2),N=y[0],x=y[1],O=Object(n.useState)([]),C=Object(h.a)(O,2),D=C[0],S=C[1],M=Object(n.useState)(),L=Object(h.a)(M,2),T=L[0],A=L[1],F=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(!0)}),[]),a}(),R=Object(n.useState)(!1),Y=Object(h.a)(R,2),I=Y[0],H=Y[1],P=Object(n.useState)(!1),G=Object(h.a)(P,2),V=(G[0],G[1],Object(n.useState)(!1)),J=Object(h.a)(V,2),K=J[0],U=J[1],Q=Object(n.useState)(Object(b.a)({},{1:[{name:"Family",clickable:!1},{name:"Friends",clickable:!1},{name:"Couple",clickable:!1},{name:"Solo",clickable:!1}],2:[{name:2,clickable:!1},{name:3,clickable:!1},{name:4,clickable:!1},{name:5,clickable:!1},{name:6,clickable:!1}],3:[{name:"Weekend",clickable:!1},{name:"Weekish",clickable:!1},{name:"Long Weekend",clickable:!1},{name:"Midweek",clickable:!1},{name:"2 Weeks",clickable:!1},{name:"3 Weeks",clickable:!1},{name:"4 Weeks",clickable:!1}],4:[{name:"Beach",clickable:!1},{name:"City Life",clickable:!1},{name:"Nature",clickable:!1},{name:"Surprise",clickable:!1},{name:"Countryside",clickable:!1},{name:"Other",clickable:!1}]})),$=Object(h.a)(Q,2),q=$[0],X=$[1],Z=function(e){return q[e].map((function(t,a){return c.a.createElement(g,{name:t.name,className:"child",key:a,sel:a,clicked:t.clickable,onClick:function(){return ee(e,a)}})}))};Object(n.useEffect)((function(){if(F){if(I)return;for(var e=0;e<q[1].length;e++)q[1][e].clickable=!1,X(Object(b.a)({},q));0===s.length||s.includes("Solo")||s.includes("Couple")||r(2),(s.includes("Solo")||s.includes("Couple"))&&(s.includes("Solo")?E([].concat(Object(f.a)(p),[1])):E([].concat(Object(f.a)(p),[2])),r(3))}}),[s]),Object(n.useEffect)((function(){if(F){if(I)return;for(var e=0;e<q[2].length;e++)q[2][e].clickable=!1,X(Object(b.a)({},q));0!==p.length&&r(3)}}),[p]),Object(n.useEffect)((function(){if(F){if(I)return;for(var e=0;e<q[3].length;e++)q[3][e].clickable=!1,X(Object(b.a)({},q));0!==N.length&&r(4)}}),[N]),Object(n.useEffect)((function(){if(F){if(I)return;for(var e=0;e<q[4].length;e++)q[4][e].clickable=!1,X(Object(b.a)({},q));0!==D.length&&r(5)}}),[D]),Object(n.useEffect)((function(){switch(l){case 1:m([]);break;case 2:E([]);break;case 3:x([]);break;case 4:S([]);break;case 5:te(),setTimeout((function(){U(!0)}),2e3)}}),[l]);var ee=function(e,t){q[e][t].clickable=!q[e][t].clickable,X(Object(b.a)({},q)),1===e&&(W.a.includes(s,q[e][t].name)?(W.a.remove(s,(function(a){return a===q[e][t].name})),m(W.a.cloneDeep(s))):m(W.a.union(s,[q[e][t].name]))),2===e&&(E(W.a.union(p,[q[e][t].name])),r(3),H(!1)),3===e&&(W.a.includes(N,q[e][t].name)?(W.a.remove(N,(function(a){return a===q[e][t].name})),x(W.a.cloneDeep(N))):x(W.a.union(N,[q[e][t].name]))),4===e&&(W.a.includes(D,q[e][t].name)?(W.a.remove(D,(function(a){return a===q[e][t].name})),S(W.a.cloneDeep(D))):S(W.a.union(D,[q[e][t].name])))},te=function(){_.a.post(B+"/api-vacation/storeData",{who:s,number:p,howlong:N,theme:D},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.data})).then((function(e){A(e),console.log("Successfully record created!")})).catch((function(e){return console.log("Login error: "+e)}))};return c.a.createElement("div",{className:"w-full"},c.a.createElement("div",{className:"w-full mx-auto"},c.a.createElement("div",{className:"header bg-img"},c.a.createElement("div",{className:"d-flex justify-content-between align-items-center mx-5",style:{paddingTop:"14px"}},c.a.createElement("a",{className:"logo",href:"/"},c.a.createElement("img",{src:"/static/images/logo.png",alt:"logo"})),c.a.createElement("div",{className:"d-flex topnav",style:{flexGrow:"0"}},c.a.createElement("a",{href:"/",style:{color:"brown"}},"Home"),c.a.createElement("a",{href:"#about"},"About"),c.a.createElement("a",{href:"#contact"},"Contact"))),c.a.createElement("div",{className:"d-flex mx-5 pt-3"},c.a.createElement("p",{className:"bg-white text-center rounded-lg py-1 notify"},"Find your next destination"))),K?c.a.createElement("div",{className:"w-full d-flex align-items-center justify-content-center px-4 form-card"},l<5?c.a.createElement("div",{className:"w-full mx-auto shadow-lg br-card",style:{display:"flex",flexDirection:"column",width:"40vw",minWidth:"400px",position:"relative"}},c.a.createElement("div",{className:"py-3 px-4"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",{style:{fontWeight:"300",fontSize:"1.2rem"}},"Adjust your search:"),c.a.createElement("div",null,1===l&&c.a.createElement(w,{percentage:0}),l>1&&c.a.createElement(w,{percentage:25*(l-1)}))),c.a.createElement("h2",{className:"text-center"},1===l&&"Who is travelling?",2===l&&"How Many?",3===l&&"How long?",4===l&&"Vacation Theme"),c.a.createElement("hr",{style:{width:"30%",marginTop:"10px",marginBottom:"10px"}}),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null),2!==l&&c.a.createElement(j,{onChange:function(){switch(H(!I),l){case 1:m([]);break;case 2:E([]);break;case 3:x([]);break;case 4:S([])}},checked:I}))),c.a.createElement("div",{className:"circle-field w-full",style:{height:"64%"}},1===l&&c.a.createElement(k,null,Z(1)),2===l&&c.a.createElement(k,null,Z(2)),3===l&&c.a.createElement(k,null,Z(3)),4===l&&c.a.createElement(k,null,Z(4))),c.a.createElement("div",{className:"pb-3 px-3",style:{width:"100%",position:"absolute",bottom:0}},c.a.createElement("div",{className:"d-flex justify-content-between w-full align-items-center"},l>1?c.a.createElement("img",{src:"/static/images/backArrow.png",alt:"backArrow",className:"back-forward-arrow",onClick:function(){switch(H(!1),l){case 2:E([]),r(1);break;case 3:x([]),1===s.length&&(W.a.includes(s,W.a.startCase("solo"))||W.a.includes(s,W.a.startCase("couple")))||2===s.length&&W.a.includes(s,W.a.startCase("solo"))&&W.a.includes(s,W.a.startCase("couple"))?(r(2),r(1)):r(2);break;case 4:S([]),r(3)}}}):c.a.createElement("div",null),c.a.createElement("div",null,c.a.createElement("img",{src:"/static/images/forwardArrow.png",alt:"forwardArrow",className:"back-forward-arrow",onClick:function(){switch(l){case 1:1===s.length&&s.includes("Solo")||1===s.length&&s.includes("Couple")||2===s.length&&s.includes("Solo")&&s.includes("Couple")?(1===s.length&&s.includes("Solo")&&E([].concat(Object(f.a)(p),[1])),1===s.length&&s.includes("Couple")&&E([].concat(Object(f.a)(p),[2])),2===s.length&&s.includes("Solo")&&s.includes("Couple")&&E([].concat(Object(f.a)(p),[3])),r(3)):r(2);break;case 2:r(3);break;case 3:r(4);break;case 4:r(5)}H(!1)}}))))):c.a.createElement("p",{className:"text-center font-weight-medium font-greeting"},"Searching ",c.a.createElement("span",{style:{display:"block"}},"for the best vacation")," for you")):c.a.createElement("div",{className:"w-full pt-2 px-5 form-card"},c.a.createElement(z,{userId:T,who:s,number:p,howlong:N,theme:D}))))}),P=function(){return c.a.createElement(p,null,c.a.createElement(d.a,{exact:!0,path:"/",component:H}))},G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(P,null))}}]),a}(n.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(95),a(96);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(G,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");V?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):J(e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.dcbb0d09.chunk.js.map