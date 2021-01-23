(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,a){e.exports=a(165)},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(125),a(13)),i=a(106),u=a(204),s=a(226),E=a(231),m=a(227),d=a(228),f=a(212),g=(a(126),a(229)),p=a(230),v=a(103),S=a.n(v),I=a(16),b=a(239),h=a(210),y=a(240),_=a(203),O=a(167),T=a(205),R=a(99),C=a.n(R),D=a(78),w=(a(127),a(11)),U=a(21),j=a.n(U);var F=function(e){return{type:"SET_ALERT",payload:e}},L=function(e){return function(t){t({type:"FETCH_MOVIE_REQUEST"}),j.a.get("anotherDoman/movie/"+e).then((function(a){var n=a.data.movie;n.averageRating=a.data.averageRating,t(function(e){return{type:"FETCH_MOVIE_SUCCESS",payload:e}}(n)),t(A("movie",e))})).catch((function(e){var a=e.message;t(F({type:"error",message:"Could not fetch movie"})),t({type:"FETCH_MOVIE_FAILURE",payload:a})}))}};j.a.defaults.adapter=a(60);var N=function(e){return{headers:{Authorization:e}}},A=function(e,t){return function(a){return a({type:"FETCH_REVIEWS_REQUEST"}),j.a.get("anotherDoman/"+e+"/"+t+"/reviews/").then((function(e){a({type:"FETCH_REVIEWS_SUCCESS",payload:e.data.reviews})})).catch((function(e){var t=e.message;a(function(e){return{type:"FETCH_REVIEWS_FAILURE",error:e}}(t)),a(F({type:"error",message:"Could not fetch reviews"}))}))}},k=function(e){return function(t){return t({type:"FETCH_REVIEW_REQUEST"}),j.a.get("anotherDoman/review/"+e).then((function(e){t({type:"FETCH_REVIEW_SUCCESS",payload:e.data})})).catch((function(e){var a=e.message;t(function(e){return{type:"FETCH_REVIEW_FAILURE",error:e}}(a)),t(F({type:"error",message:"Could not fetch review"}))}))}};j.a.defaults.adapter=a(60);var P=Object(w.b)((function(e){return{userInfo:e.userInfo}}),(function(e){return{loginUser:function(t,a){return e(function(e,t){return function(a){return a({type:"USER_LOGIN_REQUEST"}),j.a.post("anotherDoman/user/login",{username:e,password:t}).then((function(e){var t={username:e.data.username,userID:e.data.userID,token:e.data.token,expires:e.data.expires};a(function(e){return{type:"USER_LOGIN_SUCCESS",payload:e}}(t)),a(F({type:"success",message:"Successfully logged in!"}))})).catch((function(e){var t=e.message;a(function(e){return{type:"USER_LOGIN_FAILURE",payload:e}}(t)),a(F({type:"error",message:"Wrong username or password"}))}))}}(t,a))},registerUser:function(t,a){return e(function(e,t){return function(a){return a({type:"USER_REGISTER_REQUEST"}),j.a.post("anotherDoman/user/register",{username:e,password:t}).then((function(e){var t={username:e.data.username,userID:e.data.userID,token:e.data.token,expires:e.data.expires};a(function(e){return{type:"USER_REGISTER_SUCCESS",payload:e}}(t)),a(F({type:"success",message:"Successfully registered user!"}))})).catch((function(e){var t=e.message;a(function(e){return{type:"USER_REGISTER_FAILURE",payload:e}}(t)),a(F({type:"error",message:"Could not register user. Username might be taken"}))}))}}(t,a))}}}));function W(){return r.a.createElement(D.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(_.a,{color:"inherit"},"AMDb")," ",(new Date).getFullYear(),".")}var V=Object(u.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"20px",padding:"10px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),x=P((function(e){var t=Object(I.f)(),a=V(),n=e.type,o=e.userInfo,l=r.a.useState(""),i=Object(c.a)(l,2),u=i[0],s=i[1],m=r.a.useState(""),d=Object(c.a)(m,2),f=d[0],g=d[1];return r.a.useEffect((function(){o.loggedIn&&null===localStorage.getItem("currentUser")&&localStorage.setItem("currentUser",JSON.stringify(o.user))}),[o.loggedIn,o.user]),r.a.useEffect((function(){o.loggedIn&&t.replace("/user/"+o.user.userID)}),[o.loggedIn,o.user.userID,t]),r.a.createElement(T.a,{item:!0,xs:12,sm:8,md:5,component:O.a,elevation:6,id:"paperContainer"},r.a.createElement("div",{className:a.paper},r.a.createElement(b.a,{className:a.avatar},r.a.createElement(C.a,null)),r.a.createElement(D.a,{component:"h1",variant:"h5"},"login"===n?"Sign in":"Register"),r.a.createElement("form",{className:a.form,onSubmit:function(t){return function(t){t.preventDefault(),"login"===n?e.loginUser(u,f):e.registerUser(u,f)}(t)}},r.a.createElement(y.a,{"data-testid":"username1",inputProps:{"data-testid":"username_input"},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:u,onChange:function(e){return s(e.target.value)}}),r.a.createElement(y.a,{"data-testid":"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:f,onChange:function(e){return g(e.target.value)}}),r.a.createElement(h.a,{"data-testid":"submit",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"login"===n?"Sign in":"Register"),r.a.createElement(T.a,{container:!0},r.a.createElement(T.a,{item:!0},r.a.createElement(_.a,{onClick:function(){"login"===n?t.replace("/register"):t.replace("/login")},variant:"body2"},"login"===n?"Don't have an account? Register":"Already have an account? Sign in"))),r.a.createElement(E.a,{mt:5},r.a.createElement(W,null)))))})),H=a(214),B=a(211),G=function(){var e=Object(I.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(B.a,null),onClick:function(){e.goBack()}},"Back"))},Q=a(101),M=a(213),Y=a(238),q=(a(151),Object(w.b)((function(e){return{movieInfo:e.movieInfo,reviewInfo:e.reviewInfo,userInfo:e.userInfo}}),(function(e){return{fetchReviews:function(t,a){return e(A(t,a))}}}))((function(e){var t=Object(I.f)(),a=e.type,n=e.userInfo,o=e.reviewInfo.reviews,l=r.a.useState([]),i=Object(c.a)(l,2),u=i[0],s=i[1],m=r.a.useCallback((function(){var e,l=[],c=Object(Q.a)(o);try{var i=function(){var o=e.value;"movie"===a&&o.userID===n.user.userID||l.push(r.a.createElement(E.a,{key:o._id,className:"review",bgcolor:"secondary.light"},r.a.createElement("div",{className:"reviewContent"},r.a.createElement("div",{className:"reviewTop"},r.a.createElement("h3",{className:"noMargin"},"movie"===a?r.a.createElement(_.a,{href:"/user/"+o.userID},o.username):r.a.createElement(_.a,{href:"/movie/"+o.movieID},o.movieTitle)),r.a.createElement(f.a,{onClick:function(){return t.replace("/review/"+o._id)},size:"small"},r.a.createElement(M.a,null))),r.a.createElement(Y.a,{value:o.rating,readOnly:!0}),r.a.createElement("span",null,o.text))))};for(c.s();!(e=c.n()).done;)i()}catch(u){c.e(u)}finally{c.f()}s(l)}),[a,t,o,n.user.userID]);return r.a.useEffect((function(){m()}),[o,m]),r.a.createElement("div",{id:"reviewContainer"},u.length>0?u:r.a.createElement("p",null,"There are no reviews yet"))}))),z=(a(152),Object(w.b)((function(e){return{movieInfo:e.movieInfo,reviewInfo:e.reviewInfo,userInfo:e.userInfo}}),(function(e){return{postReview:function(t,a){return e(function(e,t){return function(a){return a({type:"POST_REVIEW_REQUEST"}),j.a.post("anotherDoman/review/",e,N(t)).then((function(t){a({type:"POST_REVIEW_SUCCESS"}),a(L(e.movieID)),a(F({type:"success",message:"Successfully posted review!"}))})).catch((function(e){var t=e.message;a(function(e){return{type:"POST_REVIEW_FAILURE",error:e}}(t)),a(F({type:"error",message:"Could not post review"}))}))}}(t,a))}}}))((function(e){var t=Object(I.f)(),a=r.a.useState(1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState(""),u=Object(c.a)(i,2),s=u[0],m=u[1],d=e.userInfo.loggedIn,g=e.reviewInfo.reviews.find((function(t){return t.userID===e.userInfo.user.userID}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your review"),r.a.createElement(E.a,{className:"review",bgcolor:"secondary.light"},r.a.createElement("div",{className:"reviewContent"},d?void 0===g?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Write your review"),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.postReview({rating:o,text:s,movieID:e.movieInfo.movie._id},e.userInfo.user.token)}(t)},id:"reviewForm"},r.a.createElement(Y.a,{name:"rating","aria-required":"true",value:o,onChange:function(e,t){l(null===t?1:t)}}),r.a.createElement(y.a,{multiline:!0,variant:"filled",label:"Your review",name:"text",required:!0,value:s,onChange:function(e){m(e.target.value)}}),r.a.createElement(h.a,{variant:"contained",color:"primary",type:"submit"},"Post review"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reviewTop"},r.a.createElement("h3",{className:"noMargin"},g.username),r.a.createElement(f.a,{onClick:function(){return t.replace("/review/"+g._id)},size:"small"},r.a.createElement(M.a,null))),r.a.createElement(Y.a,{value:g.rating,readOnly:!0}),r.a.createElement("span",null,g.text)):r.a.createElement(D.a,null,r.a.createElement(_.a,{href:"/login"},"Login"),r.a.createElement("span",null," to write a review")))))}))),J=(a(153),Object(w.b)((function(e){return{movieInfo:e.movieInfo}}),(function(e){return{fetchMovie:function(t){return e(L(t))}}}))((function(e){var t=e.fetchMovie,a=e.movieInfo,n=a.movie,o=Object(I.g)().movieID,l=new Date(Date.parse(n.release_date)).toDateString();return r.a.useEffect((function(){t(o)}),[o,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{id:"moviePage"},r.a.createElement("h1",{id:"title"},a.error?a.error:a.loading?"Loading...":n.title),r.a.createElement(H.a,null),a.loading||a.error?r.a.createElement(r.a.Fragment,null," "):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movieInfo"},r.a.createElement("div",{className:"contentContainerLeft"},r.a.createElement("img",{className:"poster",src:n.poster_path,alt:"This is the poster of the movie"})),r.a.createElement("div",{className:"contentContainerRight"},r.a.createElement("div",null,r.a.createElement("span",{className:"infoTitle"},"Description: "),r.a.createElement("br",null),r.a.createElement("span",null,n.desc)),r.a.createElement("div",null,r.a.createElement("span",{className:"infoTitle"},"Duration: "),r.a.createElement("span",null,0===n.duration?"N/A":n.duration+" min")),r.a.createElement("div",null,r.a.createElement("span",{className:"infoTitle"},"Genre: "),r.a.createElement("span",null,0===n.genre.length?"N/A":n.genre.join(", "))),r.a.createElement("div",null,r.a.createElement("span",{className:"infoTitle"},"Release date: "),r.a.createElement("span",null,"Invalid Date"===l?"N/A":l)),r.a.createElement("div",null,r.a.createElement("span",{className:"infoTitle"},"Budget: "),r.a.createElement("span",null,0===n.budget?"N/A":n.budget+" USD")),r.a.createElement("div",null,r.a.createElement("span",{className:"infoTitle"},"Average rating: "),r.a.createElement("span",null,null===n.averageRating?"No reviews yet":n.averageRating)))),r.a.createElement(H.a,null),r.a.createElement("div",{id:"reviews"},r.a.createElement(z,null),r.a.createElement("h2",null,"Other reviews"),r.a.createElement(q,{type:"movie"})))))}))),K=a(233),$=a(102),X=a.n($),Z=function(e){return{type:"UPDATE_CURRENT_PAGE",payload:e}},ee=(a(156),Object(w.b)((function(e){return{searchData:e.search}}),(function(e){return{updateCurrentPage:function(t){return e(Z(t))}}}))((function(e){var t=e.updateCurrentPage,a=r.a.useState(window.innerWidth),n=Object(c.a)(a,2),o=n[0],l=n[1];window.addEventListener("resize",(function(){return l(window.innerWidth)}));return r.a.createElement(K.a,{color:"primary",shape:"rounded",size:o<=430?"small":o<=520?"medium":"large",variant:"text",className:"pagination",count:e.searchData.totalPages,page:e.searchData.currentPage,onChange:function(e,a){t(a)}})}))),te=a(215),ae=a(216),ne=a(217),re=a(218),oe=(a(157),Object(w.b)((function(e){return{reviewInfo:e.reviewInfo,userInfo:e.userInfo}}),(function(e){return{fetchReview:function(t){return e(k(t))},deleteReview:function(t,a){return e(function(e,t){return function(a){return a({type:"DELETE_REVIEW_REQUEST"}),j.a.delete("anotherDoman/review/"+e,N(t)).then((function(e){a({type:"DELETE_REVIEW_SUCCESS"}),a(F({type:"success",message:"Successfully deleted review!"}))})).catch((function(e){var t=e.message;a(function(e){return{type:"DELETE_REVIEW_FAILURE",error:e}}(t)),a(F({type:"error",message:"Could not delete review"}))}))}}(t,a))},updateReview:function(t,a,n){return e(function(e,t,a){return function(n){n({type:"UPDATE_REVIEW_REQUEST"});var r={rating:e.rating,text:e.text,movieID:e.movieID};return j.a.put("anotherDoman/review/"+t,r,N(a)).then((function(e){n({type:"UPDATE_REVIEW_SUCCESS"}),n(F({type:"success",message:"Successfully updated review!"})),n(k(t))})).catch((function(e){var t=e.message;n(function(e){return{type:"UPDATE_REVIEW_FAILURE",error:e}}(t)),n(F({type:"error",message:"Could not update review"}))}))}}(t,a,n))}}}))),le=Object(u.a)((function(e){return{warningButton:{backgroundColor:e.palette.warning.main,"&:hover":{backgroundColor:e.palette.warning.dark}},errorButton:{backgroundColor:e.palette.error.main,"&:hover":{backgroundColor:e.palette.error.dark}}}})),ce=oe((function(e){var t=Object(I.f)(),a=le(),n=e.reviewInfo.viewingReview,o=e.fetchReview,l=e.updateReview,i=e.deleteReview,u=Object(I.g)().reviewID,s=n.userID===e.userInfo.user.userID,E=r.a.useState(!1),m=Object(c.a)(E,2),d=m[0],f=m[1],g=r.a.useState(n.rating),p=Object(c.a)(g,2),v=p[0],S=p[1],b=r.a.useState(n.text),O=Object(c.a)(b,2),T=O[0],R=O[1];return r.a.useEffect((function(){S(n.rating)}),[n.rating]),r.a.useEffect((function(){o(u)}),[u,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{id:"reviewPage"},e.reviewInfo.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(_.a,{href:"/user/"+n.userID},n.username),"'s review of \"",r.a.createElement(_.a,{href:"/movie/"+n.movieID},n.movieTitle),'"'),r.a.createElement(H.a,null),r.a.createElement(Y.a,{name:"rating",readOnly:!d,value:v,onChange:function(e,t){S(null===t?1:t)}}),d?r.a.createElement(y.a,{value:T,onChange:function(e){R(e.target.value)}}):r.a.createElement("p",null,n.text),r.a.createElement("div",{id:"reviewButtons",className:s?"showing":"hiding"},r.a.createElement("div",{className:d?"showing":"hiding"},r.a.createElement(h.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(te.a,null),onClick:function(){""===T?window.alert("You must write something in your review"):(l({rating:v,text:T,movieID:n.movieID},n._id,e.userInfo.user.token),f(!1))}},"Update")),r.a.createElement(h.a,{className:a.warningButton,variant:"contained",onClick:function(){f(!d),S(n.rating),R(n.text)},startIcon:d?r.a.createElement(ae.a,null):r.a.createElement(ne.a,null)},d?"Cancel":"Edit"),r.a.createElement(h.a,{variant:"contained",className:a.errorButton,startIcon:r.a.createElement(re.a,null),onClick:function(){window.confirm("Do you want to delete this review?")&&(i(n._id,e.userInfo.user.token),t.replace("/"))}},"Delete")))))})),ie=(a(158),a(107)),ue=(a(159),a(236)),se=a(219),Ee=a(220),me=a(221),de=a(222),fe=Object(w.b)((function(e){return{filterData:e.filter}}),(function(e){return{updateCurrentPage:function(t){return e(Z(t))},setFilters:function(t){return e({type:"SET_FILTERS",payload:t})},closeFilterDialog:function(){return e({type:"CLOSE_FILTER_DIALOG"})}}})),ge=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"],pe=fe((function(e){var t=r.a.useState(void 0===e.filterData.filters.genre?[]:e.filterData.filters.genre),a=Object(c.a)(t,2),n=a[0],o=a[1],l=r.a.useState([]),i=Object(c.a)(l,2),u=i[0],s=i[1],E=r.a.useState(void 0===e.filterData.filters.duration?{gt:0,lt:1/0}:e.filterData.filters.duration),m=Object(c.a)(E,2),d=m[0],f=m[1],g=r.a.useState(void 0===e.filterData.filters.budget?{gt:0,lt:1/0}:e.filterData.filters.budget),p=Object(c.a)(g,2),v=p[0],S=p[1],I=r.a.useCallback((function(e){if(n.includes(e)){var t=n.filter((function(t){return t!==e}));o(t)}else{var a=n;a.push(e),o(Object(ie.a)(a))}}),[n]),b=r.a.useCallback((function(){var e=[];ge.forEach((function(t,a){var o=r.a.createElement(h.a,{key:a,color:"primary",variant:n.includes(t)?"contained":"outlined",onClick:function(){return I(t)}},t);e.push(o)})),s(e)}),[n,I]),_=function(){e.updateCurrentPage(1),e.setFilters(function(){var e={};return n.length>0&&(e.genre=n),(d.gt>0||d.lt<1/0)&&(e.duration=d),(v.gt>0||v.lt<1/0)&&(e.budget=v),e}()),e.closeFilterDialog()};return r.a.useEffect((function(){b()}),[b]),r.a.createElement(ue.a,{open:e.filterData.open,onClose:_,id:"filters"},r.a.createElement(se.a,null,"Filters"),r.a.createElement(Ee.a,null,r.a.createElement(me.a,null,"Genres"),r.a.createElement("div",{className:"genreButtons"},u),r.a.createElement("div",null,r.a.createElement(me.a,null,"Duration (minutes)")),r.a.createElement("div",{className:"numberInputs"},r.a.createElement(y.a,{label:"From",variant:"filled",type:"number",InputProps:{inputProps:{min:0}},value:0===d.gt?"":d.gt,onChange:function(e){""===e.target.value?f({gt:0,lt:d.lt}):f({gt:parseInt(e.target.value),lt:d.lt})}}),r.a.createElement(y.a,{label:"To",variant:"filled",type:"number",InputProps:{inputProps:{min:0}},value:d.lt===1/0?"":d.lt,onChange:function(e){""===e.target.value?f({gt:d.gt,lt:1/0}):f({gt:d.gt,lt:parseInt(e.target.value)})}})),r.a.createElement("div",null,r.a.createElement(me.a,null,"Budget (dollars)")),r.a.createElement("div",{className:"numberInputs"},r.a.createElement(y.a,{label:"From",variant:"filled",type:"number",InputProps:{inputProps:{min:0}},value:0===v.gt?"":v.gt,onChange:function(e){""===e.target.value?S({gt:0,lt:v.lt}):S({gt:parseInt(e.target.value),lt:v.lt})}}),r.a.createElement(y.a,{label:"To",variant:"filled",type:"number",InputProps:{inputProps:{min:0}},value:v.lt===1/0?"":v.lt,onChange:function(e){""===e.target.value?S({gt:v.gt,lt:1/0}):S({gt:v.gt,lt:parseInt(e.target.value)})}}))),r.a.createElement(de.a,null,r.a.createElement(h.a,{onClick:_,color:"primary"},"Close")))})),ve=a(208),Se=a(242),Ie=a(232),be=a(243),he=a(223),ye=a(224),_e=(a(160),Object(w.b)((function(e){return{sortData:e.sort}}),(function(e){return{setSortTypeTitle:function(){return e({type:"SET_SORT_TYPE_TITLE"})},setSortTypeDuration:function(){return e({type:"SET_SORT_TYPE_DURATION"})},setSortTypeBudget:function(){return e({type:"SET_SORT_TYPE_BUDGET"})},setSortDirectionAscending:function(){return e({type:"SET_SORT_DIRECTION_ASCENDING"})},setSortDirectionDescending:function(){return e({type:"SET_SORT_DIRECTION_DESCENDING"})}}}))((function(e){var t=e.sortData.descending;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(Se.a,null,"Sort by:"),r.a.createElement(Ie.a,{className:"select",variant:"outlined",defaultValue:e.sortData.type,label:"Sort by:",onChange:function(t){var a=t.target.value;"title"===a?e.setSortTypeTitle():"duration"===a?e.setSortTypeDuration():"budget"===a&&e.setSortTypeBudget()}},r.a.createElement(be.a,{value:"title"},"Title"),r.a.createElement(be.a,{value:"duration"},"Duration"),r.a.createElement(be.a,{value:"budget"},"Budget"))),r.a.createElement(f.a,{className:"iconButton",onClick:function(){t?e.setSortDirectionAscending():e.setSortDirectionDescending()}},t?r.a.createElement(he.a,null):r.a.createElement(ye.a,null)))}))),Oe=Object(w.b)((function(e){return{searchData:e.search}}),(function(e){return{updateSearchQuery:function(t){return e(function(e){return{type:"UDATE_SEARCH_QUERY",payload:e}}(t))},openFilterDialog:function(){return e({type:"OPEN_FILTER_DIALOG"})}}}))((function(e){var t=r.a.useState(setTimeout((function(){}),0)),a=Object(c.a)(t,2),n=a[0],o=a[1],l=r.a.useState(e.searchData.query),i=Object(c.a)(l,2),u=i[0],s=i[1],E=e.updateSearchQuery,m=r.a.useCallback((function(){E(u)}),[u,E]),d=r.a.useRef(!0);return r.a.useEffect((function(){d.current?d.current=!1:o(setTimeout(m,1e3))}),[u,m]),r.a.createElement("div",{id:"searchBar"},r.a.createElement("div",{id:"sortSelect"},r.a.createElement(_e,null)),r.a.createElement("div",{id:"textField"},r.a.createElement(y.a,{id:"textField",label:"Title",color:"secondary",variant:"filled",value:u,onChange:function(e){clearTimeout(n),s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(clearTimeout(n),m())},fullWidth:!0})),r.a.createElement("div",{id:"searchBarButtonsContainer"},r.a.createElement(h.a,{className:"searchBarButton",variant:"contained",color:"primary",onClick:e.openFilterDialog},"Filters"),r.a.createElement(pe,null),r.a.createElement(h.a,{className:"searchBarButton",onClick:function(){clearTimeout(n),m()},variant:"contained",color:"primary"},"Search")))})),Te=(a(161),function(e){var t=Object(I.f)();return r.a.createElement(E.a,{onClick:function(){return t.push("movie/"+e.id)},className:"result",bgcolor:"secondary.light",boxShadow:3,color:"text.secondary","data-testid":"boxen"},r.a.createElement("img",{className:"resultImg",src:e.posterPath,alt:e.title+" poster"}),r.a.createElement("p",{className:"title"},e.title))}),Re=(a(162),Object(w.b)((function(e){return{searchData:e.search,filterData:e.filter,sortData:e.sort}}),(function(e){return{fetchResults:function(t){return e(function(e){return function(t){t({type:"FETCH_RESULTS_REQUEST"}),j.a.get("anotherDoman/movie",{params:e,paramsSerializer:function(e){return X.a.stringify(e)}}).then((function(e){var a=e.data;t({type:"FETCH_RESULTS_SUCCESS",payload:a.movies}),t({type:"UPDATE_TOTAL_PAGES",payload:a.totalPages})})).catch((function(e){var a=e.message;t(function(e){return{type:"FETCH_RESULTS_FAILURE",payload:e}}(a)),t(F({type:"error",message:"Something went wrong with your search"}))}))}}(t))}}}))((function(e){var t=e.sortData,a=e.filterData.filters,n=e.searchData.currentPage,o=e.searchData.query,l=e.fetchResults,c=r.a.useCallback((function(){return{q:o,page:n,genre:a.genre,duration:a.duration,budget:a.budget,sort:{type:t.type,descending:t.descending}}}),[o,n,a,t]);r.a.useEffect((function(){l(c())}),[o,n,a,t,l,c]);return r.a.createElement("div",{id:"results"},e.searchData.loading?r.a.createElement("p",null,"Loading"):e.searchData.error?r.a.createElement("p",null,e.searchData.error):e.searchData.results?0===e.searchData.results.length?r.a.createElement("p",null,"Your query gave no results"):e.searchData.results.map((function(e){return r.a.createElement(Te,{key:e._id,id:e._id,title:e.title,posterPath:e.poster_path})})):void 0)}))),Ce=a(225),De=(a(163),Object(w.b)((function(e){return{userInfo:e.userInfo}}),(function(e){return{fetchUser:function(t){return e(function(e){return function(t){return t({type:"FETCH_USER_REQUEST"}),j.a.get("anotherDoman/user/"+e).then((function(e){var a={username:e.data.username,userID:e.data._id,reviews:e.data.reviews};t(function(e){return{type:"FETCH_USER_SUCCESS",payload:e}}(a)),t(A("user",a.userID))})).catch((function(e){var a=e.message;t(function(e){return{type:"FETCH_USER_FAILURE",payload:e}}(a)),t(F({type:"error",message:"Could not fetch user"}))}))}}(t))},userLogout:function(){return e({type:"USER_LOGOUT"})},deleteUser:function(t,a){return e(function(e,t){return function(a){return a({type:"DELETE_USER_REQUEST",payload:e}),j.a.delete("anotherDoman/user/"+e,function(e){return{headers:{Authorization:e}}}(t)).then((function(e){a({type:"DELETE_USER_SUCCESS"}),a({type:"USER_LOGOUT"}),a(F({type:"success",message:"User successfully deleted!"}))})).catch((function(e){var t=e.message;a(function(e){return{type:"DELETE_USER_FAILURE",payload:e}}(t)),a(F({type:"error",message:"Could not delete user"}))}))}}(t,a))}}}))),we=Object(u.a)((function(e){return{warningButton:{backgroundColor:e.palette.warning.main,"&:hover":{backgroundColor:e.palette.warning.dark}},errorButton:{backgroundColor:e.palette.error.main,"&:hover":{backgroundColor:e.palette.error.dark}}}})),Ue=De((function(e){var t=Object(I.f)(),a=we(),n=Object(I.g)().userID,o=n===e.userInfo.user.userID,l=e.userInfo.viewingUser,c=e.fetchUser;return r.a.useEffect((function(){c(n)}),[n,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("h1",null,o?"Your user info:":"User info of user "+l.username+":"),r.a.createElement("p",null,"Username: ",l.username),r.a.createElement("p",null,"User ID: ",l.userID),r.a.createElement("div",{id:"userButtons",className:o?"showing":"hiding"},r.a.createElement(h.a,{className:a.warningButton,variant:"contained",startIcon:r.a.createElement(Ce.a,null),onClick:function(){e.userLogout(),t.replace("/")}},"Logout"),r.a.createElement(h.a,{className:a.errorButton,variant:"contained",startIcon:r.a.createElement(re.a,null),onClick:function(){window.confirm("Do you want to delete your user?")&&(e.deleteUser(e.userInfo.user.userID,e.userInfo.user.token),t.replace("/"))}},"Delete")),r.a.createElement("h2",null,o?"Your reviews":"Reviews of "+l.username),r.a.createElement(q,{type:"user"}))})),je=(a(164),function(){return r.a.createElement("div",{id:"switchContainer"},r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/"},r.a.createElement("div",{id:"searchContainer"},r.a.createElement(Oe,null),r.a.createElement(ee,null),r.a.createElement(Re,null),r.a.createElement(ee,null))),r.a.createElement(I.a,{path:"/movie/:movieID"},r.a.createElement(J,null)),r.a.createElement(I.a,{path:"/user/:userID"},r.a.createElement(Ue,null)),r.a.createElement(I.a,{path:"/review/:reviewID"},r.a.createElement(ce,null)),r.a.createElement(I.a,{path:"/login"},r.a.createElement(x,{type:"login"})),r.a.createElement(I.a,{path:"/register"},r.a.createElement(x,{type:"register"})),r.a.createElement(I.a,null,r.a.createElement("h1",null,"404"))))}),Fe=a(237),Le=a(235),Ne=Object(w.b)((function(e){return{alertInfo:e.alertInfo}}),(function(e){return{closeAlert:function(){return e({type:"CLOSE_ALERT"})}}}))((function(e){return r.a.createElement(Fe.a,{open:e.alertInfo.open,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:5e3,onClose:function(){e.closeAlert()}},r.a.createElement(Le.a,{variant:"filled",onClose:function(){e.closeAlert()},severity:e.alertInfo.alert.type},e.alertInfo.alert.message))})),Ae=Object(w.b)((function(e){return{userInfo:e.userInfo}}),(function(e){return{resetSearch:function(){return e({type:"RESET_SEARCH"})},resetFilters:function(){return e({type:"RESET_FILTERS"})}}}))((function(e){var t=r.a.useState(!0),a=Object(c.a)(t,2),n=a[0],o=a[1],l={main:"#7cec9f",light:"#b0ffd0",dark:"#47b970"},v=Object(i.a)({palette:{primary:l,secondary:{main:"#e8e8e8",light:"#ffffff",dark:"#b6b6b6"},success:l,type:"light"}}),b=Object(i.a)({palette:{primary:l,secondary:{main:"#212121",light:"#484848",dark:"#000000"},success:l,type:"dark"}}),h=r.a.useMemo((function(){return n?b:v}),[n,b,v]),y=Object(u.a)((function(){return{appBar:{backgroundColor:h.palette.secondary.light}}}))(),_=Object(I.f)();return r.a.createElement(s.a,{theme:h},r.a.createElement(E.a,{className:"App",bgcolor:"secondary.main",color:"text.secondary"},r.a.createElement(m.a,{position:"fixed",className:y.appBar},r.a.createElement(d.a,null,r.a.createElement("img",{id:"logo",src:"./resources/images/logo.png",alt:"logo",onClick:function(){_.replace("/"),e.resetSearch(),e.resetFilters()}}),r.a.createElement("div",{className:"grow"}),r.a.createElement(f.a,{onClick:function(){return o(!n)}},n?r.a.createElement(g.a,null):r.a.createElement(p.a,null)),r.a.createElement(f.a,{onClick:function(){e.userInfo.loggedIn?_.push("/user/"+e.userInfo.user.userID):_.push("/login")}},r.a.createElement(S.a,null)))),r.a.createElement(je,null)),r.a.createElement(Ne,null),r.a.createElement(E.a,{id:"footer",bgcolor:"secondary.light",color:"text.secondary",boxShadow:3},r.a.createElement("div",{id:"footerContent"},r.a.createElement("span",null,"Made with love ","<3"))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(35),Pe=a(104),We=a(105),Ve=a(4),xe={loading:!1,results:[],error:"",query:"",totalPages:1,currentPage:1},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RESULTS_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"FETCH_RESULTS_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,results:t.payload,error:""});case"FETCH_RESULTS_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,results:[],error:t.payload});case"UDATE_SEARCH_QUERY":return Object(Ve.a)(Object(Ve.a)({},e),{},{query:t.payload,currentPage:1});case"UPDATE_CURRENT_PAGE":return Object(Ve.a)(Object(Ve.a)({},e),{},{currentPage:t.payload});case"UPDATE_TOTAL_PAGES":return Object(Ve.a)(Object(Ve.a)({},e),{},{totalPages:t.payload});case"RESET_SEARCH":return xe;default:return e}},Be={open:!1,filters:{}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTERS":return Object(Ve.a)(Object(Ve.a)({},e),{},{filters:t.payload});case"OPEN_FILTER_DIALOG":return Object(Ve.a)(Object(Ve.a)({},e),{},{open:!0});case"CLOSE_FILTER_DIALOG":return Object(Ve.a)(Object(Ve.a)({},e),{},{open:!1});case"RESET_FILTERS":return Be;default:return e}},Qe={type:"title",descending:!0},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_TYPE_TITLE":return Object(Ve.a)(Object(Ve.a)({},e),{},{type:"title"});case"SET_SORT_TYPE_DURATION":return Object(Ve.a)(Object(Ve.a)({},e),{},{type:"duration"});case"SET_SORT_TYPE_BUDGET":return Object(Ve.a)(Object(Ve.a)({},e),{},{type:"budget"});case"SET_SORT_DIRECTION_ASCENDING":return Object(Ve.a)(Object(Ve.a)({},e),{},{descending:!1});case"SET_SORT_DIRECTION_DESCENDING":return Object(Ve.a)(Object(Ve.a)({},e),{},{descending:!0});default:return e}},Ye={loading:!1,error:"",movie:{genre:[],reviews:[],_id:"",title:"",poster_path:"",desc:"",budget:-1,release_date:"",duration:-1,averageRating:-1}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"FETCH_MOVIE_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,movie:t.payload,error:""});case"FETCH_MOVIE_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,movie:Ye.movie,error:t.payload});default:return e}},ze=function(){var e=localStorage.getItem("currentUser");if(null!==e){var t=new Date;JSON.parse(e).expires<t.getTime()&&(localStorage.removeItem("currentUser"),e=null)}return null!==e?{loggedIn:!0,loading:!1,error:"",user:JSON.parse(e),viewingUser:{username:"",userID:"",reviews:[]}}:{loggedIn:!1,loading:!1,error:"",user:{username:"",userID:"",token:"",expires:0},viewingUser:{username:"",userID:"",reviews:[]}}}(),Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"USER_LOGIN_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loggedIn:!0,loading:!1,user:t.payload,error:""});case"USER_LOGIN_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loggedIn:!1,loading:!1,user:ze.user,error:t.payload});case"USER_REGISTER_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"USER_REGISTER_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loggedIn:!0,loading:!1,user:t.payload,error:""});case"USER_REGISTER_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,user:ze.user,error:t.payload});case"FETCH_USER_REQUEST":return Object(Ve.a)({},e);case"FETCH_USER_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{viewingUser:t.payload});case"FETCH_USER_FAILURE":return Object(Ve.a)({},e);case"DELETE_USER_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"DELETE_USER_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loggedIn:!1,loading:!1,error:"",user:{username:"",userID:"",token:"",expires:0}});case"DELETE_USER_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:t.payload});case"USER_LOGOUT":return localStorage.removeItem("currentUser"),Object(Ve.a)(Object(Ve.a)({},e),{},{loggedIn:!1,loading:!1,error:"",user:{username:"",userID:"",token:"",expires:0}});default:return e}},Ke={loading:!1,error:"",reviews:[],viewingReview:{_id:"",rating:-1,text:"",movieID:"",userID:"",username:"",movieTitle:""}},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_REVIEW_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"POST_REVIEW_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:""});case"POST_REVIEW_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:t.error});case"UPDATE_REVIEW_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"UPDATE_REVIEW_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:""});case"UPDATE_REVIEW_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:t.error});case"DELETE_REVIEW_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"DELETE_REVIEW_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:""});case"DELETE_REVIEW_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:t.error});case"FETCH_REVIEWS_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"FETCH_REVIEWS_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:"",reviews:t.payload});case"FETCH_REVIEWS_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:t.error});case"FETCH_REVIEW_REQUEST":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!0});case"FETCH_REVIEW_SUCCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:"",viewingReview:t.payload});case"FETCH_REVIEW_FAILURE":return Object(Ve.a)(Object(Ve.a)({},e),{},{loading:!1,error:t.error});default:return e}},Xe={open:!1,alert:{type:"success",message:""}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERT":return{open:!0,alert:t.payload};case"CLOSE_ALERT":return Object(Ve.a)(Object(Ve.a)({},e),{},{open:!1});default:return e}},et=Object(ke.combineReducers)({search:He,filter:Ge,sort:Me,movieInfo:qe,userInfo:Je,reviewInfo:$e,alertInfo:Ze}),tt=Object(ke.createStore)(et,Object(Pe.composeWithDevTools)(Object(ke.applyMiddleware)(We.a))),at=a(26);l.a.render(r.a.createElement(w.a,{store:tt},r.a.createElement(at.a,null,r.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.b4262aae.chunk.js.map